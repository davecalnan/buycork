import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API =
  'https://api-euwest.graphcms.com/v1/cjm3x3v3y02gt01e5w6j75wrt/master'

export default () => ({
  httpEndpoint: GRAPHCMS_API,
  cache: new InMemoryCache()
})
