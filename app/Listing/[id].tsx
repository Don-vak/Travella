import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { ListingType } from '@/types/ListingType'
import listingData from '@/data/listingData.json' 
import { Dimensions } from 'react-native'
import colors from '@/constants/colors'

 


const width = Dimensions.get('window').width
const IMG_HEIGHT = 400
const ListingDetails = () => {
    const {id} = useLocalSearchParams()
    const listing:ListingType = (listingData as ListingType[]).find((item) => item.id === id)

    const router  = useRouter()
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                padding: 3,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  marginLeft: 15,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="arrow-back" size={24} color={colors.black} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                padding: 4,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  marginLeft: 15,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="bookmark-outline"
                  size={24}
                  color={colors.black}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle = {{paddingBottom:300}}>
          <Image source={{ uri: listing.image }} style={styles.image}></Image>
          <View style={styles.contentwrapper}>
            <Text style={styles.title}>{listing.name}</Text>
            <View style={styles.location}>
              <FontAwesome5
                name="map-marker-alt"
                size={20}
                color={colors.primaryColor}
              />
              <Text style={styles.locationtext}>{listing.location}</Text>
            </View>
            <View style={styles.highlightwrapper}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.highlighticon}>
                  <Ionicons name="time" size={20} color={colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.highlighttext}>Duration</Text>
                  <Text style={styles.highlighttextval}>
                    {listing.duration}days
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.highlighticon}>
                  <FontAwesome5
                    name="users"
                    size={20}
                    color={colors.primaryColor}
                  />
                </View>
                <View>
                  <Text style={styles.highlighttext}>Person</Text>
                  <Text style={styles.highlighttextval}>
                    {listing.duration}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.highlighticon}>
                  <Ionicons name="star" size={20} color={colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.highlighttext}>Rating</Text>
                  <Text style={styles.highlighttextval}>{listing.rating}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.description}>{listing.description}</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {}} style={styles.footerbookbutton}>
            <Text style={styles.footerbuttontext}>Book Now</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.footerbutton}>
            <Text style={styles.footerbuttontext}>{listing.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default ListingDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
   borderRadius: 50,
  },
  contentwrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationtext: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "500",
  },
  highlightwrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  highlighticon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  highlighttext: {
    fontSize: 12,
    color: "#999",
  },
  highlighttextval: {
    fontSize: 14,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: colors.gray,
    lineHeight: 24,
    marginTop: 20,
  },
  footer: {
    flexDirection: "row",
    gap: 40,
    position: "absolute",
    bottom: 0,
    width: width,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerbookbutton: {
    flex: 2,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footerbutton: {
    flex: 1,
    backgroundColor: "#01204E",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  footerbuttontext: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});