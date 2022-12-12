import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const IndexPage = () => {
  return (
    <main className="grid h-screen w-screen place-content-center bg-zinc-800 font-mono text-zinc-200">
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {/* You gotta make this into a loop and put contentful in there
          *
        <div className="col-span-1 col-start-1 row-span-1 row-start-1 rounded-lg border-4 border-double border-amber-400">
          Project 1
        </div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-1 rounded-lg border-4 border-double border-amber-400">
          Project 2
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-1 rounded-lg border-4 border-double border-amber-400">
          Project 3
        </div>
        <div className="col-span-1 col-start-4 row-span-1 row-start-1 rounded-lg border-4 border-double border-amber-400">
          Project 4
        </div>

          */}
        <div className="col-span-2 col-start-2 row-span-2 row-start-2 rounded-lg border-4 border-double border-amber-400 p-24 ">
          <h1>This is it.</h1>
          <p>Welcome to my website.</p>
          <p className="text-right">- Robert Blake</p>
        </div>
        <div className="col-span-2 col-start-2 row-span-2 row-start-4 rounded-lg border-4 p-8">
          I'm always thinkin' about how to put creativity and technology
          together. I love learning new concepts and implementing them to make
          cool stuff.
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
