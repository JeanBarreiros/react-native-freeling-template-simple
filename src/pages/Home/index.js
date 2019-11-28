import React, { Component } from 'react'
import { StatusBar, SafeAreaView } from "react-native"
import { Container, Text } from '../../styles/themes/dark'
import { withNavigation } from 'react-navigation'
import { Content } from './styles'
import { Button } from "../../components/Button";

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#333333', flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Container>
          <Content>
            <Text>Home</Text>
            <Button
              linear
              primary
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#f1f1f1'}
              title={'Primary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              primary
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#f1f1f1'}
              title={'Primary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              linear
              primary
              width={'100%'}
              height={'45px'}
              color={'#f1f1f1'}
              title={'Primary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              primary
              width={'100%'}
              height={'45px'}
              color={'#f1f1f1'}
              title={'Primary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />

            <Button
              linear
              secondary
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#f1f1f1'}
              title={'Secondary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              secondary
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#252525'}
              title={'Secondary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              linear
              secondary
              width={'100%'}
              height={'45px'}
              color={'#f1f1f1'}
              title={'Secondary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              secondary
              width={'100%'}
              height={'45px'}
              color={'#252525'}
              title={'Secondary'}
              onPress={() => this.props.navigation.navigate('Login')}
            />

            <Button
              linear
              backgroundColor={'rgb(50,100,200)'}
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#f1f1f1'}
              title={'Custom'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              backgroundColor={'rgb(50,100,200)'}
              width={'100%'}
              height={'45px'}
              radius={'10px'}
              color={'#252525'}
              title={'Custom'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              linear
              backgroundColor={'rgb(50,100,200)'}
              width={'100%'}
              height={'45px'}
              color={'#f1f1f1'}
              title={'Custom'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              backgroundColor={'rgb(50,100,200)'}
              width={'100%'}
              height={'45px'}
              color={'#252525'}
              title={'Custom'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </Content>
        </Container>
      </SafeAreaView>
    )
  }
}

export default withNavigation(Home)
