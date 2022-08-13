// #region module
export const START_DEFAULT_PORT = 9001;
export const START_DEFAULT_SOURCE = ['./src', './source'];
export const START_DEFAULT_EXTENSION = '.rendster.tsx';


const start = async (
    options: Record<string, any>,
) => {
    const port: number = parseInt(options.port) || START_DEFAULT_PORT;
    const source: string[] = options.source || START_DEFAULT_SOURCE;
    const extension: string = options.extension || START_DEFAULT_EXTENSION;

    // console.log('start', {
    //     port,
    //     source,
    //     extension,
    // });
}
// #endregion module



// #region exports
export default start;
// #endregion exports
