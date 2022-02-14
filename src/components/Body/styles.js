import styled from "styled-components";

const BodyContainer = styled.div`
  flex: 0.8;
  background: linear-gradient(#340034, #000) no-repeat;
  color: #fff;
  height: 100vh;
  padding: 30px;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
  min-width: 75px;
  background-color: #fff;
  color: #181818;
  border-radius: 30px;
  padding: 10px;
  height: 2vh;
  max-width: 250px;

  & input {
    border: none;
    width: 100%;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  & h4 {
    margin-left: 15px;
    transition: transform 200ms ease-in-out !important;
  }
  & h4:hover {
    cursor: pointer;
    transform: scale(1.2) !important;
  }
  & img {
    width: 5vh;
    height: 5vh;
    margin-left: 15px;
    border-radius: 50px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & img {
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
  }
`;

const InfoText = styled.div`
  flex: 1;
  & h1 {
    margin-bottom: 10px;
  }
`;

const Songs = styled.div`
  margin: 20px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  & .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
const SongRowContainer = styled.div`
  display: flex;
  text-align: inherit !important;
  z-index: 90;
  color: #fff;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: #160316;
    opacity: 0.8;
  }
  & h4 {
    color: #fff;
  }
  & img {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: inherit !important;
  }
`;

const SongInfo = styled.div`
  margin-left: 20px;
  & p {
    margin-top: 3px;
    color: lightgrey;
  }
`;

export {
  BodyContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  Info,
  InfoText,
  Songs,
  Icons,
  SongRowContainer,
  SongInfo,
};
