import React from 'react';
import styled from 'styled-components';

const StyleH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-wight: 300;
    letter-spacing: .8px;
    margin: 1em;
    color: #C2185B;
`;    
 
const H2Style = ({name}) => <StyleH2>{name}</StyleH2>;

export default H2Style;