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
  }

  .codeBlock {
    width: 100%;
    height: 40rem;
    background-color: #282a36; 
    padding: 1.5rem;
    border-radius: 0px 0px 10px 10px;

    white-space: pre;
    line-height: 1.5;

    .line {
      display: flex;
      font-size: 1.5rem;

      @media only screen and (max-width: 800px) {
        font-size: 1.4rem;
      }

      @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
      }

      .num {
        width: 2rem;
        text-align: center;
        color: rgb(170 170 170 / 40%);
      }
      
      .code {
        padding-left: 1.1rem;
        color: #eee;

        b {
          color: #ffcd34;
          font-weight: 700;
        }

        /* color */
        span.green {
          color: #acf656;
        }

        span.lightGreen {
          color: #e7db74;
        }

        span.red {
          color: #89ddf1;
        }

        span.pink {
          color: #ffb3f9;
        }

        span.gray {
          color: #a0a1a7;
        }

        span.skyblue {
          color: #89ddf1;
        }

        span.script {
          color: #f92472;
        }

        /* cursor */
        &.cursor {
          padding-right: .4rem;
          animation: cursor .6s infinite steps(2);

          @keyframes cursor {
            from { border-right: 1px solid #282a36; }
            to { border-right: 1px solid #ddd; }
          }
        }
      }
    }
  }
`