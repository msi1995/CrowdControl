import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight,
    useWindowDimensions, Alert} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';


function UserType({ navigation }){

  const [ isOrganizer, setIsOrganizer ] = useState(false)
  const [ isAttendee, setIsAttendee ] = useState(false)


  function handleOrganizerClick(){
    isOrganizer ? navigation.navigate('OrganizerEvent') : navigation.navigate('OrganizerMain', {isOrganizer, setIsOrganizer});
  }

  function handleAttendeeClick(){
    isAttendee ? navigation.navigate('UserEvent') : navigation.navigate('UserMain', {isAttendee, setIsAttendee});
  }

    const { height, width } = useWindowDimensions()
    const buttonStyles = StyleSheet.create({
        container: {
          width: width * 0.375,
          marginTop: height * 0.04,
          marginHorizontal: width * 0.05,
        },
      });

    return(
      <View style={chooseTypeStyles.container}>
        <View style={chooseTypeStyles2.container}>
          <Text numberOfLines={1} style={textStyles.container}>Are you organizing an event, or attending?</Text>
          <TouchableHighlight style={buttonStyles.container}>
          <Button color={"#2fd3d5"} title="Organizing" onPress={() => handleOrganizerClick() }/>
          </TouchableHighlight>

          <TouchableHighlight style={buttonStyles.container}>
          <Button color={"#2fd3d5"} title="Attending" onPress={() => handleAttendeeClick() }/>
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