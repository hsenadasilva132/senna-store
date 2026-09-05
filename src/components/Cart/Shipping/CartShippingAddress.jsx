import '../../../styles/shippingAddress.css'

import { useState } from "react";
import { useCart } from '../../../context/CartContext';

function CartShippingAddress() {

    const { address, setAddress } = useCart();

    const [editing, setEditing] = useState(false);

    const [form, setForm] = useState(address);

    const [loadingCep, setLoadingCep] = useState(false);

    const [cepError, setCepError] = useState("");

    function handleCepChange(e) {
        const rawValue = e.target.value.replace(/\D/g, "");
        //console.log("números digitados", rawValue, "| tamanho:", rawValue.length);

        const masked = rawValue.length > 5
            ? `${rawValue.slice(0, 5)}-${rawValue.slice(5, 8)}`
            : rawValue;
        
        setForm({ ...form, cep: masked });
        setCepError("");

        if (rawValue.length === 8) {
            fetchAddressByCep(rawValue);
        }
    }


    async function fetchAddressByCep(cep) {
        setLoadingCep(true);

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                setCepError("CEP não encontrado.")
                setLoadingCep(false);
                return;
            }

            setForm(prev => ({
                ...prev,
                street: data.logradouro,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf,
                number: "",
                complement: "",
                reference: ""
            }));
        } catch (error) {
            setCepError("Não foi possivel buscar o CEP. Tente novamente.");
        } finally {
            setLoadingCep(false);
        }
    }

    function handleFieldChange(field, value) {
        setForm({...form, [field] : value})
    }

    function handleSave() {
        setAddress(form);
        setEditing(false)
    }

    function handleCancel() {
        setForm(address);
        setEditing(false);
    }

    if (!editing) {
        return (
            <>
            <div className="selected-address">
                <div>
                    <span>Endereço selecionado</span>
                        <h3>{address.street} {address.number}</h3>
                    <p>
                        {address.neighborhood}, {address.city} - {address.state}
                            {" "}• CEP {address.cep}
                    </p>
                </div>
                <button onClick={() => setEditing(true)}>
                    Alterar
                </button>
            </div>

            <div className="address-details">
                <div>
                    <span>Complemento</span>
                    <p>{address.complement || "-"}</p>
                </div>
                <div>
                    <span>Referência</span>
                        <p>{address.reference || "-"}</p>
                </div>
            </div>
            </> 
        )
    } 

    return (
        <div className="address-edit-card">
            <div className="edit-header">
                <span>Novo endereço</span>
                <button className="cancel-link" onClick={handleCancel}>Cancelar</button>
            </div>

            <div className="field">
                <label>CEP</label>
                <input
                    type="text"
                    value={form.cep}
                    onChange={handleCepChange}
                    placeholder="00000-000"
                    maxLength={9}
                />
                {loadingCep && <span className="field-hint">Buscando endereço...</span>}
                {cepError && <span className="field-hint error">{cepError}</span>}
            </div>

            <div className="field field-wide">
                <label>Rua</label>
                <input
                    type="text"
                    value={form.street || ""}
                    onChange={(e) => handleFieldChange("street", e.target.value)}
                    placeholder="Preenchido automaticamente"
                />
            </div>

            <div className="field">
                <label>Número</label>
                <input
                    type="text"
                    value={form.number || ""}
                    onChange={(e) => handleFieldChange("number", e.target.value)}
                    placeholder="Nº"
                />
            </div>

            <div className="field">
                <label>Bairro</label>
                <input
                    type="text"
                    value={form.neighborhood || ""}
                    onChange={(e) => handleFieldChange("neighborhood", e.target.value)}
                />
            </div>

            <div className="field">
                <label>Cidade / UF</label>
                <input
                    type="text"
                    value={form.city && form.state ? `${form.city} / ${form.state}` : ""}
                    readOnly
                />
            </div>

            <div className="field">
                <label>Complemento</label>
                <input
                    type="text"
                    value={form.complement || ""}
                    onChange={(e) => handleFieldChange("complement", e.target.value)}
                    placeholder="(opcional)"
                />
            </div>

            <div className="field">
                <label>Referência</label>
                <input
                    type="text"
                    value={form.reference || ""}
                    onChange={(e) => handleFieldChange("reference", e.target.value)}
                    placeholder="Ponto de referência"
                />
            </div>

            <button className="save-address" onClick={handleSave}>
                Salvar endereço
            </button>
        </div>
    )
        //</section>
}

export default CartShippingAddress;