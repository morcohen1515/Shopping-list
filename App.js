import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import ShoppingList from './components/ShoppingList'
import AddNewItem from './components/AddNewItem'

export default function App() {

 const [items, setItems] = useState([])

 const createNewItem = (newItem) => {
 const newItems = [...items, newItem]
 setItems(newItems)
 }

 const removeItem = (itemIndex) => {
 const clone = [...items]
 clone.splice(itemIndex, 1)
 setItems(clone)
 }

 return (
 <SafeAreaView style={styles.container}>
 <View style={styles.list}>
 <ShoppingList items={items} removeItem={removeItem} />
 </View>
 <AddNewItem createNewItem={createNewItem} />
 </SafeAreaView>
 )

}

const styles = StyleSheet.create({

 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 },
 list: {
 flex: 1
 },
})

