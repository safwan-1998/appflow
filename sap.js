const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });

const appflow = new AWS.Appflow();

const salesforceConnectionConfig = {
    connectorProfileName: 'safwanconnection',
    connectorType: 'SAPOData',
    connectionMode: 'Private',
    connectorProfileConfig: {
        connectorProfileProperties: {
            SAPOData: {
                applicationHostUrl: 'https://privatelink.connectivity.dev.peak.ai',
                applicationServicePath: '/sap/opu/odata/iwfnd/catalogservice;v=2',
                clientNumber: '100',
                portNumber: 443,
                logonLanguage: 'en',
                privateLinkServiceName: 'com.amazonaws.vpce.eu-west-1.vpce-svc-016a950d4588923b8'
            }
        },
        connectorProfileCredentials: {
            SAPOData: {
                basicAuthCredentials: {
                    password: 'Welcome1',
                    username: 'S4H_MM_DEM'
                  },
            },
        }
    }
};

appflow.createConnectorProfile(salesforceConnectionConfig, (err, data) => {
    if (err) {
        console.error('Failed to create a SAP connection:', err);
    } else {
        console.log(data);
        console.log('SAP connection created successfully:', data.connectorProfileArn);
    }
});
