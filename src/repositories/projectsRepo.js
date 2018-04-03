import { apiRequestAsync } from '../utils/fetchData'

export const addContactAsync = async(contactInfo) => { 
  await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact`, { body: contactInfo, method: 'POST' })
}

export const getContactAsync = async(body) => { 
  const contactList = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/`, { body, method: 'GET' })

  return contactList;
}