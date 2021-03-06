import * as React from 'react'
import loader from 'assets/images/chapter-x-logo.png'
import styled from 'styled-components'

const Spinner = () => (
  <Container>
    <div className="loader"></div>
    <img src={loader} alt="Loading" />
  </Container>
)
export default Spinner

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background: #000000b3;
  img {
    position: absolute;
    width: 100%;
    max-width: 100px;
    @media screen and (max-width: 650px) {
      max-width: 80px;
    }
  }
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }
  .loader {
    margin: 60px auto;
    /* font-size: 10px; */
    position: relative;
    /* text-indent: -9999em; */
    border-top: 0.3em solid rgba(255, 156, 0, 1);
    border-right: 0.3em solid rgba(255, 156, 0, 1);
    border-bottom: 0.3em solid rgba(255, 156, 0, 1);
    border-left: 0.3em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
