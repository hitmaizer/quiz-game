import styled from 'styled-components';

export default styled.button`
    padding: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    border: solid 2px ${(props) => props.theme.colors.lightBlue};
    background-color: transparent;
    color: ${(props) => props.theme.colors.lightBlue};
    border-radius: 12px;
    width: 400px;
    height: 56px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.yellow};
        border: solid 2px ${(props) => props.theme.colors.yellow};
        color: ${(props) => props.theme.colors.white};
    }
` 