import React, {useState, useEffect} from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, Spinner} from "native-base"

import { Alert } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Home({navigation})  {


  const [meetings, setMeetings] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {getMeetings} = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    getMeetings()
      .then(value => {
        setMeetings(value);
      })
      .catch(exc=>{
        console.log(exc);
      }).finally(()=>{
        setLoading(false);
      });
  }, []);
  

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
      <FlatList
        data={meetings}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{console.log("ta")}} onLongPress={()=>console.log("long")}>
                <Box
                borderBottomWidth="4"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={1} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {`Nazwa spotkania: ${item.name}`}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {`Opis: ${item.description}`}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {new Date(item.timeDate).toUTCString()}
                  </Text>
                </HStack>
              </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

