import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
        return () => clearTimeout(timer)
    }, [navigation])
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

export default SplashScreen