import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import color from "../../constants/colors";
import colors from "../../constants/colors";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.bgcolor,
          borderTopWidth:0,
          height: 100,
          paddingBottom: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: "#999",
      }}
      
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ 
              backgroundColor: colors.primaryColor, 
              paddingHorizontal: 18, 
              paddingVertical:20, 
              borderRadius:10, 
              height: 60 }}> 
              <Ionicons name="search" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={24} color={color} />
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
