import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  BASE: `/api/v3/users`,
  V4: `/api/v4/users`,
}

export default {
  /**
   * Get users information
   * Fetches all users from Amity however lacks support for keywords, filters, sortBy, options
   * By default, filter = all and is sortedBy displayname
   */
  async getUserInformation() {
    return await NetworkClient.execute(
      PATHS.BASE + '?filter=all&sortBy=displayName',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Update/Create user information
   * @param {object} userData - {
   *  "userId",
   *  "displayName",
   *  "metadata",
   *  "description"
   * }
   * @returns {object} amityUser that is created or updated
   */
  async createUser(userData) {
    return await NetworkClient.execute(
      PATHS.BASE,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'PUT',
      userData
    )
  },

  /**
   * Delete user by userId - Currently supports only default settings.
   * - marking user as deleted
   * - marking messages as deleted
   * -
   * @param {*} userId
   * @returns
   */
  async deleteUser(userId) {
    return await NetworkClient.execute(
      PATHS.V4 +
        '/' +
        userId +
        '?deleteAll=false&markMessageDeleted=false&hardDeletePost=false&hardDeleteComment=false',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'DELETE'
    )
  },
}
