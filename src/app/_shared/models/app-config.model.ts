export interface AppConfig {

    envName: string;
    apiUrl: string;
    authUrl: string;

    appInsights: {
        enable: boolean;
        instrumentationKey: string;
    };

    aad: {
        requireAuth: boolean;
        tenant: string;
        clientId: string;

    };

    mapConfig: {
        provider: string;
        apiKey: string;
    };
}