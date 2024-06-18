// api.js

export const sendMessageToApi = async (url, message) => {
    try {
      const response = await fetch(`${url}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait and try again.');
        } else {
          throw new Error('An error occurred. Please try again later.');
        }
      }
  
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message);
    }
  };
  