// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledRendsterComponent,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface RendsterComponentOwnProperties {
    id: string;
}

export interface RendsterComponentStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface RendsterComponentDispatchProperties {
}

export type RendsterComponentProperties =
    & RendsterComponentOwnProperties
    & RendsterComponentStateProperties
    & RendsterComponentDispatchProperties;


const RendsterComponent: React.FC<RendsterComponentProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledRendsterComponent
            theme={stateGeneralTheme}
        >

        </StyledRendsterComponent>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): RendsterComponentStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): RendsterComponentDispatchProperties => ({
});


const ConnectedRendsterComponent = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(RendsterComponent);
// #endregion module



// #region exports
export default ConnectedRendsterComponent;
// #endregion exports
