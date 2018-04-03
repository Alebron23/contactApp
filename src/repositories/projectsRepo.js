import { apiRequestAsync } from '../utils/fetchData'

export const addContactAsync = async(contactInfo) => { 
  await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact`, { body: contactInfo, method: 'POST' });
}

export const getContactsAsync = async(body) => { 
  const contactList = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/`, { body, method: 'GET' });

  return contactList;
}

export const getContactAsync = async(contactId) => {
  const contact = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/${contactId}`);

  return contact;
}