import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight,
    useWindowDimensions, Alert} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function UserType({ navigation }){

    const { height, width } = useWindowDimensions()
    const buttonStyles = StyleSheet.create({
        container: {
          width: width * 0.375,
          marginTop: height * 0.04,
          marginHorizontal: width * 0.05
        },
      });

    return(
      <View style={chooseTypeStyles.container}>
        <View style={chooseTypeStyles2.container}>
          <Text numberOfLines={1} style={textStyles.container}>Are you organizing an event, or attending?</Text>
          <TouchableHighlight style={buttonStyles.container}>
          <Button title={"Organizing"} onPress={() => navigation.navigate('UserMain')}/>
          </TouchableHighlight>

          <TouchableHighlight style={buttonStyles.container}>
          <Button title="Attending" onPress={() => navigation.navigate('OrganizerMain')}/>
          </TouchableHighlight>
        </View>
      </View>
    )
}

const chooseTypeStyles = StyleSheet.create({
    container: {
          height: '100%',
          backgroundColor: '#000000',
        },
  });

  const chooseTypeStyles2 = StyleSheet.create({
    container: {
          height: '100%',
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '60%',
        },
  });

  const textStyles = StyleSheet.create({
    container: {
      color: '#ffffff',
      fontSize: 17,
      marginVertical: 10
    },
  });


export default UserType;