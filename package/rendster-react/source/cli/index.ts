// #region imports
    // #region libraries
    import {
        program,
    } from 'commander';
    // #endregion libraries


    // #region external
    import {
        RENDSTER_CLI_VERSION,
        RENDSTER_MANUAL,
    } from '~data/constants/index';
    // #endregion external


    // #region internal
    import start from './commands/start';
    // #endregion internal
// #endregion imports



// #region module
const cli = () => {
    program
        .name('rendster')
        .usage('<command>')
        .version(RENDSTER_CLI_VERSION, '-v, --version')
        .action(() => {
            program.outputHelp();
        });

    program
        .command('manual')
        .description('the "rendster" manual')
        .action(async ()=> {
            console.log(`\n\tThe "rendster" manual is available on: ${RENDSTER_MANUAL}\n`);
        });


    program
        .command('start')
        .description('start the "rendster" server')
        .option(
            '-p, --port <value>',
            'the "rendster" server port',
            '9001',
        ).action(async (options: any)=> {
            start(options);
        });

    program.parseAsync(process.argv);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
