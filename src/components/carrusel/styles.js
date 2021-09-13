import styled from 'styled-components'

export const Carousel = styled.div`
  background-color: #7463ff;
  background: rgb(134, 104, 252);
  background: radial-gradient(
    circle,
    rgba(134, 104, 252, 1) 0%,
    rgba(100, 87, 233, 1) 34%,
    rgba(87, 86, 228, 1) 45%,
    rgba(67, 67, 179, 1) 100%
  );
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    z-index: 999;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 25px;
  }

  .slick-prev::before,
  .slick-next:before {
    opacity: 0.2;
    font-weight: 400;
    color: #fff;
    font-size: 40px;
    transition: 0.5s;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .slick-prev:before:hover,
  .slick-next:before:hover {
    font-weight: 400;
    color: #fff;
    font-size: 40px;
    transition: 0.5s;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .slick-slide div div {
    display: flex !important;
    justify-content: center !important;

    & img {
      width: 52%;
      height: auto;
    }
  }

  .slick-dots {
    margin-bottom: -30px;
  }
`
