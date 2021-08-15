import typescript from "@rollup/plugin-typescript";
import { join } from "path";
import autoExternal from "rollup-plugin-auto-external";

export default {
  input: join("src", "index.ts"),
  output: [{ format: "cjs", dir: join("dist") }],
  plugins: [typescript({ declaration: false }), autoExternal()],
};
