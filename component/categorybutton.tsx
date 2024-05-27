import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import colors from '../constants/colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


type props = {
  onCategoryChange: (category: string) => void
}


const Categorybutton = ({onCategoryChange}:props) => {
  
  const scrollRef = useRef<ScrollView>(null)
  const itemref = useRef <TouchableOpacity[] | null[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectCategory = (index: number) => {
    const selected = itemref.current[index]
    setActiveIndex(index)
    
    selected?.measure((x, y, width, height, pageX, pageY) => {
      scrollRef.current?.scrollTo({ x: pageX-3, y: 0, animated: true })
    })

    onCategoryChange(destinationCategories[index].title)
  }
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          gap: 30,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemref.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categorybtnactive
                : styles.categorybtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={24}
              color={activeIndex === index ? colors.white : colors.black}
              style={{
                marginRight: 10,
              }}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categorytextactive
                  : styles.categorytext
              }
              key={index}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorybutton

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.black
    }, 
    categorybtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }, 
    categorybtnactive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }, 
    categorytext: {
        color: colors.black
    }, 
    categorytextactive: {
        color: colors.white
        
    }
})