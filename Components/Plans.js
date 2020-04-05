import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import {addPlan} from '../redux/actions/plan'
import { View, TextInput,Text ,StyleSheet,FlatList, TouchableOpacity} from 'react-native'
const Plans = (props) => {
console.log(props.plans)
    return (
       <View style={styles.container}>
           <Text style={{fontSize:20,textAlign:"center", marginVertical:10}}> My Medical sniznos</Text>
        <FlatList 
        
        data={props.plans}
        renderItem={(item) => <TouchableOpacity 
        style={styles.li}>
            <View style={styles.liTextGroup}>
            <Text>{item.item.name}</Text>
            <Text>{item.item.medication}</Text>
         
            </View>
        </TouchableOpacity>}
        />
</View>
    )
}
function mapStateToProps(state) {
  return {
    plans: state.plans
  };
}
const mapDispatchToProps = {
  
};
export default 
  connect(mapStateToProps, mapDispatchToProps)(Plans)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        width:"100%",
        marginVertical:30

    },
    button: {
      alignItems: "center",
      backgroundColor: "#7799ff",
      padding: 10
    },
    inputs: {
        margin:2,
        justifyContent: "space-around",
        height: 40,
        width:"100%",
        borderColor:"#ccc",
        borderStyle:'solid',
        borderWidth:1, 
        padding:5,
    },
    li:{
     elevation:3,
     marginVertical:5,   
     backgroundColor:"white",
     padding:15,
     width:"90%",
     marginLeft:"5%"
     
    },
    liTextGroup:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
  
    
});