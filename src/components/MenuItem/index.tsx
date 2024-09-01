import { BsFillCartPlusFill } from "react-icons/bs";
import { Button } from "../Button";
import { CartContainer, Container, ContentImage, DetailsContainer } from "./styles";
import { Text } from "../Text/styles";

interface IProps {
  src: string;
  name: string;
  price: number;
}

export const MenuItem = ({ name, price, src }: IProps) => {
  return (
    <Container>
      <CartContainer>
      <ContentImage  src={src} />
      <Button
        style={{width: "120px", marginTop: '-20px'}}
        onClick={() => console.log("Adicionado ao carrinho")}
        icon={<BsFillCartPlusFill color="#f7af1d" />}
        title="Adicionar"
      />
      </CartContainer>
      <DetailsContainer>
        <Text fontWeight="bold" size="md">{name}</Text>
        <Text style={{
          color: '#f7af1d'
        }} size="md">{price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</Text>
      </DetailsContainer>
    </Container>
  );
};
