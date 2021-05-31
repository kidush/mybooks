import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../login/styles";

export const SignupScreen: React.FC<{}> = (props) => {
  const navigator = useNavigation()

  return (
    <View style={Styles.container}>
      <Text onPress={() => navigator.goBack()}>Signup Screen</Text>
    </View>
  )
}