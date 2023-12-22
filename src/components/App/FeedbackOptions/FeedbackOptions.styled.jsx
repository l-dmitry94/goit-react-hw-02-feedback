import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
`;

export const ButtonsItem = styled.li``;

export const Button = styled.button`
    width: 64px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    transition: background-color 0.3s linear, color 0.3s linear;

    &:is(:hover, :focus) {
        background-color: #51a375;
        color: #fff;
    }
`;
