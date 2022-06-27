import React  from 'react';
import {View, Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { filterRowStyles } from '../Styles/PopupStyles';

const FilterRow = ({item, onValueChange, selectedValues}) =>{
    const isSelected = selectedValues.indexOf(item.id) > -1;
    return(
        <View style={filterRowStyles.rowItem}>
            <CheckBox style={filterRowStyles.checkbox}
                      testID="Filter.Check"
                      value={isSelected}
                      onChange={() => onValueChange(item.id)}
                      disabled={false}/>
            <Text style={filterRowStyles.title}>{item.name}</Text>
        </View>
    )
}

export default FilterRow;