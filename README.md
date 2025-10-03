# VeriChain SDK

Official TypeScript SDK for VeriChain API - Blockchain Certificate Verification System

## Installation

```bash
npm install @verichain/sdk
```

## Quick Start

```typescript
import { VeriChainClient } from '@verichain/sdk';

// Initialize the client
const client = new VeriChainClient({
  apiUrl: 'https://api.verichain.app'
});

// Login
const loginResult = await client.auth.login({
  email: 'user@example.com',
  password: 'password123'
});

if (loginResult.success) {
  console.log('Logged in successfully');
  // Token is automatically set for future requests
}

// Create a certificate
const certResult = await client.certificates.create({
  title: 'Course Completion Certificate',
  recipientName: 'John Doe',
  recipientEmail: 'john@example.com',
  issuerName: 'Tech University',
  registerBlockchain: true
});

if (certResult.success) {
  console.log('Certificate created:', certResult.data.id);
}

// Verify a certificate
const verifyResult = await client.certificates.verify('CERT-ID-123');

if (verifyResult.success) {
  console.log('Certificate is valid:', verifyResult.data.verified);
}
```

## Features

- **Type-safe**: Full TypeScript support with strict types
- **Clean Architecture**: Domain-driven design with clear separation of concerns
- **Zero Dependencies**: Uses native fetch API, no external dependencies
- **Full API Coverage**: Complete implementation of all VeriChain endpoints
- **Automatic Token Management**: Handles authentication tokens automatically
- **Error Handling**: Comprehensive error handling with typed results
- **Professional Grade**: Production-ready code with enterprise standards

## API Reference

### Authentication

```typescript
// Login
const result = await client.auth.login({
  email: string,
  password: string,
  twoFactorCode?: string
});

// Register
const result = await client.auth.register({
  email: string,
  password: string,
  name: string,
  role?: string
});

// Get Profile
const result = await client.auth.getProfile();

// Logout
const result = await client.auth.logout();
```

### Certificates

```typescript
// List all certificates
const result = await client.certificates.findAll({
  page?: number,
  limit?: number,
  status?: string
});

// Get certificate by ID
const result = await client.certificates.findById(id: string);

// Create new certificate
const result = await client.certificates.create({
  title: string,
  recipientName: string,
  recipientEmail: string,
  issuerName: string,
  registerBlockchain?: boolean
});

// Verify certificate
const result = await client.certificates.verify(id: string);
```

## Error Handling

All methods return a `Result` type that can be either success or error:

```typescript
const result = await client.certificates.create(data);

if (result.success) {
  // Success case
  console.log('Certificate:', result.data);
} else {
  // Error case
  console.error('Error:', result.error.message);
  console.error('Code:', result.error.code);
  console.error('Status:', result.error.statusCode);
}
```

## Configuration

```typescript
const client = new VeriChainClient({
  apiUrl: 'https://api.verichain.app',  // API base URL
  apiKey: 'your-api-key',              // Optional API key
  debug: true                          // Enable debug logging
});
```

## Manual Token Management

```typescript
// Set token manually (e.g., from localStorage)
client.setAuthToken('jwt-token-here');

// Remove token
client.removeAuthToken();
```

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions:

```typescript
import { 
  Certificate, 
  User, 
  Result,
  CreateCertificateDto,
  LoginCredentials 
} from '@verichain/sdk';

// All types are available for use in your application
```

## Requirements

- Node.js 14 or higher
- TypeScript 4.5 or higher (for TypeScript projects)

## License

MIT License

Copyright (c) 2025 VeriChain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Support

- Documentation: https://docs.verichain.app
- API Reference: https://api.verichain.app/api-docs
- Issues: https://github.com/verichain-ia/verichain-sdk/issues
- Email: support@verichain.app

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Changelog

### Version 2.0.0 (2025-10-02)
- Complete rewrite with clean architecture
- TypeScript strict mode
- Zero external dependencies
- Full API coverage
- Professional enterprise-grade code

### Version 1.0.0 (2025-10-02) - Deprecated
- Initial release (deprecated due to type issues)