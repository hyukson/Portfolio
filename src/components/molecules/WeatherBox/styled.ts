import styled from "styled-components";

export const WeatherBoxStyled = styled.div`
  position: fixed;
  top: 60px;

  .block-list {
    .block-container:nth-child(1) .btn-back {
      background: linear-gradient(135deg, #ebe046 -20%, #ffac01 120%);
    }
    
    .block-container:nth-child(2) .btn-back {
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    }
    
    .block-container:nth-child(3) .btn-back {
      background: linear-gradient(135deg, #5c46eb -20%, #013fff 120%);
    }
  }

  .block-container {
    position: relative;
    z-index: 1;
    width: 4rem;
    height: 4rem;
    margin: 2rem;
    transition: 250ms;
    perspective: 500px;
    cursor: pointer;

    .btn-back {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: 250ms;
      transform-style: preserve-3d;
      transform-origin: bottom right;
      transform: rotateZ(15deg);
      box-shadow: .8rem 0 2rem rgba(255, 255, 255, .15);
    }

    .btn-front {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background-color: #ffffff33;
      backdrop-filter: blur(20px);
      transition: 250ms cubic-bezier(0.560, 2.150, 0.250, 0.715);
      transform-style: preserve-3d;
      transform-origin: top left;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: rgba(255, 255, 255, .8);
        font-size: 2rem;
      }
    }

    &.active,
    &:hover {
      & > .btn-back {
        transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg) rotateY(-20deg);
      }

      & > .btn-front {
        transform: translateZ(80px) translateY(-5px) rotateX(15deg) rotateY(15deg);
      }
    }
  }
`