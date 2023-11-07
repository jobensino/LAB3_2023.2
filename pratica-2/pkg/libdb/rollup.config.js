import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal  from 'rollup-plugin-peer-deps-external';

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");

export default [
    {
        input: "src/lib/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "umd",
                sourcemap: true,
                name: 'libdb.umd',
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
                
            },
            {
                file: packageJson.module,
                format: "es",
                sourcemap: true,
                name: 'libdb.es',
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },

        ],
        external: [...Object.keys(packageJson.peerDependencies||{})],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser()
        ]        
    },
    {
        input: "dist/types/lib/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts.default()],
    },
];