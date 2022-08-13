// #region methods
    // #region internal
    import {
        findRendsters,
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
        const files = await findRendsters(
            this.options.source,
            this.options.extension,
        );

        console.log('start server', this.options, files);
    }

    public close() {
        console.log('close server');
    }
}
// #endregion module



// #region exports
export default Server;
// #endregion exports
