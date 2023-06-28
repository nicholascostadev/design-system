import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'
import dts from 'rollup-plugin-dts'

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
  },
  {
    input: "./index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [
      scss({
        fileName: "bundle.css"
      }),
      typescript({ tsconfig: "./tsconfig.json", clean: true }),
      dts()
    ]
  }
];