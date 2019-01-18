#!/usr/bin/env node

const qs = require('querystring');
const config = require('./config');
const axios = require('axios').create({
  baseURL: 'https://www.barneybrown.com',
  headers: config.defaultHeaders
});

const orderParams = qs.stringify(config.orderParams);
const authParams = qs.stringify({
  email: config.auth.EMAIL,
  password: config.auth.PASSWORD
});

async function orderSandwich() {
  let response = await axios.get('/');
  let cookies = response.headers['set-cookie'].pop();
  axios.defaults.headers['Cookie'] = cookies;

  let authResponse = await axios.post('/myaccount/loginCheck', authParams);
  let authResult = JSON.parse(authResponse.data.trim());

  if (authResult.state !== 'true') {
    throw `Auth error. Message: ${authResult.msg}`;
  }

  let orderResponse = await axios.post('/checkout/place_order', orderParams);
  console.log(orderResponse);
}

orderSandwich();
