import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Box from './Box';
import NavigationBottom from './NavigationBottom';
import tasks from './data/tasks';


function MenuScreen() {
    return (
        <ScrollView style={styles.root}>
            <View style={styles.containerBox}>
                {
                    tasks.map((task, i) => (
                        
                        <Box 
                            key={i}
                            id = {task.id}
                            description = {task.description}  
                            url = {task.url}
                            stock = {task.stock}
                            nombre = {task.nombre}
                        />
                        
                    ))
                    
                }
                
            </View>

            <NavigationBottom />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    }
})

export default MenuScreen;