function Header(props) {
  return (
    <div
      className="d-flex"
      style={{
        background: "var(--primary)",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "5em",
        position: "relative",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifySelf: "center",
          color: "var(--fontColor)",
          fontFamily: "Grenze Gotisch",
        }}
      >
        Portfolio
      </h1>
    </div>
  );
}

export default Header;
