// @flow

import styled from 'styled-components';

export default styled.div`
    background: #9a1c7f;
    border: 3px solid white;
    border-radius: 0;
    color: white;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    font-size: 0.9em;
    margin: 0.5em;
    padding: 1em;
    
    &:hover {
        cursor: pointer;
        background: #bf109a;
    }
`;
