// #region methods
    // #region internal
    import {
        findRendsters,
        parseRendsters,
    } from './logic';
    // #endregion internal
// #endregion methods



// #region module
export interface ServerOptions {
    port: number;
    source: string[];
    extension: string;
}


class Server {
    private options;


    constructor(
        options: ServerOptions,
    ) {
        this.options = options;
    }


    public async start() {
        const rendsters = await findRendsters(
            this.options.source,
            this.options.extension,
        );

        await parseRendsters(
            rendsters,
        );

        console.log('start server', this.options, rendsters);
    }

    public close() {
        console.log('close server');
    }
}
// #endregion module



// #region exports
export default Server;
// #endregion exports
