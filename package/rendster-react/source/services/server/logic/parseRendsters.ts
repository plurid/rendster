// #region imports
    // #region libraries
    import path from 'path';

    import esbuild from 'esbuild';
    // #endregion libraries


    // #region external
    import {
        RENDSTER_BUILD_DIRECTORY,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
export const parseRendster = async (
    rendster: string,
) => {
    const parsedPath = path.parse(rendster);

    const filename = parsedPath.name === 'rendster'
        ? parsedPath.dir + '.js'
        : parsedPath.name.replace('.rendster', '') + '.js';

    const outfile = RENDSTER_BUILD_DIRECTORY + filename;

    const result = await esbuild.build({
        entryPoints: [
            rendster,
        ],
        outfile,
        define: {
            global: 'window',
        },
        bundle: true,
        assetNames: 'assets/[name]',
        loader: {
            '.ttf': 'file',
            '.png': 'file',
            '.jpg': 'file',
            '.jpeg': 'file',
            '.svg': 'file',
            '.gif': 'file',
            '.mov': 'file',
        },
        watch: {
            onRebuild(error, _result) {
                // if (error) console.error('watch build failed:', error);
                // else console.log('watch build succeeded');
            },
        },
    });

    return result;
}


export const parseRendsters = async (
    rendsters: string[],
) => {
    for (const rendster of rendsters) {
        await parseRendster(rendster);
    }
}
// #endregion module
