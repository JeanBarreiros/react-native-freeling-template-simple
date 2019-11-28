import React, { Component } from 'react'
import { CustomButton, Label } from './styles'

export class Button extends Component {
  render() {
    return (
      <CustomButton {...this.props}>
      <Label {...this.props}
        color={this.props.color}
      >{this.props.title}</Label>
    </CustomButton>
    )
  }
}

export default Button
