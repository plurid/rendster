// #region imports
    // #region libraries
    import {
        ElementQLClient,
    } from '@plurid/elementql-client-react';
    // #endregion libraries
// #endregion imports



// #region module
const elementQLClient = new ElementQLClient({
    url: 'http://localhost:9001/elementql',
});
// #endregion module



// #region exports
export default elementQLClient;
// #endregion exports
