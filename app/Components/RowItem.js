import React  from 'react';
import styles from '../Styles/HomeStyles';
import {Image, View, Text} from 'react-native'

class RowItem extends React.Component
{
    render(){
        return(
            <View style={styles.rowItem}>
                <View style={styles.detail}>
                    <Image style={styles.image} source={{uri:this.props.image}} />
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.desc}>{this.props.artist}</Text>
                </View>
            </View>
        )
    }
}

export default RowItem;