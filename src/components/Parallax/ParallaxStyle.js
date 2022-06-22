import styled from "styled-components";

const ParallaxStyleDiv = styled.div`
  .no-slide{
    transition: transform 3s;
    transform: translate(0%);
  }

  .slide-left{
    transition: 3s;
    transform: translate(-45%, 10%);
  }

  .slide-right{
    transition: 2s;
    transform: translate(20%, 20%);
  }

  .ultra-right{
    transition 2s;
    transform: translateX(100%);
  }

  .ultra-left{
    transition 2s;
    transform: translateX(-100%);
  }
`

export default ParallaxStyleDiv