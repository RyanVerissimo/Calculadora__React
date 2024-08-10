import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        text-align: right;
        padding: 0 10px;

        font-size: 24px;
        font-family: 'Roboto';

        color: #FFFFFF;
    }

    @media (max-width: 768px) {
        height: 60px;
        font-size: 20px;

        input {
        height: 60px;
        font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        height: 50px;
        font-size: 18px;

        input {
        height: 50px;
        font-size: 18px;
        }
    }
`

