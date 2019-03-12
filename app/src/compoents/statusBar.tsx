import * as React from "react"
import { StatusBar } from "react-native"
interface Props {
  message: string,
  isMine: boolean,
  navigation?: any
}
export default class MyStatusBar extends React.Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
    }
  }
  render():React.ReactNode {
    return (
      <StatusBar barStyle={'dark-content'} backgroundColor='#EDEDED' />
    )
  }
}

