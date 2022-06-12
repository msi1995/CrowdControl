import React from "react";
import { useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View, TextStyle, TextInputProps, Alert} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';

function OrganizerMain({ route, navigation }){

  const { isOrganizer, setIsOrganizer } = route.params;

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 15,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 5,
        },
      });


    const [ eventName, SetEventName ] = useState ("")
    const [ eventVenueOrAddr, SetEventVenueOrAddr ] = useState ("")
    const [ eventCustomCode, SetEventCustomCode ] = useState ("")

    function sendtoDB(props: any){

        setIsOrganizer(true);

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

        navigation.navigate('OrganizerEvent', {eventName})

    }

    return (
        <View style={{margin: 20, marginTop: 60}}>
            <Form 
            buttonStyle={{backgroundColor: "#2fd3d5"}}
            buttonText="Register Event"
            onButtonPress={() => sendtoDB({eventName, eventVenueOrAddr, eventCustomCode})}>
                <FormItem
                label="Event Name "
                isRequired
                value={eventName}
                onChangeText={(eventName) => SetEventName(eventName)}
                asterik
                />
                <FormItem
                label="Venue or Address "
                isRequired
                value={eventVenueOrAddr}
                onChangeText={(eventVenueOrAddr) => SetEventVenueOrAddr(eventVenueOrAddr)}
                asterik
                />
                <FormItem
                label="Custom Attendee Code, if desired"
                value={eventCustomCode}
                onChangeText={(eventCustomCode) => SetEventCustomCode(eventCustomCode)}
                />
            </Form>
        </View>
  );
}


export default OrganizerMain;