const PurchaseCard = ({ selectedBlocks, onInvest, pricePerBlock }) => {
  if (selectedBlocks.length === 0) {
    return <div>No CannaBlocks Selected</div>;
  }

  const totalPrice = selectedBlocks.length * pricePerBlock;
  const isFullSqureMeter = selectedBlocks.length % 25 === 0;
  const discount = isFullSqureMeter ? 0.2 * totalPrice : 0;
  const finalPrice = totalPrice - discount;
  const estimatedProfit = (selectedBlocks.length * 10).toFixed(2); // Example calculation

  return (
    <div
      className="purchase-card"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <img src="https://via.placeholder.com/150" alt="CannaBlock NFT" />
      <p>Blocks Selected: {selectedBlocks.length}</p>
      <p>CannaCoins Earned: {selectedBlocks.length * 2}</p>
      <p>CannaPoints Earned: {selectedBlocks.length * 5}</p>
      <p>Governance Power: {selectedBlocks.length} votes</p>
      <p>Price per Block: ${pricePerBlock}</p>
      <p>Total price: {finalPrice.toFixed(2)}</p>
      <p>Estimated Profit per Year: {estimatedProfit}</p>
      {isFullSqureMeter && (
        <div className="offer">
          <p>20% Square Meter Discount Applied!</p>
          <p>Double Rewards Earned!</p>
        </div>
      )}
      <button onClick={onInvest} style={{ marginTop: "10px" }}>
        Invest
      </button>
    </div>
  );
};

export default PurchaseCard;
