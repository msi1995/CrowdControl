import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight,
    useWindowDimensions,
    TouchableOpacity} from 'react-native';
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
          fontSize: 19,
          marginVertical: 10,
          textAlign: 'center',
        },
      });


    return(

    <SafeAreaView style={styles.container} onTouchStart={() => handlePress()}>
        <Text numberOfLines={1} style={textStyles.container}>{string}</Text>
        <Text numberOfLines={1} style={[textStyles.container, {fontSize: 14}]}>Tap anywhere to continue.</Text>
    </SafeAreaView>

    )
}

export default Splash;