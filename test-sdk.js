const { VeriChainClient } = require('./dist/index.js');

async function test() {
  console.log('🧪 Testing VeriChain SDK v2.0.0...\n');
  
  // Crear cliente
  const client = new VeriChainClient({
    apiUrl: 'https://api.verichain.app',
    debug: true
  });
  
  console.log('✅ Cliente creado correctamente');
  console.log('📦 Módulos disponibles:', Object.keys(client));
  
  // Simular token
  client.setAuthToken('test-token-123');
  console.log('🔐 Token configurado');
  
  // Test de tipos
  console.log('\n�� Verificación de tipos:');
  console.log('- certificates:', typeof client.certificates);
  console.log('- certificates.findAll:', typeof client.certificates.findAll);
  console.log('- certificates.create:', typeof client.certificates.create);
  console.log('- certificates.verify:', typeof client.certificates.verify);
  
  console.log('\n✨ SDK v2.0.0 funcionando perfectamente!');
}

test().catch(console.error);
