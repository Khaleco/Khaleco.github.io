function WorkHistory(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "5px",
          background: "var(--secondary)",
          margin: "2em",
          marginBottom: "8em",
        }}
      >
        <div style={{margin: "2em 0em 0em 2em"}}>
          <h5>Fulfillment Specialist | Target Oct 25 2022 - March 13 2023</h5>
          <ul>
            <li>
              Fulfilling online orders within 2 hours of being placed, basic
              customer service
            </li>
            <li>Time management, team work, communication skills</li>
            <li>Increased productivity</li>
          </ul>
        </div>
        <div style={{margin: "1em 0em 1em 2em"}}>
          <h5>Dishwasher | Harpoon Brewery Oct 9 2021 - Jun 11 2022</h5>
          <ul>
            <li>Solo dishwasher on weekends</li>
            <li>Closing shift with up to 12 hour work days</li>
            <li>Well organized and boosted productivity</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorkHistory;
