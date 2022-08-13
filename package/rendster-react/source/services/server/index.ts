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


    public start() {
        console.log('start server', this.options);
    }

    public close() {
        console.log('close server');
    }
}
// #endregion module



// #region exports
export default Server;
// #endregion exports
