import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//styles
import { GlobalStyles } from '../../styles/styles'

const TestScreen = () => {
  
  styles = GlobalStyles

  return (
    <View 
    style={styles.container}
    >
      <Text>Test Screen</Text>
    </View>
  )
}

export default TestScreen