import styled from 'styled-components';

export default styled.button`
    border: solid 2px ${(props) => props.theme.colors.lightBlue};
    background-color: transparent;
    color: ${(props) => props.theme.colors.lightBlue};
    border-radius: 12px;
    width: 400px;
    height: 56px;
` 