// @flow

import styled from 'styled-components';

import backgroundImage from '../../../images/3px-tile.png';

export default styled.div`
    background-image: url(${backgroundImage}), linear-gradient(
        -120deg,
        #ff0000 0,
        #bf109a 50%,
        #9a1c7f
    );
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
