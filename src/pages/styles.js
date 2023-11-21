import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;

  img {
    width: 64px;
    height: 64px;
  }
  .header {
    width: 65%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
