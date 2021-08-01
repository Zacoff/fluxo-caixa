import { createClient } from 'redis'
const client = createClient({ prefix: 'blocklist' })
export { client }
