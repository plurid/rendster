// #region imports
    // #region libraries
    import React, {
        useEffect,
    } from 'react';
    // #endregion libraries


    // #region external
    import {
        RendsterComponentContext,
        RendsterComponentController,
    } from '~data/interfaces';
    // #endregion external
// #region imports



// #region module
export interface ComponentProperties {
    // #region required
        // #region values
        Render: React.FC<any>,
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        __rendster?: RendsterComponentContext;
        controllers?: RendsterComponentController[];
        group?: string;
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
            Render,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            __rendster,
            controllers,
            group,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const name = Render.name;
    // #endregion properties


    // #region effects
    useEffect(() => {
        if (__rendster && controllers) {
            __rendster.registerControllers(name, controllers);
        }
    }, [
        JSON.stringify(controllers),
    ]);

    useEffect(() => {
        if (__rendster && group) {
            __rendster.addToGroup(name, group);
        }
    }, [
        group,
    ]);
    // #endregion effects


    // #region render
    return (
        <div>
            <Render />
        </div>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Component;
// #endregion exports
