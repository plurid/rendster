// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries

    // #region external
    import {
        Component,
    } from '../../distribution';

    import Foo from './index';
    // #endregion external
// #endregion imports



// #region module
const TestFoo: React.FC<any> = () => (
    <Component
        Render={Foo}
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
export default TestFoo;
// #endregion exports
