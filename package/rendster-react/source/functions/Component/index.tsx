// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries
// #region imports



// #region module
export interface ComponentProperties {
    // #region required
        // #region values
        render: JSX.Element;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
}

const Component: React.FC<ComponentProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            render,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;
    // #endregion properties


    // #region render
    return (
        <div>
            {render}
        </div>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Component;
// #endregion exports
