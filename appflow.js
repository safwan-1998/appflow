const AWS = require('aws-sdk');

class Appflow {
    constructor() {
        AWS.config.update({
            region: 'eu-west-1',
        
        });

        this.appflow = new AWS.Appflow();
    }

    createConnection(params) {
        this.appflow.createConnectorProfile(params, (err, data) => {
            if (err) {
                console.error('Failed to create a connection:', err);
            } else {
                console.log('Connection created successfully:', data);
            }
        });
    }

    describeConnectors(params) {
        this.appflow.describeConnectors(params, (err, data) => {
            if (err) {
                console.error('Failed to describe the connector:', err);
            } else {
                console.log(data.connectorConfigurations.SAPOData)
            }
        });
    }

    describeConnection(params) {
        this.appflow.describeConnectorProfiles(params, (err, data) => {
            if (err) {
                console.error('Failed to describe the connection:', err);
            } else {
                console.log(data.connectorProfileDetails[0]);
            }
        });
    }

    listConnectionEntities(params) {
        this.appflow.listConnectorEntities(params, (err, data) => {
            if (err) {
                console.error('Failed to list connection entities.', err);
            } else {
                console.log(data);
            }
        });
    }

    describeConnectionEntity(params) {
        this.appflow.describeConnectorEntity(params, (err, data) => {
            if (err) {
                console.error('Failed to describe the connection entity', err);
            } else {
                console.log(data.connectorEntityFields);
            }
        });
    }

    createFlow(flowConfig) {
        this.appflow.createFlow(flowConfig, (err, data) => {
            if (err) {
                console.error('Failed to create a flow:', err);
            } else {
                console.log('Flow created successfully:', data.flowArn);
            }
        });
    }

    startFlow(params) {
        this.appflow.startFlow(params, (err, data) => {
            if (err) {
                console.error('Failed to start the flow.', err);
            } else {
                console.log(data)
            }
        });        
    }

    describeFlow(params) {
        this.appflow.describeFlow(params, (err, data) => {
            if (err) {
                console.error('Failed to describe the flow.', err);
            } else {
                console.log(data)
            }
        });        
    }
}

module.exports = Appflow;