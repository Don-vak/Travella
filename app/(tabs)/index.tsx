import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import {useHeaderHeight} from '@react-navigation/elements';
import Categorybutton from '@/component/categorybutton';

const index = () => {
  const [Category, setCategory] = useState('All')
  const headerHeight = useHeaderHeight();
  const onCatChange = (category: string) => {
     setCategory(category);
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => console.log("hello")}
              style={{ marginLeft: 15 }}
            >
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
                }}
                style={styles.headerleftimage}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("hello")}
              style={styles.headerRight}
            >
              <Ionicons name="notifications" size={24} color={colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headertext}>Explore The beutiful world</Text>

        <View style={styles.searchsectionwrapper}>
          <View style={styles.searchbar}>
            <Ionicons name="search" size={25} color={colors.black} style={{ marginRight: 20 }}/>
            <TextInput placeholder="Search..."></TextInput>
          </View>
          <Ionicons name="options" size={35} color={colors.white} style = {styles.filterbtn} />
        </View>

        <Categorybutton onCategoryChange={onCatChange} />
      </View>
    </>
  );
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bgcolor
  
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10

  },
  headerRight: {
    marginRight: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerleftimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchsectionwrapper: {
  flexDirection: 'row',
  marginVertical:20,

  
  },

  searchbar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    flex: 1,
    }, 
    filterbtn: {
    backgroundColor: colors.primaryColor,
    borderRadius:10,
    padding: 15,
    marginLeft: 15
    }
    
});