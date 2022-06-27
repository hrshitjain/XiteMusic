import {StyleSheet} from 'react-native'

export default popupStyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'black',
      marginTop:200,
      marginBottom:100,
      marginHorizontal:80,
      padding:10,
      borderRadius:20,
    },
    heading:{
      alignSelf:'center',
      margin:10,
      marginLeft:70,
      color:'white',
      fontSize:20,
      fontWeight:'bold',
    },
    bottomLayout:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    close:{
      alignSelf:'flex-start',
      marginLeft:'auto'
    }
});

export const filterRowStyles = StyleSheet.create({
  rowItem:{
    padding:10,
    flexDirection:'row',
    alignItems:'center'
  },
  checkbox:{
    margin:10
  },
  title:{
    fontWeight:'bold',
    fontSize:14,
    color:'white',
    marginLeft:10
},
});