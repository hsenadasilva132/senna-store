import { useEffect, useState, useRef } from "react";
import { FiChevronDown } from 'react-icons/fi';

function ShopSelect({ label, value, options, onChange }) {

    const [isOpen, setIsOpen] = useState(false);

    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, []);

    const selectedOption = options.find(option => option.value === value);

    return (
        <div className={`shop-select ${isOpen ? "open" : ""}`} ref={selectRef}>
            <button type="button" className="shop-select-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="shop-select-label">{label}</span>                
                <span className="shop-select-value">{selectedOption?.label}</span>
                <FiChevronDown className="shop-select-arrow" />
            </button>
            {isOpen && (
                <div className="shop-select-options">
                    {options.map(option => (
                        <button
                            type="button"
                            key={option.value}
                            className={`shop-select-option ${
                                    value === option.value
                                    ? "selected"
                                    : ""
                                }`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        > 
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ShopSelect;