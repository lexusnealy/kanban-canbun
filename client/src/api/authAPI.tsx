import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data =await response.json();
    return data;
  } catch (error){
    console.error('Login failed', error);
    throw error;
  }
  };
  
  // TODO: make a POST request to the login rout



export { login };
