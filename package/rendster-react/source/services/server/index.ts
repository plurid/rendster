// #region methods
    // #region libraries
    import fs from 'node:fs';
    import {
        exec,
        ChildProcess,
    } from 'node:child_process';
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
    private process: ChildProcess | undefined;


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

        const serverPath = './distribution/application/index.js';
        const serverStart = `node ${serverPath}`;

        this.process = exec(serverStart);

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
            if (this.process) {
                this.process.kill('SIGTERM');
            }

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
