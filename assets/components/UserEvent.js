import { FlatList, StyleSheet, Text, TouchableHighlight, View, ScrollView, Image, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
import { Form, FormItem } from 'react-native-form-component';

function UserEvent( {navigation} ){

    //not going to allow more than this for purposes of fitting msg
    let maxChars = 128;
    const [buttonOpacity, setButtonOpacity] = useState(1.0)
    const [textColor, setTextColor] = useState('black')
    const [eventName, setEventName ] = useState("EDC 2022")
    //const [eventMessages, SetEventMessages ] = useState([])
    const [eventMessages, SetEventMessages ] = useState(['some text in here via state','some more text','oh dear an emergency at the event','and we have a really long emergency in this one, going to allow up to 128 characters for now probably because im bad at react native and cant resize well','6','7','8','9','11','12','13','14','15', '16', '17'])


    useEffect(() => {
        eventMessages.length === 0 ? setTextColor('black') : setTextColor('white')
      }, [eventMessages]);


    //have to use ( instead of { when mapping in react native...??
    return(
        <View style={{width: '100%', height: '100%'}}>
        <Text style={{textAlign: 'center', width: '100%', backgroundColor:'#b0feff', paddingVertical: 10, fontSize: 24, borderBottomWidth: 2, borderColor: 'black'}}>{eventName}</Text>
        <ScrollView 
        onTouchStart={ () => {setButtonOpacity(0.10)}}
        onTouchEnd={ () => {setButtonOpacity(1.0)}}
        onScrollEndDrag={ () => {setButtonOpacity(1.0)}}
        style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}
        >


        <View style={{marginTop: 0,  height: '100%'}}>
            {eventMessages.length === 0 ? <Text style={{fontSize: 22, textAlign: 'center', paddingVertical: '65%'}}>No messages at this time.</Text> : <View></View>}
            {eventMessages.map((message) => (
                <Text key={message} style={{textAlign: 'left', height: 66, backgroundColor:'#04b8bb', borderBottomWidth: 1, borderColor: 'black', paddingLeft: 10, textAlignVertical: 'center' }}>{message}</Text>
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


export default UserEvent;