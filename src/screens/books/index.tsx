import React from "react";
import { View, Text } from "react-native";
import { Book } from "./components/book";

export const BooksScreen : React.FC<{}> = (props) => {
  return (
    <View>
      <Book/>
    </View>
  )
}
