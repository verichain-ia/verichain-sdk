try {
  const sdk = require('./dist/index.js');
  console.log('✅ SDK carga correctamente');
  console.log('Version:', sdk.VERSION);
  console.log('Default API URL:', sdk.DEFAULT_API_URL);
  
  const client = sdk.createClient({
    apiUrl: 'http://localhost:4000'
  });
  console.log('✅ Cliente creado:', typeof client);
  console.log('✅ Métodos disponibles:', Object.keys(client));
} catch (error) {
  console.error('❌ Error:', error.message);
}
