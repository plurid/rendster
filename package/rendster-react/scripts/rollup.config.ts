// #region imports
    // #region libraries
    import ttypescript from 'ttypescript';
    import typescript from 'rollup-plugin-typescript2';
    import { terser } from 'rollup-plugin-terser';
    import replace from '@rollup/plugin-replace';
    // #endregion libraries


    // #region external
    import pkg from '../package.json';
    // #endregion external
// #endregion imports



// #region module
const build = {
    input: './source/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
        },
    ],
    external: [
        'commander',
        'react',
    ],
    watch: {
        include: 'source/**',
    },
    plugins: [
        typescript({
            typescript: ttypescript,
            tsconfig: './tsconfig.json',
        }),
        terser({
            mangle: false,
            compress: false,
            format: {
                beautify: true,
                comments: false,
            },
        }),
        replace({
            "#RENDSTER_CLI_VERSION": JSON.stringify(pkg.version),
            delimiters: ["'", "';"],
            preventAssignment: true,
        }),
    ],
};

const cli = {
    ...build,
    input: './source/cli/index.ts',
    output: [
        {
            file: pkg.cli,
            format: 'cjs',
            exports: 'named',
        },
    ],
};
// #endregion module


// #region exports
export default [
    build,
    cli,
];
// #endregion exports
