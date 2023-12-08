import pictureOfMe from "../images/IMG_20231005_131539254_BURST000_COVER.jpg";

function MainIndex(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "100%",
          margin: "2em 2em 8em 2em",
        }}
      >
        <img
          className="m-2"
          style={{ width: "340px", maxHeight: "456px", borderRadius:"10px", border: "5px solid var(--secondary)" }}
          src={pictureOfMe}
          alt="Me against a wall"
          title="Khale Coffran"
        />
        <p
          style={{
            color: "var(--fontColor)",
            margin: "1em",
            fontSize: "40px",
            textAlign: "center",
            maxWidth: "50%",
          }}
        >
          I'm a Software Developer looking to hone my craft.
        </p>
      </div>
    </>
  );
}

export default MainIndex;
