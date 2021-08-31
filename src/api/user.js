import { url } from '../constants';
import { Platform } from 'react-native';

////////////////////////////////////////////////////////////////////////////
//////////////////////////// Login User ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const loginUser = (email, password) => {
  const method = 'POST';
  const request_url = `${url}/user/login`
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify({ 
    email, 
    password, 
    // device_token: player_id, 
    // lat: lat,
    // lng: lng,
    os: Platform.OS,    
  });
  return fetch(request_url, { method, body, headers})
    .then((res) => res.json());
};

////////////////////////////////////////////////////////////////////////////
/////////////////////// Register Customer //////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const registerCustomer = (user) => {
  const method = "POST";
  const body = JSON.stringify({ 
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    password: user.password,
    gender: user.gender
  });
  const headers = {
    'Content-Type': 'application/json',
  }

  const request_url = `${url}/user/register_customer`;
  console.log(body);
  return fetch(request_url, {method, body, headers})
  .then(response => response.json())
};

