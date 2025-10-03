export interface Certificate {
    id: string;
    title: string;
    recipientName: string;
    recipientEmail: string;
    issuerName: string;
    issuerId: string;
    organizationId: string;
    issueDate: Date;
    expiryDate?: Date;
    blockchainHash?: string;
    blockchainTx?: string;
    blockchainStatus: 'pending' | 'registered' | 'failed' | null;
    verified: boolean;
    revoked: boolean;
    metadata?: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateCertificateDto {
    title: string;
    recipientName: string;
    recipientEmail: string;
    issuerName: string;
    organizationId?: string;
    issueDate?: Date;
    expiryDate?: Date;
    metadata?: Record<string, unknown>;
    registerBlockchain?: boolean;
}
export interface VerificationResult {
    verified: boolean;
    certificate?: Certificate;
    blockchainVerified?: boolean;
    message: string;
    verificationDate: Date;
}
//# sourceMappingURL=certificate.d.ts.map