import React from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, } from "native-base"
export const Example = () => {
  const data = [
    {
      id: "1",
      fullName: "Tytul1",
      timeStamp: "Godzina",
      recentText: "Opis1",
      
    },
    {
      id: "2",
      fullName: "Tytul2",
      timeStamp: "Godzina",
      recentText: "Opis2",
    },
    {
      id: "3",
      fullName: "Tytul3",
      timeStamp: "Godzina",
      recentText: "Opis3",
    },
    {
      id: "4",
      fullName: "Tytul4",
      timeStamp: "Godzina",
      recentText: "Opis4",
    },
    {
      id: "5",
      fullName: "Tytul5",
      timeStamp: "Godzina",
      recentText: "Opis5",
    },
  ]
  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Zaplanowane spotkania
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
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
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
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
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Example/>
    </NativeBaseProvider>
  )
}

