import axios from 'axios'

export const apiRequestAsync = async(path, options = {}) => {
  const method = options.method || 'GET'
  const headers = { 'X-Auth-Token': 'M94Ga2btxEXc3qQdE9BbndBBkpHRrmpQrFGxx2K0' }
  const body = JSON.stringify(options.body)

  if (body) {
    headers['Content-Type'] = 'application/json'
  }

  try {
    const res = await axios({
      method,
      url: path,
      data: body,
      headers
    })

    let obj = {}

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)

    newError.response = error.response
    alert(newError)
  }
}