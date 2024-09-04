import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Platform,
  FlatListProps,
} from "react-native";

import { useCategories } from "../../../api/useCategories";
import { useProducts } from "../../../api/useProducts";
import { IconButton } from "../../../components/IconButton";
import { ProductItem } from "../../../components/ProductItem";
import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { Select, SelectOption } from "../../../components/Select";
import { Product } from "../../../api/apiTypes";

const PRODUCTS_PER_PAGE = 12;

const getCategoriesForList = (categories?: string[]) => {
  return categories
    ? [
        { label: "All", value: null },
        ...categories.map((category) => {
          return {
            label: category.charAt(0).toUpperCase() + category.slice(1),
            value: category,
          };
        }),
      ]
    : [];
};

const List = () => {
  const [chosenCategory, setChosenCategory] =
    useState<SelectOption["value"]>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const { productsData, isProductsLoading, productsError } = useProducts({
    skip: pageIndex * PRODUCTS_PER_PAGE,
    limit: PRODUCTS_PER_PAGE,
    category: chosenCategory,
  });
  const { categories, isCategoriesLoading, categoriesError } = useCategories();
  const maxPage = productsData?.total
    ? Math.ceil(productsData?.total / PRODUCTS_PER_PAGE)
    : 0;

  const listWebProps: Partial<FlatListProps<Product>> =
    Platform.OS === "web"
      ? {
          numColumns: 4,
          initialNumToRender: 12,
          columnWrapperStyle: {
            justifyContent: "center",
          },
        }
      : {};

  return (
    <ScreenWrapper
      isLoading={isProductsLoading || isCategoriesLoading}
      error={
        productsError || categoriesError
          ? "Something went wrong, please try again later"
          : undefined
      }
    >
      <View style={styles.container}>
        <Select
          data={getCategoriesForList(categories)}
          onChange={({ value }) => {
            setPageIndex(0);
            setChosenCategory(value);
          }}
          value={chosenCategory}
          containerStyle={{ padding: 16 }}
          style={styles.select}
          placeholder="Choose category"
          accessibilityLabel="Choose category"
        />
        <FlatList
          testID="products-list"
          data={productsData?.products}
          initialNumToRender={6}
          renderItem={({ item: { id, title, price, stock, thumbnail } }) => (
            <ProductItem data={{ id, title, price, stock, thumbnail }} />
          )}
          keyExtractor={({ id }) => id.toString()}
          {...listWebProps}
        />
        <View style={styles.pagination}>
          <IconButton
            accessibilityLabel="Previous page"
            name="chevron-circle-left"
            onPress={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex < 1}
            size={40}
          />
          <Text style={styles.paginationState}>
            {productsData ? `${pageIndex + 1} / ${maxPage}` : "-/-"}
          </Text>
          <IconButton
            accessibilityLabel="Next page"
            name="chevron-circle-right"
            onPress={() => setPageIndex(pageIndex + 1)}
            disabled={
              pageIndex + 1 ===
              Math.ceil(productsData?.total / PRODUCTS_PER_PAGE)
            }
            size={40}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  paginationState: { fontSize: 18, fontWeight: "bold" },
  select: { padding: 16 },
});

export default List;
