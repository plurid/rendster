// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridReactRoute,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import IndexPagePlane from '../kernel/planes/Index/Page';
    import NotFoundPlane from '../kernel/planes/NotFound';

    import Head from '../kernel/components/Head';
    // #endregion external
// #endregion imports



// #region module
const indexRoute: PluridReactRoute = {
    value: '/',
    exterior: Head,
    planes: [
        [
            '/plane',
            IndexPagePlane,
        ],
    ],
    view: [
        '/plane',
    ],
};


const notFoundRoute: PluridReactRoute = {
    value: '/not-found',
    exterior: () => (
        <Head
            title="not found · rendster"
        />
    ),
    planes: [
        [ '/not-found', NotFoundPlane ],
    ],
    view: [
        '/not-found',
    ],
};


const routes: PluridReactRoute[] = [
    indexRoute,
    notFoundRoute,
];
// #endregion module



// #region exports
export default routes;
// #endregion exports
