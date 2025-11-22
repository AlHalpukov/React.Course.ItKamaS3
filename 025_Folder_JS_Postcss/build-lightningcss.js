import { transform } from "lightningcss";

console.log("\nHello\n");

const css = `
.button{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 4px
}
`;

const result = transform({
  filename: "lightningcss.module.css",
  code: Buffer.from(css),
  cssModules: {
    pattern: "[name]__[local]__[hash]",
  },
});

console.log("\nResult => \n", result);
console.log("\nResult string => \n", result.code.toString());
