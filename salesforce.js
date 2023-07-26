const Appflow = require("./appflow");

const appflow = new Appflow()

// describe connector.
const describeConntr = {
    connectorTypes: ['SAPOData'],
};
// appflow.describeConnectors(describeConntr);

// describe the connection.
const describeConn = {
    connectorProfileNames: ['sapconn'],
    connectorType: 'SAPOData'
};
// appflow.describeConnection(describeConn);

// list connection entities.
const listEntities = {
    connectorProfileName: 'safwanconnections',
    connectorType: 'Salesforce'
};
// appflow.listConnectionEntities(listEntities);

// describe the entitiy.
const describeEntity = {
    connectorEntityName: 'Participant',
    connectorProfileName: 'safwanconnections',
    connectorType: 'Salesforce'
};
// appflow.describeConnectionEntity(describeEntity);

// appflow.startFlow({ flowName: 'fcd' });

// appflow.describeFlow({ flowName: 'fcd' });

const sourceFlowConfig = {
    connectorType: 'Salesforce',
    connectorProfileName: 'safwanconnections',
    sourceConnectorProperties: {
        Salesforce: {
            object: 'Participant'
        }
    },
}

const triggerConfig = {
    triggerType: 'OnDemand' // On demand is like run once, we can also set to Scheduled.
}

const tasks = [{ sourceFields: [], taskType: 'Map_all' }];

const destinationFlowConfigList = [
    {
        connectorType: 'S3',
        destinationConnectorProperties: {
            S3: {
                bucketName: 'safwan-sap',
            }
        }
    }
]

const commandLineArgs = process.argv.slice(2)

// Define the flow configuration
const flowConfig = {
    flowName: commandLineArgs[0],
    description: 'salesforce',
    triggerConfig,
    sourceFlowConfig,
    tasks,
    destinationFlowConfigList,
};

appflow.createFlow(flowConfig)

const salesforceConnectionConfig = {
    connectorProfileName: 'realconn',
    connectorType: 'Salesforce',
    connectionMode: 'Public',
    connectorProfileConfig: {
        connectorProfileProperties: {
            Salesforce: {
                instanceUrl: 'https://peakai-dev-ed.develop.my.salesforce.com',
                isSandboxEnvironment: false
            }
        },
        connectorProfileCredentials: {
            Salesforce: {
                accessToken: '00D5i00000DURas!AQMAQL1JtdDlTCiRoGpZ_Po4YpyM4pGxr.ZrFegpzNQ8c.WwmSLXkcT45YNNOad0cuWuFxsi46ffy0e4oO2SYc2p_lpPjv9L',
                oAuth2GrantType: 'AUTHORIZATION_CODE',
                refreshToken: '5Aep861ryecz0qkv5ynhoDcsFgXhx303PTTTqoeVAeS51c4_0pXuGb7Dv7YNMkdOAqH.FE2R0XQe.5pBNLkRg9L'
            },
        }
    }
};

// appflow.createConnection(salesforceConnectionConfig);