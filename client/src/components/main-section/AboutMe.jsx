import landScape from "../images/IMG_20181019_161204266_HDR.jpg";

function AboutMe(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2em",
          flexDirection: "column",
          marginBottom: "6em",
        }}
      >
        <h1 style={{ color: "var(--fontColor)", fontFamily: "Grenze Gotisch" }}>
          About Me
        </h1>
        <div
          style={{
            margin: "2em",
            background: "var(--secondary)",
            borderRadius: "5px",
          }}
        >
          <h3
            style={{
              margin: "1em",
              color: "var(--tritary)",
              textAlign: "center",
            }}
          >
            Interests
          </h3>
          <p style={{ margin: "2em", color: "var(--tritary)" }}>
            From a young age I have had an interest in video games. Some of my
            oldest memories are playing games on the PSP. Some of my favorite
            video games are puzzle / tactical games, a few examples are:
            'Portal', 'Bauldur's Gate III', 'Slay the Spire', and 'Stellaris'. I
            also enjoy playing board / card games, the ones I play the most are:
            'Magic the Gathering', 'Dungeons & Dragons', and 'Warhammer 40K'. I
            enjoy these games for their statigical and complex gameplay. Fun
            Fact: 'Magic the Gathering' is Turing complete.
          </p>
          <h3
            style={{
              margin: "1em",
              color: "var(--tritary)",
              textAlign: "center",
            }}
          >
            Where I'm From
          </h3>
          <p style={{ margin: "2em", color: "var(--tritary)" }}>
            I was born in Claremont, NH, and raised in Windsor, VT, the
            birthplace of Vermont. In High School I participated in several math
            competitions and was apart of the robotics team for one year.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={landScape}
              alt="Lake Runnemede"
              style={{
                height: "200px",
                maxWidth: "400px",
                borderRadius: "5px",
              }}
            />
          </div>
          <h3
            style={{
              margin: "1em",
              color: "var(--tritary)",
              textAlign: "center",
            }}
          >
            Why Programming?
          </h3>
          <p style={{ margin: "2em", color: "var(--tritary)" }}>
            Between my love for video games and logic it only made sense that
            programming was for me. I have had other jobs that didn't give me
            any sense of fulfillment or job satisfaction that coding does.
            Nothing is better than the feeling of finally figuring out a problem
            that you have been woring on for hours.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
