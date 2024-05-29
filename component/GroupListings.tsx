import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import { ListRenderItem } from 'react-native'
import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'


const GroupListings = ({listings}:{listings:GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item}) => {
        return (
          <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.ratings}>
                <Ionicons name="star" size={20} color={colors.primaryColor} />
                <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
                <Text style={{ marginLeft:1, color: colors.gray }}>{item.reviews}</Text>
              </View>
            </View>
          </View>
        );
    }
  return (
    <View >
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data = {listings} 
      renderItem={renderItem}/>
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({ 
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.black, 
        marginVertical: 20
    },
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        width: 300,
        marginVertical: 10, 
        flexDirection: 'row',
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 100, 
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,

    }, 
    name:{
      fontSize: 12,
      fontWeight:'600', 
      color: colors.black, 
      marginBottom: 8
    }, 
    ratings:{
      flexDirection: 'row', 
      alignItems: 'center',
      gap:10
    }
})