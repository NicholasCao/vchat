import * as React from 'react'
import { StatusBar } from 'react-native'
interface Props {
  color?: string
}
export default class MyStatusBar extends React.Component<Props,any> {
  constructor(props:any) {
    super(props)
    this.state = {
    }
  }
  render():React.ReactNode {
    return (
      <StatusBar barStyle={'dark-content'} backgroundColor={this.props.color ? this.props.color : '#EDEDED'} />
    )
  }
}

