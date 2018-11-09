import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API =
  'https://api-euwest.graphcms.com/v1/cjoa4au8i64p401g51uihnrb7/master'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZGFlNjhmODQtNjUwOC00ZjQxLWJkYTAtZTNlN2E4MTgyNmJlIn0.YtBZvnkS_iSXy_ua_REWmC9btopgglKqitcxyNCAdV4'

export default () => ({
  httpEndpoint: GRAPHCMS_API,
  getAuth: () => `Bearer ${token}`,
  cache: new InMemoryCache()
})
