import { AmityClient } from '../index.js'
import assert from 'assert'

var testUser = {}

describe('Authorization API TEST', function () {
  before(async () => {
    testUser = await AmityClient.UserV3.createUser({
      displayName: 'testUser1',
      userId: generateRandomString(10),
      metadata: {},
      description: 'test user',
    })
  })

  describe('Authorization API TEST', function () {
    it('getting basic token V3', async function () {
      const token = await AmityClient.Authentication.getAuthenticationToken(
        testUser.userId
      )
      assert.ok(token.hasOwnProperty('token'))
    })

    it('getting basic token V4', async function () {
      const token = await AmityClient.Authentication.getAuthenticationTokenV4(
        testUser.userId
      )
      assert.ok(token.hasOwnProperty('token'))
    })
  })

  after(async () => {
    await AmityClient.UserV3.deleteUser(testUser.users[0].userId)
  })
})

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
