import { createConnection } from 'typeorm'
import { createClient } from 'redis'

const blocklist = createClient({ prefix: 'blocklist-refresh-token:' })
const allowList = createClient({ prefix: 'allowList-refresh-token:' })
export { blocklist, allowList }

createConnection()
