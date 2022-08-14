// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region exports
export const RENDSTER_CLI_VERSION = '#RENDSTER_CLI_VERSION';

export const RENDSTER_MANUAL = 'https://manual.plurid.com/rendster';


export const RENDSTER_BUILD_DIRECTORY_BASE = '/build/__rendster/';
export const RENDSTER_BUILD_DIRECTORY = path.join(
    process.cwd(),
    RENDSTER_BUILD_DIRECTORY_BASE,
);

export const BUILD_DIRECTORY = path.join(
    process.cwd(),
    '/build/',
);
// #endregion exports
