import React from "react";
import { FlatList, Modal, Text, View } from "react-native";
import FilterRow from "./FilterRow";
import Icon from "react-native-vector-icons/Ionicons"
import PopupStyles from "../Styles/PopupStyles";

const PopUp = ({isVisible, setVisibility, genres, selectedValues, onValueChange, applyFilter, onClear, onClose}) => {
    const renderRow = (item)=>{
        return <FilterRow item={item}
                          selectedValues={selectedValues}
                          onValueChange={onValueChange}/>
    }
    return(
        <Modal animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    setVisibility(!isVisible);
                }}>
            <View style={PopupStyles.container}>
                <View style={PopupStyles.header}>
                    <Text style={PopupStyles.heading}>Genres</Text>
                    <Icon name="close" 
                          size={20}
                          color="white"
                          onPress={onClose}
                          style={PopupStyles.close}/>
                </View>
                <FlatList data={genres}
                          renderItem={({item}) => renderRow(item)}
                          keyExtractor={item => item.id} />
                <View style={PopupStyles.bottomLayout}>
                    <Icon.Button backgroundColor='black'
                                color="white"
                                onPress={applyFilter}
                                size={20}>Apply</Icon.Button>
                    <Icon.Button backgroundColor='black'
                                 onPress={onClear}
                                 color="white"
                                 size={20}>Clear All</Icon.Button>
                </View>
            </View>
        </Modal>
        );
}

export default PopUp;