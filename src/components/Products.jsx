import ProductBox from "./ProductBox.jsx";

export default function Products({ list }) {
  return (
    <div className="product-list-container">
      <ul className="product-list">
        {list.map((product) => (
          <li key={product.id}>
            <ProductBox title={product.title} image={product.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
