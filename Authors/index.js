import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  NativeBaseProvider,
} from "native-base"
export const Author = () => {
  const data = [
    {
      id: "101",
      fullName: "Wojciech Minner",
      avatarUrl:
        "https://cdn.discordapp.com/emojis/770011174568984606.png?size=48",
    },
    {
      id: "102",
      fullName: "Jacek Michalski",
      avatarUrl:
        "https://cdn.discordapp.com/emojis/903306709139857409.png?size=48",
    },
    {
      id: "103",
      fullName: "Jakub Ozga",
      avatarUrl: 
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/259066081_1029599614493640_3971355847073552861_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VT3nHlA-iBYAX8TjCl0&_nc_ht=scontent-waw1-1.xx&oh=dc538de9d89f6a3d13958b14a8b21d8d&oe=61C153D9",
    },
  ]
  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
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
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
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
              </VStack>
              <Spacer />
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
        <Author />
    </NativeBaseProvider>
  )
}
