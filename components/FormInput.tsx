import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

export type FormInputProps = TextInputProps & {
  error: string;
  isError: boolean;
  label: string;
};

export const FormInput = ({
  error,
  isError,
  label,
  ...inputProps
}: FormInputProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...inputProps} />
      {isError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontSize: 18,
    width: "100%",
    borderRadius: 8,
    textAlignVertical: "top",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  error: {
    fontSize: 14,
    color: "#9e0000",
  },
  label: {
    paddingLeft: 8,
    fontSize: 14,
  },
});
