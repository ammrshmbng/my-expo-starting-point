import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Slot } from 'expo-router'
const _layout = () => {
  return (
    <View className="flex-1 items-center justify-center">
      
      <Slot />
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})