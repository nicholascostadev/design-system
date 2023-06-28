import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'
import dts from "rollup-plugin-dts";

import packageJson from './package.json' assert { type: "json" };

export default [
  {
    input: "./index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "es",
      },
    ],
    plugins: [
      scss(),
      typescript({ tsconfig: "./tsconfig.json", clean: true }),
    ],
  }
];