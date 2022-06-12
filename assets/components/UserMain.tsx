import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import { Form, FormItem } from 'react-native-form-component';

function UserMain( { route, navigation } ){

    const { isAttendee, setIsAttendee } = route.params;

    function sendtoDB(props: any){
        const eventCode = props.eventCode
        console.log(eventCode)

        setIsAttendee(true)
        navigation.navigate('UserEvent')

    }

    const [ eventCode, SetEventCode ] = useState ("")

    return(
        <View style={{margin: 40, marginTop: '50%', }}>
        <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 20}}>Enter event code:</Text>
        <Form 
        buttonStyle={{backgroundColor: "#2fd3d5"}}
        buttonText="Join Event"
        onButtonPress={() => sendtoDB({eventCode})}>
            <FormItem
            textInputStyle={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}
            isRequired
            value={eventCode}
            onChangeText={(eventCode) => SetEventCode(eventCode)}
            />
        </Form>
    </View>
    )

}


export default UserMain;