import React from "react";
import { TextInput, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import SearchbarStyles from "../Styles/SearchbarStyles";

const SearchBar = ({setSearchPhrase}) => {
    return (
      <View style={SearchbarStyles.container}>
        <View style={SearchbarStyles.searchBar}>
          <Ionicon
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}/>
          <TextInput
            style={SearchbarStyles.input}
            placeholder="Artist, music ..."
            clearButtonMode="while-editing"
            onChangeText={setSearchPhrase}/>
        </View>
      </View>
    );
  };
  export default SearchBar;
  