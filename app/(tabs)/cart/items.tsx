import { Link } from "expo-router";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import { Button } from "../../../components/Button";
import { CartListItem } from "../../../components/CartListItem";
import { NoDataPlaceholder } from "../../../components/NoDataPlaceholder";
import { useCart } from "../../../store/useCart";

const Items = () => {
  const cartItems = useCart((state) => state.cartItems);

  if (cartItems.length === 0) {
    return <NoDataPlaceholder />;
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.list}>
        {cartItems.map((item) => (
          <CartListItem key={item.id} data={item} />
        ))}
      </ScrollView>
      <Link href="/cart/checkout" asChild push>
        <Button text="Checkout" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  list: { flex: 1 },
});

export default Items;
