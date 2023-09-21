import NetworkClient from '../utils/networkClient.js'
import Session from './session.js'
import Authentication from './authentication.js'

const PATHS = {
  BASE: `/api/v4/`,
  BASEV5: `/api/v5`,
}

function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }

  return randomString
}

export default {
  /**
   * Follow a user
   * @param {string} userId
   * @returns {object}
   */
  async followUser(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/following/' + userId,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'POST'
    )
  },

  /**
   * Unfollow a user
   * @param {string} userId
   * @returns {object}
   */
  async unfollowUser(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/following/' + userId,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'DELETE'
    )
  },

  /**
   * Accept a Follow request
   * @param {string} userId
   * @returns {object}
   */
  async acceptFollowUser(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/followers/' + userId,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'POST'
    )
  },

  /**
   * Decline a Follow request
   * @param {string} userId
   * @returns {object}
   */
  async denyFollowUser(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/followers/' + userId,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'DELETE'
    )
  },

  /**
   * Get my followers list, currently doesn't support status param or limit param default 10
   * @returns {object}
   */
  async getFollowers() {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/followers',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get other follower list, currently doesn't support status param or limit param default 10
   * @param {string} userId - ID of Amity user
   * @returns {object}
   */
  async getUserFollowers(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'users/' + userId + '/followers',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get my following list
   * @returns {object}
   */
  async getFollowerList() {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/following',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get other following list
   * @param {string} userId - ID of Amity user
   * @returns {object}
   */
  async getUserFollowerList(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'users/' + userId + '/following',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get my follow information
   * @returns {object}
   */
  async getFollowInfo() {
    return await NetworkClient.execute(
      PATHS.BASE + 'me/followInfo',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get user follow information
   * @param {string} userId - ID of Amity user
   * @returns {object}
   */
  async getUserFollowInfo(userId) {
    return await NetworkClient.execute(
      PATHS.BASE + 'users' + userId + '/followInfo',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get user follow information
   * @param {string} userId - ID of Amity user
   * @returns {object}
   */
  async getUserFollowInfoV5(userId) {
    return await NetworkClient.execute(
      PATHS.BASEV5 + 'users' + userId + '/followInfo',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Get one user to follow another. SIDE EFFECT - Creates session for baseUserID
   * @param {baseUserId} baseUserId - User who needs to follow another user
   * @param {followId} followId - ID of user baseUserId wants to follow
   */
  async connectUserFollow(baseUserId, followId) {
    const { token } = await Authentication.getAuthenticationToken(baseUserId)
    console.log('Token: ' + token)

    const { accessToken } = await Session.registerSession(
      baseUserId,
      generateRandomString(10),
      token
    )
    console.log('Access Token: ' + accessToken)

    return await NetworkClient.execute(
      PATHS.BASE + `me/following/${followId}`,
      'BEARER',
      'Bearer ' + accessToken,
      'POST'
    )
  },
}
