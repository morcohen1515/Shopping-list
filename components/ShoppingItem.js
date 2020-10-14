import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

function ShoppingItem({ name, index, removeItem }) {

return (
 <View style={styles.container}>
 <View style={styles.circle}>
 <Text style={styles.circleText}>{index + 1}</Text>
 </View>
 <Text style={styles.title}>{name}</Text>
 <TouchableHighlight onPress={() => removeItem(index)} style={styles.remove}>
 <Text style={styles.removeText}>X</Text>
 </TouchableHighlight>
 </View>
 )}

const styles = StyleSheet.create({
    
 container: {
 width: 300,
 height: 60,
 backgroundColor: 'red',
 shadowOpacity: 0.25,
 shadowOffset: {
 width:1,
 height:1,
 },
 shadowRadius:4,
 elevation:1,
 borderWidth:3,
 borderColor: 'black',
 borderRadius:8,
 paddingHorizontal: 10,
 marginVertical: 10,
  alignItems: 'center',
 flexDirection: 'row',
 },

 circle: {
 height: 30,
 width: 30,
 backgroundColor: 'black',
 borderRadius: 15,
 justifyContent: 'center',
 alignItems: 'center',
 },

 circleText: {
 color: 'white',
 fontWeight: 'bold',
 fontSize: 18,
 },

 title: {
 textAlign: 'center',
 flex:1,
 fontSize: 24,
 fontWeight: 'bold',
 color: 'black',
 },

 remove: {
 height: 25,
 width: 25,
 borderWidth: 2,
 borderColor: 'rgba(100, 100, 74, 0.8)',
 borderRadius: 12.5,
 alignItems: 'center',
 justifyContent: 'center',
 },

 removeText: {
 fontSize: 16,
 color: 'rgba(100, 71, 74, 0.65)',
 },

})
export default ShoppingItem

