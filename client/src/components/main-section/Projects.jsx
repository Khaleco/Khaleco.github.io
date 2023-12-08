import { UncontrolledCarousel } from "reactstrap";
import Jeopardy from "../images/Jeopardy.png";
import GuessTheNumber from "../images/Guess-the-number.png";
import Zorkington from "../images/Zorkington.png";
import ServerBlog from "../images/Server-Blog.png";
import ReactChat from "../images/React-Chat.png";

function Projects(props) {
  return (
    <>
    <h1 style={{ color: "var(--fontColor)", fontFamily: "Grenze Gotisch", textAlign:"center", marginTop: "25px" }}>
          Projects
        </h1>
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
        <h1
          style={{
            alignSelf: "center",
            margin: "1em",
            fontFamily: "Grenze Gotisch",
          }}
        >
          Upright Education Projects
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              margin: "1em",
              background: "var(--tritary)",
              borderRadius: "5px",
              width: "33%",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "var(--fontColor)",
                margin: ".5em",
                fontFamily: "Grenze Gotisch",
              }}
            >
              Completed
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
                alignItems: "center",
              }}
            >
              <a
                href="https://github.com/burlingtoncodeacademy-students/jeopardy-board-Khaleco"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "var(--primary)",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                Jeopardy
              </a>
              <a
                href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Khaleco"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "var(--primary)",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                Guess the Number
              </a>
              <a
                href="https://github.com/burlingtoncodeacademy-students/zorkington-Khaleco"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "var(--primary)",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                Zorkington
              </a>
              <a
                href="https://github.com/burlingtoncodeacademy-students/server-blog-Khaleco"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "var(--primary)",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                Sever Blog
              </a>
              <a
                href="https://github.com/burlingtoncodeacademy-students/react-chat-julia-and-khale"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "var(--primary)",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                React Chat
              </a>
              <p
                
                
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "#79a4b9",
                  margin: "2px",
                  maxWidth: "fit-content",
                }}
              >
                Presentedly
              </p>
            </div>
          </div>
            {/* ------------------Carousel----------------- */}
        </div>
        <div
          style={{
            display: "flex",
            height: "400px",
            width: "100%",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <UncontrolledCarousel
            style={{ display: "flex", maxHeight: "100%", maxWidth: "600px" }}
            items={[
              {
                altText: "Jeopardy",
                caption: "Jeopardy",
                key: 1,
                src: `${Jeopardy}`,
              },
              {
                altText: "GuessTheNumber",
                caption: "GuessTheNumber",
                key: 2,
                src: `${GuessTheNumber}`,
              },
              {
                altText: "Zorkington",
                caption: "Zorkington",
                key: 3,
                src: `${Zorkington}`,
              },
              {
                altText: "ServerBlog",
                caption: "ServerBlog",
                key: 4,
                src: `${ServerBlog}`,
              },
              {
                altText: "ReactChat",
                caption: "ReactChat",
                key: 5,
                src: `${ReactChat}`,
              },
            ]}
          />
        </div>
        {/* --------------------Personal Projects-------------------- */}
        <h1
          style={{
            alignSelf: "center",
            margin: "1em",
            fontFamily: "Grenze Gotisch",
          }}
        >
          Personal Projects
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              margin: "1em",
              background: "var(--tritary)",
              borderRadius: "5px",
              width: "33%",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "var(--fontColor)",
                margin: ".5em",
                fontFamily: "Grenze Gotisch",
              }}
            >
              Completed
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
                alignItems: "center",
              }}
            >
              {/* <a
              href="{link}"
              target="blank"
              style={{
                textDecoration: "none",
                color: "var(--primary)",
                margin: "2px",
                maxWidth: "fit-content",
              }}
            >
              {Project Name}
            </a> */}
            </div>
          </div>
          <div
            style={{
              margin: "1em",
              background: "var(--tritary)",
              borderRadius: "5px",
              width: "33%",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "var(--fontColor)",
                margin: ".5em",
                fontFamily: "Grenze Gotisch",
              }}
            >
              In Progress
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
                alignItems: "center",
              }}
            >
              {/* <a
              href="{link}"
              target="blank"
              style={{
                textDecoration: "none",
                color: "var(--primary)",
                margin: "2px",
                maxWidth: "fit-content",
              }}
            >
              {Project Name}
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
