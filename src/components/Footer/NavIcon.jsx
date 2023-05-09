import styled from "styled-components";

export default function NavIcon(props) {
  const { iconData, clickedIcon, selecionado } = props;
  const { name, route, solid, outLine } = iconData;

  return (
    <NavIconContainer
      onClick={() => {
        clickedIcon(name, route);
      }}
    >
      <img src={selecionado === name ? solid : outLine} alt="" />
      <p>{name}</p>
    </NavIconContainer>
  );
}

const NavIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  img {
    height: 25px;
  }
  p {
    font-family: Montserrat;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
