import React, {useState, useEffect} from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, Spinner} from "native-base"

import { Alert } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import List from "./List";

export default function Home({navigation})  {


  const [meetings, setMeetings] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {getMeetings, removeMeeting} = useGlobalContext();

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
  }, []);

  const deleteMeeting = (itemId) =>{
    setLoading(true);
    removeMeeting(itemId)
      .then(()=>{
        return getMeetings();
      })
      .then((v)=>{
        setMeetings(v);
      })
      .catch(exc=>{
        console.log(exc);
        Alert.alert(
                    "Error!",
                    "Nie można usunąć spotkania.",
                    [
                    { text: "OK" }]);
      })
      .finally(()=>{
        setLoading(false);
      })
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
      <Heading fontSize="xl" p="4" pb="3">
        Zaplanowane spotkania
      </Heading>
      <List data={meetings}/>
    </Box>
  )
}

