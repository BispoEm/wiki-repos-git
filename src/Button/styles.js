import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 120px;
  height: 50px;
  background-color: red;
  background: transparent;
  border: 1.5px solid #999999;
  border-radius: 1.5rem;
  margin: 10px 15px;
  font-size: 20px;

  &:hover{
    cursor: pointer;  
    opacity: .5;
    transition: .25s;
  }
`