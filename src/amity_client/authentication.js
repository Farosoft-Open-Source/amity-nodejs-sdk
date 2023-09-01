import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  GET_AUTH_TOKEN: '/api/v3/authentication/token',
  POST_AUTH_TOKEN: '/api/v4/authentication/token',
}

export default {
  /**
   * Method for fetching authentication token
   * @param {string} userId - User ID for user
   */
  async getAuthenticationToken(userId) {
    const token = await NetworkClient.execute(
      PATHS.GET_AUTH_TOKEN + `?userId=${userId}`,
      'XSERVERKEY',
      process.env.X_SERVER_KEY,
      'GET',
      null
    )

    return { token: token }
  },

  /**
   * Method for fetching authentication token using post v4 API
   * @param {string} userId - User ID for user
   */
  async getAuthenticationTokenV4(userId) {
    const token = await NetworkClient.execute(
      PATHS.POST_AUTH_TOKEN,
      'XSERVERKEY',
      process.env.X_SERVER_KEY,
      'POST',
      { userId: userId }
    )

    return { token: token }
  },
}
