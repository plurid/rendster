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
    import {
        RendsterGroup as IRendsterGroup,
    } from '~data/interfaces';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledRendsterGroup,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface RendsterGroupOwnProperties {
    data: IRendsterGroup;
}

export interface RendsterGroupStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface RendsterGroupDispatchProperties {
}

export type RendsterGroupProperties =
    & RendsterGroupOwnProperties
    & RendsterGroupStateProperties
    & RendsterGroupDispatchProperties;


const RendsterGroup: React.FC<RendsterGroupProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        data,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;

    const {
        name,
        components,
    } = data;
    // #endregion properties


    // #region render
    return (
        <StyledRendsterGroup
            theme={stateGeneralTheme}
        >
            <h2>
                {name}
            </h2>
        </StyledRendsterGroup>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): RendsterGroupStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): RendsterGroupDispatchProperties => ({
});


const ConnectedRendsterGroup = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(RendsterGroup);
// #endregion module



// #region exports
export default ConnectedRendsterGroup;
// #endregion exports
