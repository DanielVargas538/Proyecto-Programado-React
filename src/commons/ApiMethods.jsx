import { createConsumer } from 'actioncable';

/*const cable = createConsumer('ws://localhost:3000/cable'); 

function subscribeToChannel(channelName, callback) {
  const channel = cable.subscriptions.create(channelName, {
    received(data) {
      callback(data);
    },
  });

  return channel;
}*/

export async function getFetch(path) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`);
  return await response.json();
}

export async function getFetchLogin(path, email, password) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}/${email}/${password}`);
  console.log(`${process.env.REACT_APP_API_URL}/${path}/${email}/${password}`);
  return response.status;
}

export async function postFetch(path, body) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

export async function putFetch(path, body) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

export async function deleteFetch(path) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
    method: 'DELETE',
  });
  return await response.json();
}

/*export function subscribeToOrderChannel(callback) {
  return subscribeToChannel('OrderChannel', callback);
}*/
