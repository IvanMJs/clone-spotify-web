import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 0.2;
  height: 100vh;
  background-color: #000000;
  min-width: 240px;
  color: #fff;

  & img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }
  & hr {
    border: 1px solid smokegray;
    width: 90%;
    margin: 10px auto;
  }
`;

const PlayList = styled.div`
  margin: 5px 10px;
`;
const Choices = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 300ms color ease-in;
  &:hover {
    color: #fff;
  }
  & h4 {
    margin-left: 10px;
  }
`;

export { SidebarContainer, PlayList, Choices };
