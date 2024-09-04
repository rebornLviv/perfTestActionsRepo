import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

import { StockInfo } from "./StockInfo";
import { Product } from "../api/apiTypes";

export type ProductItemProps = {
  data: Pick<Product, "title" | "thumbnail" | "stock" | "id" | "price">;
};

export const ProductItem = ({ data }: ProductItemProps) => {
  const { title, thumbnail, stock, id, price } = data;
  const router = useRouter();

  const navigateToDetails = () => {
    router.push({ pathname: `/products/${id}`, params: { id, title } });
  };

  return (
    <Pressable
      style={styles.card}
      accessibilityLabel={`Product: ${title}`}
      onPress={navigateToDetails}
      testID="product-item"
    >
      <Image
        style={styles.image}
        source={{
          uri: thumbnail,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <StockInfo quantity={stock} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    paddingBottom: 8,
    backgroundColor: "#DDDDDD",
    borderRadius: 8,
    ...(Platform.OS === "web" && {
      width: "20%",
      minWidth: 300,
    }),
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderTopColor: "#EEEEEE",
    borderTopWidth: 1,
    paddingTop: 8,
  },
  image: {
    width: "100%",
    height: 220,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontSize: 20,
  },
  price: { fontSize: 18, fontWeight: "bold" },
});
