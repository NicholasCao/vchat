import * as React from "react"
import { Dimensions, Image, TouchableOpacity, TouchableHighlight, StyleSheet, Text, View } from "react-native"
import Svg from './svg'
const { width, height } = Dimensions.get('window')

interface Props {
  message: string,
  isMine: boolean,
  navigation?: any
}
export default class MomentsItem extends React.Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      show: false
    }
  }

  renderImageRow(imagesUri:string[], start: number, end: number):React.ReactNode {
    let images:any[] = []
      for (let i = start; i < end; i++) {
        if (i < imagesUri.length){
          images.push (
            <TouchableOpacity key={"image-" + i} activeOpacity={0.6}
            onPress={() => 1}>
              <Image source={require('../../static/moment.jpg')} style={imagesStyles.image}/>
            </TouchableOpacity>
          )
        }
      }
    return (
      <View key={"row-" + (start/3)} style={imagesStyles.imageRow}>
        {images}
      </View>
    )
  }

  renderImages():React.ReactNode {
    let imagesUri = ['../../static/moment.jpg','../../static/moment2.jpg','','']
    let imagesRows = [],
      rowNum = (imagesUri.length === 4 ? 2 : 3)
    //4张图片时 2*2
    for (let i = 0; i < Math.ceil(imagesUri.length / 3); i++){
      imagesRows.push(this.renderImageRow(imagesUri, i * rowNum, (i + 1) * rowNum ))
    }
    return(
      <View style={imagesStyles.container}>
        {imagesRows}
      </View>
    )
  }

  renderLikeAndComment():React.ReactNode {
    return this.state.show ? (
      <View style={styles.bottomBox}>
        <View style={styles.likeContainer}>
          <TouchableHighlight onPress={() => 1} underlayColor={'#282828'}>
            <View style={styles.like}>
              <View style={styles.likeIcon}>
                <Svg icon={'like'} size={20}/>
              </View>
              <Text style={styles.moreText}>Like</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => 1} underlayColor={'#282828'}>
            <View style={styles.comment}>
              <View style={styles.commentIcon}>
                <Svg icon={'comment'} size={18}/>
              </View>
              <Text style={styles.moreText}>Comment</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.tail}></View>
      </View>) : (
      <View style={styles.hide}>
      </View>
    )
  }
  onPressMore():void {
    this.setState((previousState:any) => {
      return { show: !previousState.show };
    });
  }

  render():React.ReactNode {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../../static/avatar.jpg')}/>
        <View style={styles.detail}>
          <Text style={styles.username}>
            Nicholas
          </Text>
          <Text style={styles.text}>
            大家好，我系渣渣辉
          </Text>
          {this.renderImages()}
          <View style={styles.bottomContainer}>
            <Text style={styles.time}>Yesterday</Text>
            {this.renderLikeAndComment()}
            <TouchableHighlight style={{...styles.more, marginLeft: this.state.show?0:'auto'}} 
              onPress={() => this.onPressMore()} 
              underlayColor={'#EEE'}>
              <Svg icon={'more2'} size={22}/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingBottom: 15,
    borderBottomColor: '#EEE',
    borderBottomWidth: .8,
    maxWidth: width,
  },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3
  },
  detail: {
    flex: 1,
    paddingRight: 15
  },
  username: {
    fontSize: 18,
    color: '#54688D'
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    alignSelf: 'flex-start',
    color: '#787878',
    fontSize: 13,
    position: 'relative',
    top: 13
  },
  bottomBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  likeContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    borderRadius: 5,
    marginRight: -2,
    paddingTop: 4,
    paddingBottom: 4
  },
  like: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 10,
    paddingLeft: 25,
    borderRightWidth: 1,
    borderRightColor: '#282828',
  },
  comment: {
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 1,
    paddingRight: 5,
  },
  likeIcon: {
    marginRight: 4,
    position: 'relative',
    top: 2
  },
  commentIcon: {
    marginRight: 4,
    position: 'relative',
    top: 3
  },
  moreText: {
    color: '#FFF',
    fontSize: 16,
  },
  tail: {
    width: 0,
    height: 0,
    borderWidth: 7,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#2F2F2F',
  },
  more: {
    backgroundColor: '#F6F6F6',
    borderRadius: 3,
    paddingLeft: 4,
    paddingRight: 4,
  },
  hide: {
    height: 46,
    width: 200
  }
})

const imagesStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 1,
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: 3
  },
  image: {
    marginRight: 3,
    width: 100,
    height: 100
  }
})