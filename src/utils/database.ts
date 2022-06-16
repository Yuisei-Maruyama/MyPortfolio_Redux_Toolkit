import { MongoClient, Db } from 'mongodb'

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI
const NEXT_PUBLIC_MONGODB_DB = process.env.NEXT_PUBLIC_MONGODB_DB

let cachedClient: MongoClient
let cachedDb: Db

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

if (!NEXT_PUBLIC_MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local')
}

export const connectToDatabase = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(NEXT_PUBLIC_MONGODB_URI)

  const db = await client.db(NEXT_PUBLIC_MONGODB_DB)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
