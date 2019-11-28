import React, { Component } from 'react'
import { Platform, StatusBar, View, Image, Keyboard, KeyboardAvoidingView, Animated } from "react-native"
import { withNavigation } from 'react-navigation'
import { Container, Text } from '../../styles/themes/dark'
import { Content, Form } from './styles'
import { Button } from "../../components/Button"
import { EditText } from "../../components/EditText"
import AnimatedLogo from '../../components/AnimatedLogo'

class Login extends Component {

  state = {
    ready: false,
    slideUpValue: new Animated.Value(0),
    slideUpLogoValue: new Animated.Value(0),
    slideDownValue: new Animated.Value(0),
    loginFormOpened: 0,
    keyboardVerticalOffsetValue: Platform.OS == 'android' ? -500 : 0
  };

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    
  }

  showLoginForm = (show: Boolean = true) => {

    this.setState({ loginFormOpened: show==true?1:2 })
    if (show == true) {
      Animated.parallel([
        Animated.timing(this.state.slideUpValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        })
      ]).start();
    } else {
      Keyboard.dismiss()
      Animated.parallel([
        Animated.timing(this.state.slideDownValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        })
      ]).start();
    }

  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={this.state.keyboardVerticalOffsetValue}>
        <Container>
          <StatusBar barStyle="light-content" />
          <Content source={require("../../assets/img/login-bg.jpg")} >
            <View style={[{ width: '100%', minHeight: 150, paddingHorizontal: 20, display: [0,2].indexOf(this.state.loginFormOpened)>-1 ? 'flex' : 'none' }, [0,2].indexOf(this.state.loginFormOpened)>-1 ? { position: 'absolute', bottom: 20 } : {}]}>
              <Button title={'CRIAR CONTA'}
                primary width={'100%'}
                radius={'30px'} color={'#f1f1f1'}
                onPress={() => this.props.navigation.navigate('Home')} />

              <Button title={'ENTRAR COM EMAIL'}
                linear width={'100%'}
                radius={'30px'} color={'#f1f1f1'} backgroundColor={'rgba(255,255,255,1)'}
                onPress={() => {
                  this.showLoginForm(true)
                }} />
            </View>

            <AnimatedLogo slideUpLogoValue={this.state.slideUpLogoValue} />

            <Animated.View
              style={{
                transform: [
                  [0,1].indexOf(this.state.loginFormOpened)>-1?{
                    translateY: this.state.slideUpValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [350, 0]
                    })
                  }
                  :{
                    translateY: this.state.slideDownValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 350]
                    })
                  }
                ],
                width: '100%',
                justifyContent: "center",
                position: 'absolute',
                bottom: 0
              }}
            >
              <Form>
                <Text color={'#C82466'} fontSize={'24'} >Usuário:</Text>
                <EditText borderRadius={20} padding={2} backgroundColor={'rgba(33,33,33,0.1)'} color={'#252525'} />
                <Text color={'#C82466'} fontSize={'24'} >Senha:</Text>
                <EditText secureTextEntry borderRadius={20} padding={2} backgroundColor={'rgba(33,33,33,0.1)'} color={'#252525'} />
                <View style={{ marginTop: 20 }}>
                  <Button title={'Entrar'}
                    primary width={'100%'}
                    radius={'30px'} color={'#f1f1f1'}
                    onPress={() => {
                      this.showLoginForm(false)
                    }}
                  />
                </View>
              </Form>
            </Animated.View>

          </Content>
        </Container>
      </KeyboardAvoidingView>
    )
  }
}

export default withNavigation(Login)
