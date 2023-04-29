// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import { ipRateLimit } from '@/lib/ip-rate-limit'
import { NextRequest } from 'next/server'

export const config = {
    runtime: 'edge',
  }

export default async function handler(
req: NextRequest,
res: NextApiResponse
) {

    const rateLimitRes = await ipRateLimit(req)
    // If the status is not 200 then it has been rate limited.    
    if (rateLimitRes.status !== 200) return rateLimitRes
    return new Response(
        JSON.stringify({
            status: 'success',
            error: null,
            countries: [{"name":"Afghanistan","iso":"AF"},{"name":"Angola","iso":"AO"},{"name":"Argentina","iso":"AR"},{"name":"Armenia","iso":"AM"},{"name":"Australia","iso":"AU"},{"name":"Austria","iso":"AT"},{"name":"Belize","iso":"BZ"},{"name":"Benin","iso":"BJ"},{"name":"Bosnia and Herzegovina","iso":"BA"},{"name":"Botswana","iso":"BW"},{"name":"Brazil","iso":"BR"},{"name":"Bulgaria","iso":"BG"},{"name":"Burkina Faso","iso":"BF"},{"name":"Cambodia","iso":"KH"},{"name":"Cameroon","iso":"CM"},{"name":"Canada","iso":"CA"},{"name":"Chile","iso":"CL"},{"name":"Colombia","iso":"CO"},{"name":"Costa Rica","iso":"CR"},{"name":"Croatia","iso":"HR"},{"name":"Curacao","iso":"CW"},{"name":"Cyprus","iso":"CY"},{"name":"Czech Republic","iso":"CZ"},{"name":"Denmark","iso":"DK"},{"name":"Dominican Republic","iso":"DO"},{"name":"Egypt","iso":"EG"},{"name":"El Salvador","iso":"SV"},{"name":"Estonia","iso":"EE"},{"name":"Finland","iso":"FI"},{"name":"France","iso":"FR"},{"name":"Georgia","iso":"GE"},{"name":"Germany","iso":"DE"},{"name":"Guyana","iso":"GY"},{"name":"Haiti","iso":"HT"},{"name":"Honduras","iso":"HN"},{"name":"Hong Kong","iso":"HK"},{"name":"India","iso":"IN"},{"name":"Indonesia","iso":"ID"},{"name":"Iraq","iso":"IQ"},{"name":"Ireland","iso":"IE"},{"name":"Israel","iso":"IL"},{"name":"Italy","iso":"IT"},{"name":"Jamaica","iso":"JM"},{"name":"Jordan","iso":"JO"},{"name":"Kazakhstan","iso":"KZ"},{"name":"Kenya","iso":"KE"},{"name":"Kyrgyzstan","iso":"KG"},{"name":"Laos","iso":"LA"},{"name":"Latvia","iso":"LV"},{"name":"Lesotho","iso":"LS"},{"name":"Libya","iso":"LY"},{"name":"Lithuania","iso":"LT"},{"name":"Malawi","iso":"MW"},{"name":"Malaysia","iso":"MY"},{"name":"Mali","iso":"ML"},{"name":"Mexico","iso":"MX"},{"name":"Moldova","iso":"MD"},{"name":"Morocco","iso":"MA"},{"name":"Mozambique","iso":"MZ"},{"name":"Myanmar","iso":"MM"},{"name":"Namibia","iso":"NA"},{"name":"Nepal","iso":"NP"},{"name":"Netherlands","iso":"NL"},{"name":"New Caledonia","iso":"NC"},{"name":"New Zealand","iso":"NZ"},{"name":"Niger","iso":"NE"},{"name":"Nigeria","iso":"NG"},{"name":"Norway","iso":"NO"},{"name":"Oman","iso":"OM"},{"name":"Pakistan","iso":"PK"},{"name":"Panama","iso":"PA"},{"name":"Papua New Guinea","iso":"PG"},{"name":"Paraguay","iso":"PY"},{"name":"Philippines","iso":"PH"},{"name":"Poland","iso":"PL"},{"name":"Portugal","iso":"PT"},{"name":"Puerto Rico","iso":"PR"},{"name":"Qatar","iso":"QA"},{"name":"Romania","iso":"RO"},{"name":"Russia","iso":"RU"},{"name":"Rwanda","iso":"RW"},{"name":"Serbia","iso":"RS"},{"name":"Sierra Leone","iso":"SL"},{"name":"Singapore","iso":"SG"},{"name":"Slovakia","iso":"SK"},{"name":"Somalia","iso":"SO"},{"name":"Spain","iso":"ES"},{"name":"Sudan","iso":"SD"},{"name":"Swaziland","iso":"SZ"},{"name":"Sweden","iso":"SE"},{"name":"Syria","iso":"SY"},{"name":"Tajikistan","iso":"TJ"},{"name":"Tanzania","iso":"TZ"},{"name":"Thailand","iso":"TH"},{"name":"Togo","iso":"TG"},{"name":"Tonga","iso":"TO"},{"name":"Trinidad and Tobago","iso":"TT"},{"name":"Tunisia","iso":"TN"},{"name":"Turkey","iso":"TR"},{"name":"UAE","iso":"AE"},{"name":"Uganda","iso":"UG"},{"name":"Ukraine","iso":"UA"},{"name":"United Arab Emirates","iso":"AE"},{"name":"United Kingdom","iso":"UK"},{"name":"United States","iso":"US"},{"name":"Uruguay","iso":"UY"},{"name":"Vietnam","iso":"VN"},{"name":"Zambia","iso":"ZM"},{"name":"Zimbabwe","iso":"ZW"}]
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        }
    )
}
