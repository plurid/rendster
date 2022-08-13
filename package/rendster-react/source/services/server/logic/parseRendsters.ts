// #region imports
    // #region libraries
    import esbuild from 'esbuild';
    // #endregion libraries
// #endregion imports



// #region module
export const parseRendster = async (
    rendster: string,
) => {
    const result = await esbuild.build({
        entryPoints: [
            rendster,
        ],
        outdir: 'build',
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
                if (error) console.error('watch build failed:', error);
                else console.log('watch build succeeded');
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
