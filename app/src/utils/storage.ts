import { AsyncStorage } from 'react-native'

export default {
  /**
  * 获取
  */
  get(key:string, cb:Function) {
    return AsyncStorage.getItem(key, (err, object:any) => {
      cb(err, JSON.parse(object));
    })
  },

  /**
  * 保存
  */
  set(key:string, obj:object) {
    return AsyncStorage.setItem(key, JSON.stringify(obj));
  },

  /**
  * 删除
  */
  delete(key:string) {
    return AsyncStorage.removeItem(key);
  },

  /**
  * 清除所有Storage
  */
  clear() {
    AsyncStorage.clear();
  }
}