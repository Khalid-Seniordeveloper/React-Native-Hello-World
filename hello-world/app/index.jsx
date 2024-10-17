import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
        <View>
            
      <View style={{
//   flex  : 1,
  justifyContent : 'center',
  alignItems : 'center',
  backgroundColor : 'green',
  height : '50%'

      }}>
        <Text style={{
            color : 'white',
        }}> hello world</Text>
      </View>
        </View>
    )
  }
}