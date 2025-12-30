
import Card from './Card';

function Product({ title, price }) {
  return (
    <Card>
      <h2 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>{title}</h2>
      <p style={{ margin: 0, color: "#353232ff" }}>Price: <strong>${price}</strong></p>
    </Card>
  );
}

export default Product;