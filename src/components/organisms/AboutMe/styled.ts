import styled from "styled-components";

export const AboutMeStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  .aboutWrap {
    display: flex;
    flex-wrap: wrap;

    > h2 {
      opacity: 0.8;
      margin-top: 8rem;
    }
  }

  .cards{
  width:400px;
  height:300px;
  position:absolute;
  left:0;
  right:0;
  top:50%;
  margin:auto;
  transform:translateY(-50%);

  .cards_inner {
    perspective:800px;
    position:relative;
    top:60px;

    .wrap {
      width: 220px;
      margin: 0 auto;
      position:relative;
      transform-style: preserve-3d;
    }

    /* .invalid{
      pointer-events:none;
      left:-180px !important;
      opacity:0;
      transition:all .23s;
    }

    .animate{
      transition:all .2s cubic-bezier(0.560, 2.150, 0.250, 0.715);
    }

    .card_in{
      opacity:0;
      transform:scale(1);
      margin-top:40px;
      animation: pop .6s .1s cubic-bezier(0.560, 1.750, 0.250, 0.715);
      right:0;
    } */
    
    @keyframes pop{
      0%{margin-top:40px;opacity:0}
      100%{margin-top:0px;opacity:1}
    }
    
    .card_in_two{
      opacity:1;
      transform:scale(1);
      margin-top:40px;
      transition:all .2s cubic-bezier(0.560, 2.150, 0.250, 0.715);
      margin-top:0px;
    }
    
    .card_inner{
      transition:transform .2s cubic-bezier(0.560, 2.150, 0.250, 0.715);
      position:absolute;
      margin-top:0px;
      left:0;
      right:0;
       background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); 
      top:50%;
      margin:auto;
      width:220px;
      height:130px;
      background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); 
      border-radius:12px;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.22);
      cursor:pointer;
      @for $i from 1 through 4{
        &:nth-of-type(#{$i}){
          top:(10px * $i);
          transform:translateZ(0px + ($i * 60) - 240px)
        }
      }
    }
  }
}
`;
