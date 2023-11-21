import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .repositorios {
    width: 60%;
    height: auto;
    border: 4px dotted #999999;
    border-radius: 1.5rem; 
    padding: 10px 15px;
    margin: 15px 0;
    h3 {
      width: 80% ;
      height: auto;
      font-size: 32px;
      padding: 10px;
      margin: 15px;
    }
    p {
      width: 80%;
      height: auto;
      font-size: 16px;
      padding: 10px;
      text-align: center;
      margin: 15px 25px;
    }
    .buttons {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      a {
        width: 100%;
        height: 100%;
        font-size: 18px;
        margin: 15px 10px;
        padding: 10px;
        text-decoration: none;
        text-align: center;
        border: 1px solid #999999;
        border-radius: 1.5rem;
        color: #fff;
      }
      a:hover {
        opacity: 0.5;
        transition: .30s;
        cursor: pointer;
      }
      .ver {
        background-color: #00aa00;
      }
      .remove {
        background-color: #aa0000;
      }
    }
  }
`;
