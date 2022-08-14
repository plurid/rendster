// #region methods
    // #region libraries
    import fs from 'node:fs';
    // #endregion libraries


    // #region external
    import {
        RENDSTER_BUILD_DIRECTORY,
        BUILD_DIRECTORY,
    } from '~data/constants';
    // #endregion external


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
    private cleaning = false;


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
        this.cleanup();

        console.log('close server');
    }


    private cleanup() {
        if (this.cleaning) {
            return;
        }

        this.cleaning = true;

        try {
            fs.rmSync(
                RENDSTER_BUILD_DIRECTORY,
                {
                    recursive: true,
                },
            );

            const buildDirectory = fs.readdirSync(BUILD_DIRECTORY);
            if (buildDirectory.length === 0) {
                fs.rmSync(
                    BUILD_DIRECTORY,
                    {
                        recursive: true,
                    },
                );
            }
        } catch (error) {
            // console.log(error);
        }
    }
}
// #endregion module



// #region exports
export default Server;
// #endregion exports
