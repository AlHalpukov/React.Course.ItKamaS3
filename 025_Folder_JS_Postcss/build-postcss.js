import postcss from "postcss";
import postcssModules from "postcss-modules";

console.log("Hello");

const css = `
.button{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 4px
}
`;

const modulePlugin = postcssModules({
  generateScopedName: "[name]__[local]__[hash:base64:10]",
  getJSON(cssFileName, json, outputFileName) {
    console.log(json);
  },
});

postcss([modulePlugin])
  .process(css, { from: "build=postcss.module.js" })
  .then((result) => {
    console.log("Result => ", result.css);
  });
