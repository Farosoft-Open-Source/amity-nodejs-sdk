import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  BASE: '/api/v3/sessions',
  BASEV4: '/api/v4/sessions',
}

export default {
  /**
   * Register a session in order to connect to socket endpoint to perform sdk operations.
   * @param {string} userId - User ID
   * @param {string} deviceId - Device ID to register user
   * @param {string} authToken - Authentication token wh
   */
  async registerSession(userId, deviceId, authToken) {
    return await NetworkClient.execute(
      PATHS.BASE,
      'APIKEY',
      process.env.AMITY_API_KEY,
      'POST',
      {
        userId: userId,
        deviceId: deviceId,
        authToken: authToken,
      }
    )
  },

  /**
   * Verify access token.
   * @param {string} token - Bearer token created from session
   */
  async verifySessionToken(token) {
    return await NetworkClient.execute(PATHS.BASE, 'BEARER', token, 'GET')
  },

  /**
   * Register a session in order to connect to socket endpoint to perform sdk operations v4.
   * @param {string} userId - User ID
   * @param {string} deviceId - Device ID to register user
   * @param {string} authToken - Authentication token wh
   */
  async registerSessionV4(userId, deviceId, authToken) {
    return await NetworkClient.execute(
      PATHS.BASEV4,
      'APIKEY',
      process.env.AMITY_API_KEY,
      'POST',
      {
        userId: userId,
        deviceId: deviceId,
        authToken: authToken,
      }
    )
  },

  /**
   * Revoke all userId's access token by admin
   * @param {string} userId - User ID to revoke sessions
   * @param {string} token - Admin token to
   */
  async verifySessionToken(userId, token) {
    return await NetworkClient.execute(
      PATHS.BASEV4 + '/' + userId,
      'BEARER',
      token,
      'GET'
    )
  },
}
