// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import fs from 'fs'
import { ipRateLimit } from '@/lib/ip-rate-limit'
import { NextRequest } from 'next/server'


export default async function handler(
req: NextRequest,
res: NextApiResponse
) {

    const rateLimitRes = await ipRateLimit(req)
    // If the status is not 200 then it has been rate limited.
    if (rateLimitRes.status !== 200) return rateLimitRes

    const fileContents = fs.readFileSync('./data/codes/service_names.json', 'utf8')
    const data = JSON.parse(fileContents)
    const response = {
        'status': 'success',
        'error': null,
        'countries': data
    }
    res.status(200).json(response)
}
