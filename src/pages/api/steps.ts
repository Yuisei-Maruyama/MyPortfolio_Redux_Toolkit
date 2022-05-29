import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../utils/database'

const useHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req
    switch (method) {
      case 'GET': {
        // Get data from mongodb
        const { db } = await connectToDatabase()
        // INFO: MongoDBのコレクションを指定
        const data = await db.collection('steps').find().toArray() // 連想配列化
        res.status(200).json(data)
        break
      }
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: (err as unknown as { message: string }).message,
    })
  }
}

export default useHandler
