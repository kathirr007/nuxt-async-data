/* eslint-disable */
export default function ({$axios}) {
  $axios.setHeader('AUTHORISATION', 'Bearer ln123ncoimokmsdfoi')
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
