import { MenuItem } from "../../components";
import { useDeviceType } from "../../hooks/useGetDevice";
import bolo from "../../assets/dessert1.jpg";
import { Container, MenuContent } from "./styles";
import { Text } from "../../components/Text/styles";
import emptyCart from "../../assets/emptyCart.png";
import { useFetchDessets } from "../../api";
import Skeleton from "react-loading-skeleton";
import { MenuItemSkeleton } from "../../components/MenuItem/MenuItemSkeleton";
export const Menu = () => {
  const { data, isLoading } = useFetchDessets();
  const { isMobile } = useDeviceType();
  return (
    <Container isMobile={isMobile}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <h1 style={{ marginBottom: "10px" }}>Cardápio</h1>
        <MenuContent isMobile={isMobile}>
          {isLoading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <MenuItemSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {data?.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  src={item.image}
                />
              ))}
            </>
          )}
        </MenuContent>
      </div>
      <div
        style={{
          width: isMobile ? "100%" : "450px",
          height: "100%",
          background: "#FFF",
          padding: "10px",
        }}
      >
        <Text size="lg" style={{ color: "#f7af1d" }} fontWeight="bold">
          Seu carrinho (0)
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={emptyCart}
            alt="carrinho vazio"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Text size="md">Seus itens adicionados aparecerão aqui</Text>
        </div>
      </div>
    </Container>
  );
};
