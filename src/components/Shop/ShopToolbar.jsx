import '../../styles/shopToolbar.css'
//import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import ShopSelect from './ShopSelect';

function ShopToolbar({
    toolbarRef,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    onlyDiscounted,
    onClearSale,
    onClearCategory
}) {

    const categoryOptions = [
        {
            value: "all",
            label: "Todas"
        },
        ...categories.map(category => ({
            value: category,
            label: category
        }))
    ];

    const sortOptions = [
        {
            value: "relevant",
            label: "Mais Relevantes"
        },
        {
            value: "name",
            label: "Nome"
        },
        {
            value: "price-low",
            label: "Preço Baixo"
        },
        {
            value: "price-high",
            label: "Preço Alto"
        }
    ]


    //console.log(onClearSale);
    
    return (
        <section className='shop-toolbar' ref={toolbarRef}>
            <div className='shop-toolbar-left'>
                <label className='shop-search'>
                    <FiSearch />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Pesquisar produtos"
                    />
                </label>
                <span className='shop-results-count'>
                    {searchTerm
                        ? `Resultados para ${searchTerm}`
                        : `${selectedCategory === "all"
                            ? "Todos os produtos"
                            : selectedCategory
                        }`
                    }
                </span>
                <strong>{categories.length > 0 ? "" : ""}</strong>
            </div>
            <div className='shop-toolbar-right'>
                {onlyDiscounted && (
                <div className='shop-sale-filter'>
                    <span>Ofertas</span>
                    <button onClick={onClearSale}>
                        X
                    </button>
                </div>
                )}
                {selectedCategory !== "all" && (
                    <div className='shop-sale-filter'>
                        <span>{selectedCategory}</span>
                        <button onClick={onClearCategory}>
                            X
                        </button>
                    </div>
                )}
                <ShopSelect
                    label="Categoria"
                    value={selectedCategory}
                    options={categoryOptions}
                    onChange={setSelectedCategory}
                />

                <ShopSelect
                    label="Ordenar"
                    value={sortBy}
                    options={sortOptions}
                    onChange={setSortBy}
                />
            
                {/* {onlyDiscounted && (
                <div className='shop-sale-filter'>
                    <span>Ofertas</span>
                    <button onClick={onClearSale}>
                        X
                    </button>
                </div>
                )}
                {selectedCategory !== "all" && (
                    <div className='shop-sale-filter'>
                        <span>{selectedCategory}</span>
                        <button onClick={onClearCategory}>
                            X
                        </button>
                    </div>
                )}
                <label className='shop-select'>
                    <span>Categoria</span>
                    <select
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)
                        }
                    >
                        <option value="all">Todas</option>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown />
                </label>
                <label className='shop-select'>
                    <span>Ordenar</span>
                    <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                        <option value="relevant">
                            Mais Relevantes
                        </option>                        
                        <option value="name">
                            Nome
                        </option>                        
                        <option value="price-low">
                            Menor Preço
                        </option>                        
                        <option value="price-high">
                            Maior Preço
                        </option>                        
                    </select>
                    <FiChevronDown />
                </label> */}

            </div>
        </section>
    )
}

export default ShopToolbar;