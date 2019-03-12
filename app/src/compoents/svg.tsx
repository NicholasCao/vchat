import * as React from "react"
import SvgUri from 'react-native-svg-uri'
import svgs from '../../static/svgs'
interface Props {
  icon: string,
  size: number,
  fill?: string
}

export default class Svg extends React.Component<Props,any> {
  render():React.ReactNode {
    let svgXmlData = svgs[this.props.icon]

    if (!svgXmlData) {
      let err_msg = `没有"${this.props.icon}"`
      throw new Error(err_msg)
    }
    return this.props.fill ? 
    (
      <SvgUri
        width={this.props.size}
        height={this.props.size}
        svgXmlData={svgXmlData}
      />
    ) : (
      <SvgUri
        width={this.props.size}
        height={this.props.size}
        svgXmlData={svgXmlData}
        fill={this.props.fill}
      />
    )
  }
}