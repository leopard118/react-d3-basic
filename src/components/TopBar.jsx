const TopBar = ({ stats, presaleStage }) => {
  return (
    <div
      className="top-bar"
      style={{ padding: "20px", backgroundColor: "#eee" }}
    >
      <h2>
        {presaleStage.fieldName}-Weather:{presaleStage.weather}
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>TOtal Blocks: {stats.total}</p>
          <p>Sold: {stats.sold}</p>
          <p>Available: {stats.available}</p>
        </div>
        <div>
          <p>Current Price: ${presaleStage.pricePerBlock}</p>
          <p>Benefits: {presaleStage.benefits}</p>
          <p>Next Stage In: {presaleStage.countdown}</p>
        </div>
      </div>
      <progress
        value={stats.sold}
        max={stats.total}
        style={{ width: "100%" }}
      ></progress>
    </div>
  );
};

export default TopBar;
