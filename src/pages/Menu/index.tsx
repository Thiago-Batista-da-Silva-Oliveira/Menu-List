import { MenuItem } from "../../components";
import { useDeviceType } from "../../hooks/useGetDevice";
import { Container, IconButton, MenuContent, TrashIcon } from "./styles";
import { Text } from "../../components/Text/styles";
import emptyCart from "../../assets/emptyCart.png";
import { IDesserts, useFetchDessets } from "../../api";
import { MenuItemSkeleton } from "../../components/MenuItem/MenuItemSkeleton";
import { useState } from "react";

interface IItemsInCart {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const Menu = () => {
  const { data, isLoading } = useFetchDessets();
  const { isMobile } = useDeviceType();
  const handleAddItemToCart = (item: IDesserts) => {
    const itemInCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);
    if (itemInCart) {
      const newItemsInCart = itemsInCart.map((itemInCart) => {
        if (itemInCart.id === item.id) {
          return {
            ...itemInCart,
            quantity: itemInCart.quantity + 1,
          };
        }
        return itemInCart;
      });
      setItemsInCart(newItemsInCart);
    } else {
      setItemsInCart([...itemsInCart, { ...item, quantity: 1 }]);
    }
  }
  const handleRemoveItemFromCart = (id: string) => {
    const itemInCart = itemsInCart.find((itemInCart) => itemInCart.id === id);
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        const newItemsInCart = itemsInCart.filter((itemInCart) => itemInCart.id !== id);
        setItemsInCart(newItemsInCart);
      } else {
        const newItemsInCart = itemsInCart.map((itemInCart) => {
          if (itemInCart.id === id) {
            return {
              ...itemInCart,
              quantity: itemInCart.quantity - 1,
            };
          }
          return itemInCart;
        });
        setItemsInCart(newItemsInCart);
      }
    }
  }
  const [itemsInCart, setItemsInCart] = useState<IItemsInCart[]>([]);
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
                  onClick={() => handleAddItemToCart(item)}
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
          Seu carrinho ({itemsInCart.length})
        </Text>
         {itemsInCart.length === 0 ? (
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
         ) : (
        <div>
          {itemsInCart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <Text size="md">{item.name}</Text>
                <div>
                <Text size="md">
                  {item.quantity} x{" "}
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>{" "}
                <IconButton onClick={() => handleRemoveItemFromCart(item.id)}>
                  <TrashIcon />
                </IconButton>
                </div>
              </div>
            ))}
            <Text size="lg" fontWeight="bold">
              Total:
              {itemsInCart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </Text>
        </div>
         )}
      </div>
    </Container>
  );
};
