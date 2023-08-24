import NetworkClient from '../utils/networkClient'

export default {
  async call(path, headerType, headerData, method, data) {
    await NetworkClient.execute(path, headerType, headerData, method, data)
  },
}
