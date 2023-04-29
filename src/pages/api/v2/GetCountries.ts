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
            countries: [{"name":"United States","iso":"US"},{"name":"Mexico","iso":"MX"},{"name":"Guadeloupe","iso":"GP"},{"name":"Anguilla","iso":"AI"},{"name":"United Kingdom","iso":"GB"},{"name":"Netherlands","iso":"NL"},{"name":"Russia","iso":"RU"},{"name":"Latvia","iso":"LV"},{"name":"Sweden","iso":"SE"},{"name":"Portugal","iso":"PT"},{"name":"Estonia","iso":"EE"},{"name":"Romania","iso":"RO"},{"name":"Denmark","iso":"DK"},{"name":"Poland","iso":"PL"},{"name":"France","iso":"FR"},{"name":"Germany","iso":"DE"},{"name":"Ukraine","iso":"UA"},{"name":"Ireland","iso":"IE"},{"name":"Serbia","iso":"RS"},{"name":"Lithuania","iso":"LT"},{"name":"Croatia","iso":"HR"},{"name":"Austria","iso":"AT"},{"name":"Belarus","iso":"BY"},{"name":"Spain","iso":"ES"},{"name":"Slovenia","iso":"SI"},{"name":"Belgium","iso":"BE"},{"name":"Bulgaria","iso":"BG"},{"name":"Hungary","iso":"HU"},{"name":"Moldova","iso":"MD"},{"name":"Italy","iso":"IT"},{"name":"Greece","iso":"GR"},{"name":"Iceland","iso":"IS"},{"name":"Slovakia","iso":"SK"},{"name":"Monaco","iso":"MC"},{"name":"Albania","iso":"AL"},{"name":"Finland","iso":"FI"},{"name":"Luxembourg","iso":"LU"},{"name":"Montenegro","iso":"ME"},{"name":"Switzerland","iso":"CH"},{"name":"Norway","iso":"NO"},{"name":"Kazakhstan","iso":"KZ"},{"name":"Indonesia","iso":"ID"},{"name":"Vietnam","iso":"VN"},{"name":"Philippines","iso":"PH"},{"name":"India","iso":"IN"},{"name":"Kyrgyzstan","iso":"KG\r\n"},{"name":"Malaysia","iso":"MY"},{"name":"China","iso":"CN"},{"name":"Kyrgyzstan","iso":"KG"},{"name":"Israel","iso":"IL"},{"name":"Cambodia","iso":"KH"},{"name":"Laos","iso":"LA"},{"name":"Yemen","iso":"YE"},{"name":"Uzbekistan","iso":"UZ"},{"name":"Iraq","iso":"IQ"},{"name":"Thailand","iso":"TH"},{"name":"Taiwan","iso":"TW"},{"name":"Bangladesh","iso":"BD"},{"name":"Turkey","iso":"TR"},{"name":"Pakistan","iso":"PK"},{"name":"Mongolia","iso":"MN"},{"name":"Afghanistan","iso":"AF"},{"name":"Cyprus","iso":"CY"},{"name":"Nepal","iso":"NP"},{"name":"Kuwait","iso":"KW"},{"name":"Oman","iso":"OM"},{"name":"Qatar","iso":"QA"},{"name":"Jordan","iso":"JO"},{"name":"Brunei","iso":"BN"},{"name":"Georgia","iso":"GE"},{"name":"Tajikistan","iso":"TJ"},{"name":"Bahrain","iso":"BH"},{"name":"Armenia","iso":"AM"},{"name":"Lebanon","iso":"LB"},{"name":"Bhutan","iso":"BT"},{"name":"Maldives","iso":"MV"},{"name":"Turkmenistan","iso":"TM"},{"name":"Singapore","iso":"SG"},{"name":"Nigeria","iso":"NG"},{"name":"Kenya","iso":"KE"},{"name":"Tanzania","iso":"TZ"},{"name":"Madagascar","iso":"MG"},{"name":"Egypt","iso":"EG"},{"name":"Gambia","iso":"GM"},{"name":"Morocco","iso":"MA"},{"name":"Ghana","iso":"GH"},{"name":"Cameroon","iso":"CM"},{"name":"Chad","iso":"TD"},{"name":"Algeria","iso":"DZ"},{"name":"Senegal","iso":"SN"},{"name":"Guinea","iso":"GN"},{"name":"Mali","iso":"ML"},{"name":"Ethiopia","iso":"ET"},{"name":"Uganda","iso":"UG"},{"name":"Angola","iso":"AO"},{"name":"Mozambique","iso":"MZ"},{"name":"Tunisia","iso":"TN"},{"name":"Zimbabwe","iso":"ZW"},{"name":"Togo","iso":"TG"},{"name":"Swaziland","iso":"SZ"},{"name":"Mauritania","iso":"MR"},{"name":"Burundi","iso":"BI"},{"name":"Benin","iso":"BJ"},{"name":"Botswana","iso":"BW"},{"name":"Comoros","iso":"KM"},{"name":"Liberia","iso":"LR"},{"name":"Lesotho","iso":"LS"},{"name":"Malawi","iso":"MW"},{"name":"Namibia","iso":"NA"},{"name":"Niger","iso":"NE"},{"name":"Rwanda","iso":"RW"},{"name":"Zambia","iso":"ZM"},{"name":"Somalia","iso":"SO"},{"name":"Gabon","iso":"GA"},{"name":"Mauritius","iso":"MU"},{"name":"Djibouti","iso":"DJ"},{"name":"Eritrea","iso":"ER"},{"name":"Seychelles","iso":"SC"},{"name":"Haiti","iso":"HT"},{"name":"Colombia","iso":"CO"},{"name":"Argentina","iso":"AR"},{"name":"Peru","iso":"PE"},{"name":"Venezuela","iso":"VE"},{"name":"Brazil","iso":"BR"},{"name":"Paraguay","iso":"PY"},{"name":"Bolivia","iso":"BO"},{"name":"Ecuador","iso":"EC"},{"name":"Guyana","iso":"GY"},{"name":"Suriname","iso":"SR"},{"name":"Chile","iso":"CL"},{"name":"Uruguay","iso":"UY"},{"name":"Aruba","iso":"AW"},{"name":"Australia","iso":"AU"},{"name":"Fiji","iso":"FJ"},{"name":"Honduras","iso":"HN"},{"name":"Nicaragua","iso":"NI"},{"name":"Guatemala","iso":"GT"},{"name":"Panama","iso":"PA"},{"name":"Belize","iso":"BZ"},{"name":"Jamaica","iso":"JM"},{"name":"Barbados","iso":"BB"},{"name":"Bahamas","iso":"BS"},{"name":"Dominica","iso":"DM"},{"name":"Grenada","iso":"GD"},{"name":"Montserrat","iso":"MS"}]
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        }
      )
}
