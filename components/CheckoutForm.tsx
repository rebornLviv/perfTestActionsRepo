import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "./Button";
import { FormInput } from "./FormInput";

export type CheckoutFormProps = { onSubmit: () => void };
type ErrorState = {
  name?: string;
  address?: string;
};

// const deliveryOptions = [
//   {
//     label: "Post",
//     value: "post",
//   },
//   { label: "Courier", value: "courier" },
// ];

const initialErrors = {
  name: "",
  address: "",
};
const nameValidator = (value: string) => value.length > 1 && value.length < 101;
const addressValidator = (value: string) =>
  value.length > 19 && value.length < 501;

export const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // const [, setDeliveryType] = useState("");
  const [errors, setErrors] = useState<ErrorState>({ ...initialErrors });

  const handleSubmit = () => {
    const tempErrors = { ...initialErrors };
    const isNameValid = nameValidator(name);
    const isAddressValid = addressValidator(address);

    tempErrors.name = isNameValid
      ? ""
      : "Your name should have at least 2 and maximum 100 characters";
    tempErrors.address = isAddressValid
      ? ""
      : "Your address should have at least 20 and maximum 500 characters";

    setErrors(tempErrors);

    if (isAddressValid && isNameValid) {
      onSubmit();
    }
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <FormInput
          label="Name"
          accessibilityLabel="Name input field"
          onChangeText={setName}
          value={name}
          error={errors.name}
          isError={!!errors.name}
        />
        <FormInput
          label="Address"
          accessibilityLabel="Address input field"
          onChangeText={setAddress}
          numberOfLines={3}
          multiline
          value={address}
          error={errors.address}
          isError={!!errors.address}
        />

        {/*<Dropdown*/}
        {/*  label="Delivery type"*/}
        {/*  options={deliveryOptions}*/}
        {/*  onSelect={(newValue) => setDeliveryType(newValue as string)}*/}
        {/*  initialChosenOption={deliveryOptions[0]}*/}
        {/*/>*/}
      </ScrollView>
      <View style={styles.actions}>
        <Button text="Order" style={styles.buttonText} onPress={handleSubmit} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: { flex: 1, width: "100%", padding: 16 },
  actions: {
    width: "100%",
    padding: 16,
  },
  buttonText: {
    backgroundColor: "#bada55",
    fontSize: 18,
    color: "#333",
    padding: 8,
    textAlign: "center",
    borderRadius: 16,
    alignItems: "center",
  },
});
