import React from "react"
import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, } from "native-base"
export const Example = () => {
  const data = [
    {
      id: "1",
      fullName: "Aafreen Khan",
      timeStamp: "12:47",
      recentText: "Good Day!",
      
    },
    {
      id: "2",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11",
      recentText: "Cheer up, there!",
    },
    {
      id: "3",
      fullName: "Anci Barroco",
      timeStamp: "6:22",
      recentText: "Good Day!",
    },
    {
      id: "4",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 ",
      recentText: "All the best",
    },
    {
      id: "5",
      fullName: "Kiara",
      timeStamp: "12:47",
      recentText: "I will call today.",
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
            borderBottomWidth="1"
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

