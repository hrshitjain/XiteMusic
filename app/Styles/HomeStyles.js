import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    rowItem:{
        padding:10,
        flex:1,
        backgroundColorL:'red'
    },
    detail:{
        flexDirection:'column'
    },
    image:{
        aspectRatio: 1 
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        color:'white'
    },
    desc:{
        fontSize:10,
        color:'gray',
    },
    homeContainer:{
        flex:1
    },
    filter:{
        margin:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    greeting:{
      color:'white',
      fontSize:30,
      fontWeight:'bold',
      margin:20
    },
    toolbar:{
      flexDirection: 'row',
      marginBottom:20
    },
    emptyListContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:100,
    },
    emptyListIcon:{
      alignSelf:'center'
    },
    emptyListText:{
      color:'white',
      fontSize:16,
      margin:20,
      textAlign:'center'
    },
    logoContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center'
    },
    logo:{
      flexDirection:'row',
      alignSelf:'center',
      justifyContent:'flex-start'
  }
})

export default styles;