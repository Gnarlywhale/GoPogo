import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import styles from './Styles/ParamsFormStyle'

export default class ParamsForm extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }


  render () {
    return (
       <View>
       <View style={{ flexDirection:'row'}}>
<FormLabel>Name</FormLabel>
{/* <FormInput onChangeText={}/> */}
<FormInput />
<FormValidationMessage>Error message</FormValidationMessage>
</View>
<View style={{ flexDirection:'row'}}>
<FormLabel>Name</FormLabel>
{/* <FormInput onChangeText={}/> */}
<FormInput />
<FormValidationMessage>Error message</FormValidationMessage>
</View>
</View>
    )
  }
}
