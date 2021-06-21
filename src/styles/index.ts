import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#480838',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  fields: {
    zIndex: 1,
    height: 50,
    width: '80%',
    marginBottom: 15,
    paddingLeft: 5,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },

  errors: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10
  },

  submitButton: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: "#955279",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },

  textSubmitButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dbc9a7'
  },

  textLinkToScreen: {
    marginTop: 12,
    fontSize: 19,
    color: '#dbc9a7',
  }
})