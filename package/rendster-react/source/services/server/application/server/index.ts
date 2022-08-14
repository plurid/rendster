// #region imports
    // #region libraries
    import path from 'node:path';

    import PluridServer, {
        PluridServerMiddleware,
        PluridServerService,
        PluridServerPartialOptions,
        PluridServerTemplateConfiguration,
    } from '@plurid/plurid-react-server';
    // #endregion libraries


    // #region external
    import helmet from '~kernel-services/helmet';

    /** uncomment to use services */
    // [START redux import]
    import reduxStore from '~kernel-services/state/store';
    import reduxContext from '~kernel-services/state/context';
    // [END redux import]
    // [START apollo import]
    import apolloClient from '~kernel-services/graphql/client';
    // [END apollo import]
    // [START stripe import]
    // import {
    //     STRIPE_API_KEY as stripeAPIKey,
    // } from '../client/App/data/constants';
    // [END stripe import]

    import {
        shell,
        routes,
        planes,
    } from '~shared/index';

    import {
        APPLICATION_ROOT,
    } from '~shared/data/constants';
    // #endregion external


    // #region internal
    import preserves from './preserves';

    import {
        setRouteHandlers,
        setPttpCors,
    } from './handlers';
    // #endregion internal
// #endregion imports



// #region module
/** ENVIRONMENT */
const watchMode = process.env.PLURID_WATCH_MODE === 'true';
const isProduction = process.env.ENV_MODE === 'production';
// const buildDirectory = process.env.PLURID_BUILD_DIRECTORY || 'build';
const buildDirectory = 'distribution/application'; // TOFIX use absolute path
const port = process.env.PORT || 63000;



/** CONSTANTS */
const openAtStart = watchMode
    ? false
    : isProduction
        ? false
        : true;

const quiet = false;
// const debug = isProduction
//     ? 'info'
//     : 'error';
const debug = 'info';

const usePTTP = true;



/** Custom styles to be loaded into the template. */
const styles: string[] = [
    //
];


/** Express-like middleware. */
const middleware: PluridServerMiddleware[] = [
    //
];


/** Services to be used in the application. */
const services: PluridServerService[] = [
    /** uncomment to use services */
    {
        name: 'Apollo',
        package: '@apollo/client',
        provider: 'ApolloProvider',
        properties: {
            client: apolloClient,
        },
    },
    {
        name: 'Redux',
        package: 'react-redux',
        provider: 'Provider',
        properties: {
            store: reduxStore({}),
            context: reduxContext,
        },
    },
];


const options: PluridServerPartialOptions = {
    buildDirectory,
    open: openAtStart,
    quiet,
    debug,
    serverName: 'Rendster Server',
    hostname: 'localhost:' + port,
};

const template: PluridServerTemplateConfiguration = {
    root: APPLICATION_ROOT,
    headScripts: isProduction ? undefined : [
        `<link rel="stylesheet" href="index.css" />`,
        `<script>
            (function() {
                var log = console.log;
                console.log = (...args) => {
                    const print = !args.some(val => /Download the (React|Apollo) DevTools/.test(val));
                    if (!print) {
                        return;
                    }

                    log(...args);
                }
            })()
        </script>`,
    ],
};



/** SERVER */
// generate server
const pluridServer = new PluridServer({
    helmet,
    shell,
    routes,
    planes,
    preserves,
    styles,
    middleware,
    services,
    options,
    template,
    usePTTP,
});


// handle non-GET or custom routes (such as API requests, or anything else)
setRouteHandlers(pluridServer);

// if using PTTP
setPttpCors(pluridServer);


/**
 * If the file is called directly, as in `node build/index.js`,
 * it will run the server.
 *
 * The check is in place so that the server can also be imported
 * for programmatic usage.
 */
if (require.main === module) {
    pluridServer.start(port);
}
// #endregion module



// #region exports
export default pluridServer;
// #endregion exports
