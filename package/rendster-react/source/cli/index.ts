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
    import start, {
        START_DEFAULT_PORT,
        START_DEFAULT_SOURCE,
        START_DEFAULT_EXTENSION,
    } from './commands/start';
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
            START_DEFAULT_PORT + '',
        ).option(
            '-s, --source [directories...]',
            'directories with "rendster" components',
            START_DEFAULT_SOURCE,
        ).option(
            '-e, --extension <value>',
            `extension used by "rendster" components, e.g. "Foo${START_DEFAULT_EXTENSION}" · language detected automatically`,
            START_DEFAULT_EXTENSION,
        ).action(async (options)=> {
            await start(options);
        });

    program.parseAsync(process.argv);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
