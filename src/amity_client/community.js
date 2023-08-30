import NetworkClient from '../utils/networkClient.js'

const PATHS = {
  BASE: `/api/v3/communities`,
  BASEV4: `/api/v4/communities`,
}

export default {
  /**
   * Query communities
   * Missing many param features, this will be updated in the future
   * Currently sorts by lastCreated for now
   * No support for keywords, filters, tags, catergoryId, isDeleted, hasFlag or options
   * @returns {object}
   */
  async getCommunities() {
    return await NetworkClient.execute(
      PATHS.BASE + '?filter=all&sortBy=lastCreated',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Create a community
   * @param {object} data - object should match schema from Amity
   * {
      "displayName": "string",
      "isPublic": true,
      "isOfficial": false,
      "onlyAdminCanPost": false,
      "description": "string",
      "tags": [
        "string"
      ],
      "metadata": {},
      "avatarFileId": "string",
      "userIds": [
        "string"
      ],
      "categoryIds": [
        "string"
      ],
      "isUniqueDisplayName": false,
      "needApprovalOnPostCreation": false
    }
    @returns {object}
   */
  async createCommunity(data) {
    return await NetworkClient.execute(
      PATHS.BASE,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'POST',
      data
    )
  },

  /**
   * Get community by ID
   * @param {communityId} - ID of community
   * @param {isPrivate} - Type of community public/private. Defaults to public if not provided
   * @returns {object}
   */
  async getCommunities(communityId, isPrivate) {
    return await NetworkClient.execute(
      PATHS.BASE + '/' + communityId + '?type=' + isPrivate
        ? 'internal'
        : 'public',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET'
    )
  },

  /**
   * Fetch community users
   * @param {string} communityId - ID of the community
   * @returns
   */
  async getCommunityUsers(communityId) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'GET',
      {
        userIds: [userId],
      }
    )
  },
  /**
   * Add user to community
   * @param {string} communityId - ID of the community
   * @param {string} userId - User Id to add to community
   */
  async addCommunityMember(communityId, userId) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'POST',
      {
        userIds: [userId],
      }
    )
  },

  /**
   * Add users to community
   * @param {string} communityId - ID of the community
   * @param {array} userIds - User Id to add to community
   */
  async addCommunityMembers(communityId, userIds) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'POST',
      {
        userIds: userIds,
      }
    )
  },

  /**
   * Remove users from community
   * @param {string} communityId - ID of the community
   * @param {array} userIds - User Id to add to community
   * @returns
   */
  async removeCommunityMember(communityId, userIds) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users?userIds=' + userIds,
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'DELETE'
    )
  },

  /**
   *  Unbans member from community
   * @param {string} communityId - ID of the community
   * @param {string} userId - User Id to add to community
   * @returns
   */
  async banCommunityMember(communityId, userId) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users/ban',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'PUT',
      { userIds: [userId] }
    )
  },

  /**
   * Unbans member from community
   * @param {string} communityId - ID of the community
   * @param {string} userId - User Id to add to community
   * @returns {object}
   */
  async unbanCommunityMember(communityId, userId) {
    return await NetworkClient.execute(
      PATHS.BASE + communityId + '/users/ban',
      'BEARER',
      'Bearer ' + process.env.AMITY_BEARER_TOKEN,
      'PUT',
      { userIds: [userId] }
    )
  },
}
