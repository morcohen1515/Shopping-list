import React, { useState } from 'react'
import { View, TextInput, TouchableHighlight, Text, KeyboardAvoidingView, Platform
} from 'react-native'
import { StyleSheet } from 'react-native'

function AddNewItem({ createNewItem }) {

const [newItem, setNewItem] = useState('')

const handleNewItemPress = () => {
 createNewItem(newItem)
 setNewItem('')
 }

return (
<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ?
"padding" : "height"}>
 <TextInput
 value={newItem}
 onChangeText={(text) => setNewItem(text)}
 style={styles.input}
 placeholder='Item'
 placeholderTextColor='black'
 />
 <TouchableHighlight style={styles.button} onPress={handleNewItemPress}>
 <Text style={styles.buttonText}>Add Item</Text>
 </TouchableHighlight>
 </KeyboardAvoidingView>
 )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        width: '100%',
        padding: 10,
        },
        input: {
        height: 40,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        fontWeight: 'bold',
        borderRadius: 8,
        },
        button: {
        width: '100%',
        height: 40,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'black',
        borderRadius: 8,
        shadowOffset: {
        width: 1,
        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
        },
        buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        },
       
})
export default AddNewItem
