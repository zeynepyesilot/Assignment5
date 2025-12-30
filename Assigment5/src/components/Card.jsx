
function Card({ children }) {

  const cardStyle = {
    border: "1px solid #9234ccff",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(10, 32, 175, 0.1)",
    backgroundColor: "#efdff7ff"
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

export default Card;