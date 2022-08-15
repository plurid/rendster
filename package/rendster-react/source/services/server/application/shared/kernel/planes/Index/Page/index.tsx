// #region imports
    // #region libraries
    import React from 'react';


    import {
        uuid,
    } from '@plurid/plurid-functions';

    import {
        PluridReactComponent,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        RendsterGroup as IRendsterGroup,
    } from '~data/interfaces';

    import RendsterGroup from '~kernel-components/RendsterGroup';
    // #endregion external


    // #region internal
    import {
        StyledPage,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const Page: PluridReactComponent<{}> = (
    properties,
) => {
    // #region properties
    // const {
    //     plurid,
    // } = properties;

    const groups: IRendsterGroup[] = [
        {
            name: 'ungrouped',
            components: [],
        },
    ];
    // #endregion properties


    // #region render
    return (
        <StyledPage>
            <h1>
                rendster
            </h1>

            {groups.map(group => (
                <RendsterGroup
                    key={uuid.generate()}
                    data={group}
                />
            ))}
        </StyledPage>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Page;
// #endregion exports
