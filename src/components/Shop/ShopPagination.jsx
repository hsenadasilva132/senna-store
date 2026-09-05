function ShopPagination({ currentPage, totalPages, onPageChange }) {

    return (
        <section className="shop-pagination"> 
            {Array.from(
                { length: totalPages },
                (_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => onPageChange(index + 1)}>
                        
                        {index + 1}
                    </button>
                )
            )}
        </section>
    )
}

export default ShopPagination;