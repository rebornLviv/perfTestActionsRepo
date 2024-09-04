import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useProduct } from "../../../api/useProduct";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { ImageSlider } from "../../../components/ImageSlider";
import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { StockInfo } from "../../../components/StockInfo";

const SingleProduct = () => {
  const { productId, title } = useLocalSearchParams();
  const { productData, isProductLoading, productError } = useProduct(
    productId as string,
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <ScreenWrapper
      isLoading={isProductLoading}
      error={productError && "Something went wrong, please try again later"}
    >
      <View style={{ flex: 1 }}>
        <ImageSlider images={productData?.images} />
        <View style={styles.info}>
          <Text style={styles.price}>${productData?.price}</Text>
          <StockInfo quantity={productData?.stock ?? 0} />
        </View>
        <View style={styles.cartWrapper}>
          <AddToCartButton
            cartItem={{
              id: productData?.id,
              stock: productData?.stock,
              title: productData?.title,
              thumbnail: productData?.thumbnail,
              price: productData?.price,
            }}
          />
        </View>
        <Text style={styles.description}>{productData?.description}</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  description: {
    paddingHorizontal: 16,
    fontSize: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  price: { fontSize: 18, fontWeight: "bold" },
  cartWrapper: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});

export default SingleProduct;
