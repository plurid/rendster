// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledRendsterComponent {
    theme: Theme;
}

export const StyledRendsterComponent = styled.div<IStyledRendsterComponent>`
`;
// #region module
