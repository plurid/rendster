// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries

    // #region external
    import {
        Component,
    } from '../../distribution';

    import Boo from './index';
    // #endregion external
// #endregion imports



// #region module
const TestBoo: React.FC<any> = () => (
    <Component
        Render={Boo}
        controllers={[
            {
                type: 'text',
                name: 'one',
            },
            ['number', 'two', 20],
            ['boolean', 'three', true],
        ]}
        group={"whatever"}
    />
);
// #endregion module



// #region exports
export default TestBoo;
// #endregion exports
