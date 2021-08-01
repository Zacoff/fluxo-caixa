import { createConnection } from 'typeorm'
import { createClient } from 'redis'

const clientRedis = createClient({ prefix: 'blocklist' })
export { clientRedis }

createConnection()
