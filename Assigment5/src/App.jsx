
import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {

  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    border: "1px solid #9126cbff",
    borderRadius: "4px"
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#d8a6f7ff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "20px"
  };

  return (
    <div style={containerStyle}>
   
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Enter your name:</label>
        <input 
          type="text" 
          placeholder="Type your name..." 
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

     
      <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
        Hello, {name}
      </p>

      <hr style={{ margin: "20px 0", border: "1px solid #ac80d5ff" }} />

      <button 
        style={buttonStyle} 
        onClick={() => setShowProducts(!showProducts)}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
      
    </div>
  );
}

export default App;
