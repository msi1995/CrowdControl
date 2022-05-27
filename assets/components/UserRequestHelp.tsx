import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TextStyle, TextInputProps, Alert} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import Realm from "realm"


function UserRequestHelp(){


    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 15,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 5,
        },
      });


    const [ requestEmergency, SetRequestEmergency ] = useState ("")
    const [ eventVenueOrAddr, SetEventVenueOrAddr ] = useState ("")
    const [ eventCustomCode, SetEventCustomCode ] = useState ("")

    function sendtoDB(props: any){


        //type Nullable<T> = T | null;
        const eventName: string = props.eventName
        const eventVenueOrAddr: string = props.eventVenueOrAddr
        const eventCustomCode: string = props.eventCustomCode

        if(eventCustomCode === ''){
          console.log("NULL CODE")
        }

        console.log(eventName)
        console.log(eventVenueOrAddr)
        console.log(eventCustomCode)

    }

    return (
        <View style={{margin: 20, marginTop: 60}}>
            <Form 
            buttonStyle={{backgroundColor: "#2fd3d5"}}
            buttonText="Send Message"
            onButtonPress={() => sendtoDB({requestEmergency, eventVenueOrAddr, eventCustomCode})}>
                <FormItem
                label="Emergency? Yes/No "
                isRequired
                value={requestEmergency}
                onChangeText={(requestEmergency) => SetRequestEmergency(requestEmergency)}
                asterik
                />
                <FormItem
                label="If emergency, where are you? (Seat #, Section, etc.) "
                value={eventVenueOrAddr}
                onChangeText={(eventVenueOrAddr) => SetEventVenueOrAddr(eventVenueOrAddr)}
                asterik
                />
                <FormItem
                label="Details/Question "
                isRequired
                value={eventCustomCode}
                onChangeText={(eventCustomCode) => SetEventCustomCode(eventCustomCode)}
                />
            </Form>
        </View>
  );
}


export default UserRequestHelp;