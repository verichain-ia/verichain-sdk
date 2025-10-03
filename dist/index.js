"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeriChainClient = void 0;
exports.createClient = createClient;
const fetch_client_1 = require("./infrastructure/http/fetch-client");
const certificate_repository_1 = require("./domain/repositories/certificate.repository");
const auth_repository_1 = require("./domain/repositories/auth.repository");
class VeriChainClient {
    constructor(config = {}) {
        const apiUrl = config.apiUrl || 'https://api.verichain.app';
        this.httpClient = new fetch_client_1.FetchHttpClient(apiUrl);
        this.certificates = new certificate_repository_1.CertificateRepository(this.httpClient);
        this.auth = new auth_repository_1.AuthRepository(this.httpClient);
        if (config.apiKey) {
            this.httpClient.setAuthToken(config.apiKey);
        }
    }
    setAuthToken(token) {
        this.httpClient.setAuthToken(token);
    }
    removeAuthToken() {
        this.httpClient.removeAuthToken();
    }
}
exports.VeriChainClient = VeriChainClient;
function createClient(config) {
    return new VeriChainClient(config);
}
// Export types
__exportStar(require("./domain/entities/certificate"), exports);
__exportStar(require("./domain/entities/user"), exports);
__exportStar(require("./domain/entities/result"), exports);
//# sourceMappingURL=index.js.map