import React from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//styles
import { BackgroundStyles } from "../styles/styles";

const Background = ({ children }) => {
    return (
<ImageBackground
      source={require('../img/bg/bg_9098131.png')}  
      style={BackgroundStyles.background}
    >
       <View style={BackgroundStyles.overlay} />
      {children}
    </ImageBackground>
    );
  };

export default Background; 