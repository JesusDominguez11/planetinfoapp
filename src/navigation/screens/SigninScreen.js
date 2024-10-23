import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//styles
import { GlobalStyles } from '../../styles/styles'

const SigninScreen = () => {

  styles = GlobalStyles

  return (
    <View 
    style={styles.container}
    >
      <Text>SigninScreen</Text>
    </View>
  )
}

export default SigninScreen