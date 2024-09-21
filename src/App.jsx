import { useState } from "react";
import "./App.css";
// import TopBar from "./components/TopBar";
import blocksData from "./data/blocksData";
// import PurchaseCard from "./components/PurchaseCard";
import CannaFieldMap from "./components/CannaFieldMap";
// import Test from "./components/test";

function App() {
  const [blocks, setBlocks] = useState(blocksData);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  // const [count, setCount] = useState(0);

  const handleBlockSelect = (id) => {
    const updatedBlocks = blocks.map((block) => {
      if (block.id === id) {
        block.isSelected = !block.isSelected;
        if (block.isSelected) {
          setSelectedBlocks([...selectedBlocks, block]);
        } else {
          setSelectedBlocks(selectedBlocks.filter((b) => b.id !== id));
        }
      }
      return block;
    });
    setBlocks([...updatedBlocks]);
  };

  // const handleInvest = () => {
  //   // Implement investment logic here
  //   alert("Invest Button cliked!");
  // };
  // const stats = {
  //   total: blocks.length,
  //   sold: blocks.filter((b) => b.status === "sold").length,
  //   available: blocks.filter((b) => b.status === "available").length,
  // };

  // const presaleStage = {
  //   fieldName: "Uruguay",
  //   weather: "Sunny",
  //   pricePerBlock: 100,
  //   benefits: "Early Investro Benefits",
  //   countDown: "5 days  12:34:56",
  // };

  return (
    <div className="App">
      {/* <TopBar stats={stats} presaleStage={presaleStage} /> */}
      <div style={{ display: "flex" }}>
        <CannaFieldMap blocksData={blocks} onBlockSelect={handleBlockSelect} />
        {/* <PurchaseCard
          selectedBlocks={selectedBlocks}
          onInvest={handleInvest}
          pricePerblock={presaleStage.pricePerBlock}
        /> */}
      </div>
      {/* <Test /> */}
    </div>
  );
}

export default App;
