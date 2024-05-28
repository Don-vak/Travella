import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  TouchableOpacity,
  Image,
} from "react-native";
import React , { useEffect, useState } from 'react'
import { ListingType } from '@/types/ListingType'
import colors from '@/constants/colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import bookmark from '@/app/(tabs)/bookmark'
import { Link } from 'expo-router'
type props = {
    listings: any[]
    category: string
}


const Listings = ({listings, category}: props) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log('update listing')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200);
        
    }, [category])
const renderItems:ListRenderItem<ListingType> = ({item}) => {
    return (
      <Link href={`/Listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={colors.white}
              />
            </View>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View style={styles.details}>
              <View style={styles.location}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color={colors.primaryColor}
                />
                <Text style={styles.locationtext}>{item.location}</Text>
              </View>
              <Text style={styles.pricetext}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
}


  return ( 
   <View>
    <FlatList
     data = {loading ? [] :listings} 
    renderItem={renderItems}
    horizontal
    showsHorizontalScrollIndicator={false} 
    />
   </View>
  )

}

export default Listings

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        width: 220,
        marginVertical: 10
    },

    image: {
        width: 200,
        height: 200, 
        borderRadius: 10,
        marginBottom: 30
    },
    
    bookmark: {
        position: 'absolute',
        top: 185,
        right: 30, 
        backgroundColor: colors.primaryColor,
        borderRadius: 30,
        padding: 10, 
        borderWidth:3, 
        borderColor: colors.white
    }, 

    name: {
        fontWeight:'600',
        color: colors.black,
        fontSize: 13 ,
        marginBottom: 10,
}, 

    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    
    }, 
    locationtext: {
        fontSize: 12,
},

    pricetext: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primaryColor
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})
