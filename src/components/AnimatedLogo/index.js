import React, { Component } from 'react'
import { Animated, Image } from 'react-native'
import { Text } from '../../styles/themes/dark'

export class AnimatedLogo extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.animeLogo()
    }, this.props.delay?this.props.delay:1000);
  }

  animeLogo = () => {
    return Animated.parallel([
      Animated.timing(this.props.slideUpLogoValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();
  };

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              translateY: this.props.slideUpLogoValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  this.props.outputBegin?this.props.outputBegin:-250, 
                  this.props.outputEnd?this.props.outputEnd:50
                ]
              })
            }
          ],
          width: '100%',
          justifyContent: "center"
        }}
      >
        <Image source={require("../../assets/img/logo2.png")}
          style={{
            width: this.props.width?this.props.width:150,
            height: this.props.height?this.props.height:150,
            borderRadius: this.props.circle?this.props.width?this.props.width/2:75:0,
            left: '50%',
            marginLeft: this.props.width?(this.props.width/2)-this.props.width:-75
          }} />
        <Text style={{ textAlign: 'center', width: '100%' }}>Freeling</Text>
        <Text style={{ textAlign: 'center', fontSize: 12, width: '100%' }}>Os Melhores Profissionais e Trabalhos Estão Aqui</Text>
      </Animated.View>
    )
  }
}

export default AnimatedLogo
