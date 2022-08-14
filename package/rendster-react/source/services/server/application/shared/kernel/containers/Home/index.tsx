// #region imports
    // #region libraries
    import React, {
        useState,
        useEffect,
    } from 'react';

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

    import {
        RendsterComponentController,
    } from '~data/interfaces';
    // #endregion external


    // #region internal
    import {
        StyledHome,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface HomeOwnProperties {
}

export interface HomeStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface HomeDispatchProperties {
}

export type HomeProperties = HomeOwnProperties
    & HomeStateProperties
    & HomeDispatchProperties;


const Home: React.FC<HomeProperties> = (
    properties,
) => {
    // #region properties
    // const {
        // /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    // } = properties;
    // #endregion properties


    // #region state
    const [
        components,
        setComponents,
    ] = useState<React.FC<any>[]>([]);
    // #endregion state


    // #region effects
    useEffect(() => {
        // load components
    }, []);
    // #endregion effects


    // #region render
    const __rendster =  {
        registerControllers: (
            id: string,
            controllers: RendsterComponentController[],
        ) => {

        },
        addToGroup: (
            id: string,
            group: string,
        ) => {

        },
    };

    return (
        <StyledHome>
            {components.map(Component => (
                <Component
                    __rendster={__rendster}
                />
            ))}
        </StyledHome>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): HomeStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): HomeDispatchProperties => ({
});


const ConnectedHome = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Home);
// #endregion module



// #region exports
export default ConnectedHome;
// #endregion exports
