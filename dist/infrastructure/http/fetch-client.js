"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchHttpClient = void 0;
class FetchHttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    setAuthToken(token) {
        this.authToken = token;
    }
    removeAuthToken() {
        this.authToken = undefined;
    }
    async request(config) {
        const url = this.buildUrl(config.url, config.params);
        const headers = {
            'Content-Type': 'application/json',
            ...config.headers,
        };
        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }
        const response = await fetch(url, {
            method: config.method,
            headers,
            body: config.data ? JSON.stringify(config.data) : undefined,
        });
        const data = await response.json();
        return {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: this.headersToObject(response.headers),
        };
    }
    buildUrl(path, params) {
        const url = new URL(path, this.baseURL);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value));
                }
            });
        }
        return url.toString();
    }
    headersToObject(headers) {
        const obj = {};
        headers.forEach((value, key) => {
            obj[key] = value;
        });
        return obj;
    }
}
exports.FetchHttpClient = FetchHttpClient;
//# sourceMappingURL=fetch-client.js.map