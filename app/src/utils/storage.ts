import { AsyncStorage } from 'react-native'

export default {
  /**
  * 获取
  */
  get(key:string,cb:Function) {
    AsyncStorage.getItem(key, (error, value) => {
      cb(error, value);
    })
  },
  getObject(key:string, cb:Function) {
    return AsyncStorage.getItem(key, (error, object:any) => {
      cb(error, JSON.parse(object));
    })
  },

  /**
  * 保存
  */
  set(key:string, value:string) {
    return AsyncStorage.setItem(key, value);
  },
  setObject(key:string, obj:object) {
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