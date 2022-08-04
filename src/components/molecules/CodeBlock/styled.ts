import styled from "styled-components";

export const CodeBlockStyled = styled.div`
  width: 100%;
  margin-top: 2rem;
  
  .header {
    width: 100%;
    height: 3.5rem;
    position: relative;
    background: #313444;
    box-shadow: 0 1px 3px rgb(0 0 0 / 50%);
    border-radius: 10px 10px 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .mac {
      display: flex;
      padding: 0 1.5rem;

      > div {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .6rem;
        border-radius: 50%;

        &:nth-child(1) {
          background-color: #fc625d;
        }

        &:nth-child(2) {
          background-color: #fdbc40;
        }

        &:nth-child(3) {
          background-color: #35cd4b;
        }
      }
    }

    .tabList {
      width: calc(100% - 8rem);
      height: 100%;
      color: #f9f9f9; 
      display: flex;
      
      > div {
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 10rem;
        height: 100%;
        border-radius: 1rem 1rem 0 0;
        margin-right: .3rem;
        background: #3e4257;

        cursor: pointer;
      }
    }
  }

  .codeBlock {
    width: 100%;
    height: 40rem;
    background-color: #282a36; 
    padding: 2rem;
    border-radius: 0px 0px 10px 10px;

    white-space: pre;
    line-height: 1.5;

    .line {
      display: flex;
      font-size: 1.5rem;

      .num {
        text-align: center;
        color: rgb(170 170 170 / 40%);
      }
      
      .code {
        padding-left: 1.1rem;
        color: #c0c0ca;

        &.cursor {
          border-right: 2px solid #282a36;
          padding-right: .4rem;
          animation: cursor .9s infinite steps(2);

          @keyframes cursor {
            from { border-right: 2px solid #282a36; }
            to { border-right: 2px solid #777; }
          }
        }
      }
    }
  }
`