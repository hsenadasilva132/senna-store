import "../../styles/marquee.css";

export default function CategoryMarquee({ items }) {

    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="categories-marquee">
            <div className="marquee-track">
                {repeatedItems.map((item, index) => (
                    <span key={index}>
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
        
    );
}