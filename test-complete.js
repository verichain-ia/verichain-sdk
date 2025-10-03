const { VeriChainClient } = require('./dist/index.js');

async function testSDK() {
  const client = new VeriChainClient({
    apiUrl: 'https://api.verichain.app'
  });
  
  console.log('SDK v2.0.0 - Módulos disponibles:');
  console.log('- auth:', typeof client.auth);
  console.log('- certificates:', typeof client.certificates);
  console.log('\nMétodos de Auth:');
  console.log('- login:', typeof client.auth.login);
  console.log('- register:', typeof client.auth.register);
  console.log('- getProfile:', typeof client.auth.getProfile);
  console.log('- logout:', typeof client.auth.logout);
  console.log('\nSDK Profesional Completo!');
}

testSDK();
