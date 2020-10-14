import React from 'react'
import { FlatList } from 'react-native'
import ShoppingItem from './ShoppingItem'

function ShoppingList({ items, removeItem }) {

 return (
 <FlatList
 data={items}
 keyExtractor={(item, index) => `${index}`}
 renderItem={({ item, index }) => (
 <ShoppingItem index={index} name={item} removeItem={removeItem} />
 )}
 />
 )
}
export default ShoppingList