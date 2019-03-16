import * as React from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View } from "react-native"
import { withNavigation } from 'react-navigation'

import Svg from './svg'

interface Props {
  title: string,
  backIcon?: boolean,
  noIcon?: boolean,
  morePadding?: boolean,
  navigation?: any
}
class Head extends React.Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
    }
  }
  render():React.ReactNode {
    return (
      <View style={this.props.morePadding ? styles.morePadding :styles.container}>
        {this.props.backIcon ? (
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor={'#BBB'} style={styles.backIcon}>
            <Svg icon={'back'} size={22}/>
          </TouchableHighlight>
        ) : null }
        <Text style={this.props.backIcon ? styles.title : styles.noBackIconTitle}>
          {this.props.title}
        </Text>
        {
          this.props.noIcon ? null :
          (<View style={styles.icons}>
            <TouchableHighlight style={styles.search}>
                <Svg icon={'search'} size={20}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('AddContacts')} underlayColor={'#BBB'} style={styles.add}>
              <Svg icon={'add'} size={22}/>
            </TouchableHighlight>
          </View>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED'
  },
  backIcon: {
    padding: 12
  },
  title: {
    color: '#222',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 12,
  },
  noBackIconTitle: {
    color: '#222',
    fontSize: 18,
    padding: 12,
  },
  icons: {
    marginLeft: 'auto',
    flexDirection: 'row'
  },
  search: {
    padding: 12,
    paddingLeft: 18,
    paddingRight: 18
  },
  add: {
    padding: 12,
    paddingLeft: 18,
    paddingRight: 20
  },
  morePadding: {
    paddingTop: 6,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED'
  }
})

export default withNavigation<Props>(Head)
