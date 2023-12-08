function Footer(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "6em",
          background: "var(--tritary)",
          position: "fixed",
          bottom: "0px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderTop: "2px solid var(--backgroundColor)",
        }}
      >
        <p style={{ color: "var(--fontColor)", marginBottom: "5px" }}>
          Contact Info: khalecoffran@gmail.com +1-802-369-5730{" "}
        </p>
        <h5 style={{ color: "var(--fontColor)" }}>
          UnPublished Work © 2023 Khale Coffran
        </h5>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-around",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/khale-coffran/"
            target="blank"
          >
            Linked In
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/Khaleco?tab=repositories"
            target="blank"
          >
            Git Hub
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="mailto:khalecoffran@gmail.com"
            target="blank"
          >
            Email
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://steamcommunity.com/profiles/76561198147543051/"
            target="blank"
          >
            Steam
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
