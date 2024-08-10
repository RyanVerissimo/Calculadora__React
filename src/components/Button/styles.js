import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex:1;

    &: hover {
        opacity: 0.3;
    }

    @media (max-width: 768px) {
    padding: 15px;
    font-size: 20px;
  }

    @media (max-width: 480px) {
    padding: 10px;
    font-size: 16px;
  }
`