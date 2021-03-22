import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, View, Button } from 'react-native'

export default class Todo extends Component {
    render() {
         const [description,setDescription]= useState('')
        return (
            <View>
                <TextInput 
                style={styles.txtbox}
                placeholder=' Todo ekle'
                value={description}
                onChangeText={value=>setDescription(value)}
                />
                <Button 
                title='Ekle'
                onPress={addTodo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
