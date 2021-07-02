import React from "react";
import { ScrollView, Text } from "react-native";
import { Book } from "./components/book";

export const BooksScreen : React.FC<{}> = (props) => {
  return (
    <ScrollView>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </ScrollView>
  )
}
