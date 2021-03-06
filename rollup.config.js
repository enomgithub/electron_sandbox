import commonjs from "@rollup/plugin-commonjs";
// import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  plugins: [
    commonjs(),
    // nodeResolve(),
    typescript()
  ],
  output: {
    file: "./main.js",
    format: "commonjs",
    sourcemap: true
  }
}
