function Hobbies(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "500px",
          flexWrap: "wrap",
          marginBottom: "8em"
        }}
      >
        <div
          style={{
            background: "var(--secondary)",
            borderRadius: "5px",
            padding: "1em",
            margin: "10px",
            width: "40%",
            minWidth: "300px",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--tritary)",
              textAlign: "center",
              fontFamily: "Grenze Gotisch",
            }}
          >
            Hobbies
          </h1>
          <ul style={{ color: "var(--tritary)", fontSize: "X-large" }}>
            <li>Dungeons & Dragons</li>
            <li>Video Games</li>
            <li>Magic The Gathing</li>
            <li>War Hammer 40k</li>
          </ul>
        </div>
        <div
          style={{
            background: "var(--secondary)",
            borderRadius: "5px",
            padding: "1em",
            margin: "10px",
            width: "40%",
            minWidth: "300px",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--tritary)",
              textAlign: "center",
              fontFamily: "Grenze Gotisch",
            }}
          >
            Interests
          </h1>
          <ul style={{ color: "var(--tritary)", fontSize: "24px" }}>
            <li>Coding</li>
            <li>Game Development</li>
            <li>Sword and Scorccery Fiction</li>
            <li>Science Fiction</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hobbies;
