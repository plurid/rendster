// #region imports
    // #region external
    import Server from '~services/server';
    // #endregion external
// #endregion imports



// #region module
export const START_DEFAULT_PORT = 9001;
export const START_DEFAULT_SOURCE = ['./src', './source'];
export const START_DEFAULT_EXTENSION = 'rendster.tsx';

const exitEvents = [
    'exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM',
];


const start = async (
    options: Record<string, any>,
) => {
    const port: number = parseInt(options.port) || START_DEFAULT_PORT;
    const source: string[] = options.source || START_DEFAULT_SOURCE;
    const extension: string = options.extension || START_DEFAULT_EXTENSION;

    const server = new Server({
        port,
        source,
        extension,
    });
    server.start();

    exitEvents.forEach((eventType) => {
        process.on(eventType, () => {
            server.close();
        });
    });
}
// #endregion module



// #region exports
export default start;
// #endregion exports
