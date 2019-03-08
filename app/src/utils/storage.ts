import { AsyncStorage } from 'react-native'

export default {
  /**
  * 获取
  */
  get(key:string) {
    return AsyncStorage.getItem(key)
  },

  /**
  * 保存
  */
  set(key:string, value:any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
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