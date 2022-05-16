import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight,
    useWindowDimensions} from 'react-native';
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';


function Splash({ navigation }){

    const [ string, setString ] = useState("Welcome to the future of live event safety.")

    const handlePress = () => {
        navigation.navigate('UserType');
      }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#000000',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      
      
      const textStyles = StyleSheet.create({
        container: {
          color: '#ffffff',
          fontSize: 17,
          marginVertical: 10
        },
      });


    return(

    <SafeAreaView style={styles.container}>
        <Text numberOfLines={1} onPress={handlePress} style={textStyles.container}>{string}</Text>
        <Text numberOfLines={1} onPress={handlePress} style={textStyles.container}>Tap to continue</Text>
    </SafeAreaView>

    )
}

export default Splash;