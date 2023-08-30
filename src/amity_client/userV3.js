import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  BASE: `/api/v3/users`,
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
}
