import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from "@/assets/data/airbnb-listings.json"

const index = () => {
  const [category, setCategory] = useState<string>("Tiny homes")
  const items = useMemo(() => listingsData as any, [])

  const onDataChanged = (category: string) => {
    console.log("cat changed: ", category)
    setCategory(category)
  }

  

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>
      }}/>
      <Listings listings={listingsData as any} category={category}/>

    </View>
  )
}

export default index