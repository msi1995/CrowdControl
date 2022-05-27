import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TextStyle, TextInputProps, Alert} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import Realm from "realm"


function OrganizerMain(){

    const EventSchema = {
        name: "Event",
        properties: {
          _id: "int",
          eventname: "string",
          eventvenueaddr: "string",
          customcode: "string?",
        },
        primaryKey: "_id",
      };

    //  (async () => {
    //     const realm = await Realm.open({
    //         path: "myrealm",
    //         schema: [EventSchema],
    //         });
        
    
    //         let event1, event2;
    //         realm.write(() => {
    //           event1 = realm.create("Event", {
    //             _id: 1,
    //             eventname: "go grocery shopping",
    //             eventvenueaddr: "Open",
    //           });
    //           event2 = realm.create("Event", {
    //             _id: 2,
    //             eventname: "go exercise",
    //             eventvenueaddr: "Open",
    //           });
    //           console.log(`created two tasks: ${event1.name} & ${event2.name}`);
    //         });
    //         // use task1 and task2
    //     })
            


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