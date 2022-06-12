import React from "react";
import { useState, useEffect } from "react";
import { Button, TouchableOpacity, Image, ScrollView, StyleSheet, Text, TextInput, View, TextStyle, TextInputProps, Alert} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAZu79PnHn_SQMUmDQCohnuwWxPNsavgLQ",
  authDomain: "crowdcontrol-41380.firebaseapp.com",
  databaseURL: "https://crowdcontrol-41380-default-rtdb.firebaseio.com",
  projectId: "crowdcontrol-41380",
  storageBucket: "crowdcontrol-41380.appspot.com",
  messagingSenderId: "794498550529",
  appId: "1:794498550529:web:a08a3dbbbdab66bfa16900",
  measurementId: "G-X8QK8DDR8C"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeData(name: String){
  console.log(`trying to write ${name}`)
  set(ref(database, 'events/1'), {
    name: name,
    venue: 'please show venue'
  });
}


function OrganizerEvent( {route, navigation} ){

    const [ eventNameState, setEventNameState ] = useState("never see this")
    const [ flag, setFlag ] = useState(false);

    if(typeof(route.params) != 'undefined'){
      var { eventName } = route.params
      writeData(eventName)
      if(!flag){
        setFlag(true)
        setEventNameState(eventName);
      }
      
    }

    else{
      
      eventName = eventNameState;
      
    }

    


  let maxChars = 128;
    const [buttonOpacity, setButtonOpacity] = useState(1.0)
    const [textColor, setTextColor] = useState('black')
    //const [eventMessages, SetEventMessages ] = useState([])
    const [eventMessages, SetEventMessages ] = useState(['some text in here via state','some more text','oh dear an emergency at the event','and we have a really long emergency in this one, going to allow up to 128 characters for now probably because im bad at react native and cant resize well','torus mckinler','7','8','9','11','12','13','14','15', '16', '17'])
    useEffect(() => {
      eventMessages.length === 0 ? setTextColor('black') : setTextColor('white')
    }, [eventMessages]);



    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 15,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 5,
        },
      });


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
        <View style={{width: '100%', height: '100%'}}>
        <Text style={{textAlign: 'center', width: '100%', backgroundColor:'rgba(0,0,0,0.9)', color: 'white', paddingVertical: 10, fontSize: 24, borderBottomWidth: 2, borderColor: 'black'}}>{eventName}</Text>
        <ScrollView 
        onTouchStart={ () => {setButtonOpacity(0.10)}}
        onTouchEnd={ () => {setButtonOpacity(1.0)}}
        onScrollEndDrag={ () => {setButtonOpacity(1.0)}}
        style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}
        >


        <View style={{marginTop: 0,  height: '100%'}}>
            {eventMessages.length === 0 ? <Text style={{fontSize: 22, textAlign: 'center', paddingVertical: '65%'}}>No messages at this time.</Text> : <View></View>}
            {eventMessages.map((message) => (
                <Text key={message} style={{textAlign: 'left', height: 66, backgroundColor:'rgba(40,200,190,.5)', borderBottomWidth: 1, borderColor: 'black', paddingLeft: 10, textAlignVertical: 'center' }}>{message}</Text>
            ))}
        </View>
        </ScrollView>

        <TouchableOpacity onPress={() => {navigation.navigate('UserRequestHelp')}}
                style={{position: 'absolute', alignItems: 'center', bottom: 0, right: 0, width: 170, zIndex: 1, paddingBottom: '7.5%'}}>
                <View 
                >
                    <Image
                    style={{ width: 105, height: 105, alignSelf: 'center', opacity: buttonOpacity }}
                    source={require('../exclamation.png')}></Image>
                    <Text style={{color: textColor, fontWeight: 'bold', opacity: buttonOpacity}}>Message Event Staff</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default OrganizerEvent;