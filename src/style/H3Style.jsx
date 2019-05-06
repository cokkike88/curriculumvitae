import React from 'react';
import styled from 'styled-components';

const StyleH3 = styled.h3`
    color: #212121;
    font:wight: 400;
    margin: .5em 0;
`;

const H3Style = ({children}) => <StyleH3>{children}</StyleH3>;
 
export default H3Style;