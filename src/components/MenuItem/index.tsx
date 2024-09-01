import { Button } from "../Button";
import { CartContainer, Container, ContentImage, DetailsContainer, Icon } from "./styles";
import { Text } from "../Text/styles";

interface IProps {
  src: string;
  name: string;
  price: number;
  onClick: () => void;
}

export const MenuItem = ({ name, price, src, onClick }: IProps) => {
  return (
    <Container>
      <CartContainer>
      <ContentImage  src={src} />
      <Button
        style={{width: "120px", marginTop: '-20px'}}
        onClick={() => onClick()}
        icon={<Icon />}
        title="Adicionar"
      />
      </CartContainer>
      <DetailsContainer>
        <Text fontWeight="bold" size="md">{name}</Text>
        <Text style={{
          color: 'var(--primary)'
        }} size="md">{price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</Text>
      </DetailsContainer>
    </Container>
  );
};
