import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  GET_AUTH_TOKEN: '/api/v3/authentication/token',
}

export default {
  /**
   * Method for fetching authentication token
   * @param {string} userId - User ID for
   */
  async getAuthenticationToken(userId) {
    return await NetworkClient.execute(
      PATHS.GET_AUTH_TOKEN + `?userId=${userId}`,
      'XSERVERKEY',
      process.env.X_SERVER_KEY,
      'GET',
      null
    )
  },
}
