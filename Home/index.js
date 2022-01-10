import React, {useState, useEffect} from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, Spinner} from "native-base"
import { Alert,SafeAreaView, ScrollView } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import List from "./List";

export default function Home({navigation})  {


  const [meetings, setMeetings] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {getMeetings, removeMeeting, trigger, triggerLoadData} = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    getMeetings()
      .then(value => {
        setMeetings(value);
      })
      .catch(exc=>{
        Alert.alert(
                    "Error!",
                    "Nie mozna pobrać spotkań.",
                    [
                    { text: "OK" }]);
      }).finally(()=>{
        setLoading(false);
      });
  }, [trigger]);

  const deleteMeeting = (itemId) =>{
    setLoading(true);
    removeMeeting(itemId)
      .then(()=>{
        triggerLoadData();
      });
  }

  const longPress = (item) => {
    Alert.alert(
                    "Usuwanie Spotkania",
                    `Czy chcesz usunąć: ${item.name}?`,
                    [
                    { text: "Tak", onPress: ()=> deleteMeeting(item.id) }, {text: "Nie"}]);
  }
  

  return (

    isLoading ? <Center flex={1} px="3">
      <Spinner accessibilityLabel="Loading..." size="lg"/>
    </Center>:<Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <List data={meetings} longPress={longPress}/>
    </Box>
    
  )
}

