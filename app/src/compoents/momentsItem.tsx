import * as React from "react"
import { Dimensions, Image, TouchableOpacity, StyleSheet, Text, View } from "react-native"

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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 15,
    borderBottomColor: '#eee',
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

  },
  username: {
    fontSize: 18,
    color: '#54688D'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})

const imagesStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 7,
    flexWrap: 'wrap'
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