import styled from "styled-components";

export default function HomeContent() {
  return (
    <>
      <MainImage>
        <img src="assets/images/mainWomanHome.png" alt="" />
        <h2>Made for you</h2>
      </MainImage>
      <BottomImages>
        <div>
          <div>
            <h1>Fashion Vault</h1>
          </div>
          <img src="assets/images/LittleWomanHome.png" alt="" />
        </div>
        <img src="assets/images/ManHome.png" alt="" />
      </BottomImages>
    </>
  );
}

const BottomImages = styled.div`
  display: flex;
  height: 50vh;
  width: 100vw;
  img {
    object-fit: cover;
    object-position: right;
    width: 50vw;
    height: 57vh;
  }
  > div {
    height: 50vw;
  }
  > div img {
    width: 50vw;
    height: 32vh;
    object-fit: cover;
  }
  div > div {
    height: 25vh;
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    background-color: #ffffff;
    h1 {
      color: #4d3837;
      line-height: 1;
      width: 25vw;
      font-family: Montserrat;
      font-size: 34px;
      font-weight: 600;
    }
  }
`;

const MainImage = styled.div`
  z-index: 3;
  position: relative;
  img {
    height: 43vh;
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  h2 {
    line-height: 1;
    position: absolute;
    right: 10px;
    bottom: 35px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: right;
  }
`;
