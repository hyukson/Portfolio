import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  .bookshelf {
    width: 100%;
    height: 26rem;
    margin-top: 10rem;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    &.view .book {
      margin: 0 1rem;
    }

    & > div:nth-child(1) {
      .book,
      .cover {
        background-color: #f03d3d;
        z-index: 11;
      }
    }

    & > div:nth-child(2) {
      .book,
      .cover {
        background-color: #2862e9;
        z-index: 10;
      }
    }

    & > div:nth-child(3) {
      .book,
      .cover {
        background-color: #febf00;
        z-index: 9;
      }
    }

    & > div:nth-child(4) {
      .book,
      .cover {
        background-color: #2f74c0;
        z-index: 8;
      }
    }

    & > div:nth-child(5) {
      .book,
      .cover {
        background-color: #b22b7c;
        z-index: 7;
      }
    }

    & > div:nth-child(6) {
      .book,
      .cover {
        background-color: #c96195;
        z-index: 6;
      }
    }

    & > div:nth-child(7) {
      .book,
      .cover {
        background-color: #5cd3f3;
        z-index: 5;
      }
    }

    & > div:nth-child(8) {
      .book,
      .cover {
        background-color: #655c5e;
        z-index: 4;
      }
    }

    & > div:nth-child(9) {
      .book,
      .cover {
        background-color: #7377ad;
        z-index: 3;
      }
    }

    & > div:nth-child(10) {
      .book,
      .cover {
        background-color: #dd8a00;
        z-index: 2;
      }
    }

    & > div:nth-child(11) {
      .book,
      .cover {
        background-color: #7fc728;
        z-index: 1;
      }
    }
  }
`;
