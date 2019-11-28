import React, {Component} from 'react'
import { View } from 'react-native'
import { CustomEditText } from './styles'

export class EditText extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: this.props.backgroundColor?this.props.backgroundColor:'rgba(255,255,255,1)',
        padding: this.props.padding?this.props.padding:5,
        borderRadius: this.props.borderRadius?this.props.borderRadius:10,
        minHeight:40
      }}>
        <CustomEditText {...this.props} />
      </View>
    )
  }
}

export default EditText
