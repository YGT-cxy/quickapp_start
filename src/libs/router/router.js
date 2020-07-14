import router from '@system.router'

export default class {
  constructor(fn) {
    this.fn = fn ? fn : null
  }

  /**
   * 跳转到应用内的某个页面
   * @param {Object} uri 需要跳转到的uri
   * @param {Object} params 跳转时需要传递的数据
   */
  push(uri, params) {
    this.fn && this.fn({ type: 'push', uri, params })
    router.push({
      uri,
      params
    })
  }

  /**
   * 跳转到应用内的某个页面，当前页面无法返回
   * @param {Object} uri 需要跳转到的uri
   * @param {Object} params 跳转时需要传递的数据
   */
  replace(uri, params) {
    this.fn && this.fn({ type: 'push', uri, params })
    router.replace({
      uri,
      params
    })
  }

  /**
   * 返回上一个页面
   */
  back() {
    router.back()
  }

  /**
   * 清空所有的历史页面记录，仅保存当前页面
   */
  clear() {
    router.clear()
  }

  /**
   * 获取当前页面栈的页面数量
   */
  getLength() {
    return router.getLength()
  }

  /**
   * 获取当前页面状态
   */
  getState() {
    return router.getStats()
  }
}
