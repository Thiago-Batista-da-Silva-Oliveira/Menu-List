import { MenuItem } from "../../components";
import { useDeviceType } from "../../hooks/useGetDevice";
import bolo from "../../assets/dessert1.jpg";
import { Container, MenuContent } from "./styles";

export const Menu = () => {
  const { isMobile } = useDeviceType();
  return (
    <Container isMobile={isMobile}>
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <h1 style={{ marginBottom: "10px" }}>Cardápio</h1>
        <MenuContent
           isMobile={isMobile}
        >
         <MenuItem price={6.50} name="bolo" src={bolo} />
         <MenuItem price={6.50} name="bolo" src={bolo} />
         <MenuItem price={6.50} name="bolo" src={bolo} />
         <MenuItem price={6.50} name="bolo" src={bolo} />
         <MenuItem price={6.50} name="bolo" src={bolo} />
         <MenuItem price={6.50} name="bolo" src={bolo} />
        </MenuContent>
      </div>
      <div style={{ width: isMobile ? '100%' : "450px", height: "300px", background: "#FFF" }}>
        <p>Carrinho vazio</p>
      </div>
    </Container>
  );
};
