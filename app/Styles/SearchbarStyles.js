import {StyleSheet} from 'react-native'

export default searchbarStyles = StyleSheet.create({
    container: {
      margin: 10,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "80%",
    },
    searchBar: {
      padding: 10,
      flexDirection: "row",
      width: "95%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "90%",
    },
  });