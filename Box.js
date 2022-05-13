import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function Box({ id, description, url, stock, nombre}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image
                style={styles.tinyLogo}
                source={{uri:url,}}
            />
            <Text> {description}</Text>
            <Button
                color="#455a64"
                title="Ver"
                onPress={
                    () => navigation.navigate('Details', {
                        id: id,
                        description: description,
                        url: url,
                        stock: stock,
                        nombre: nombre
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '44%',
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
})

export default Box;