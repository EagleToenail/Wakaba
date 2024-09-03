import axios from 'axios';

export const getSetting = async (queries) => {
  try {
    const userId = localStorage.getItem('userId');
    const { data } = await axios.post('/settings',{userId} );

    document.body.classList[data.payload.dark ? 'add' : 'remove']('dark');
    return data.payload;
  } catch (error0) {
    console.error(error0.message);

    return null;
  }
};
