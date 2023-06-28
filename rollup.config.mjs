import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'

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
        format: "esm",
      },
    ],
    plugins: [
      scss({
        fileName: "bundle.css"
      }),
      typescript({ tsconfig: "./tsconfig.json", clean: true }),
    ],
  }
];