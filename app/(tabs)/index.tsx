import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';

const index = () => {
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => console.log("hello")} style={{ marginLeft: 10 }}>
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
              }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity 
          onPress={() => console.log("hello")} 
          style={{
            marginRight: 10,
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
            <Ionicons name="notifications" size={24} color={colors.black} />
          </TouchableOpacity>
        )
      }}
    />
  );
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})