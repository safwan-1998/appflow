// const AWS = require('aws-sdk');

// AWS.config.update({ region: 'eu-west-1' });

// // Create an instance of the AWS AppFlow client
// const appflow = new AWS.Appflow();

// // Fetch the project ID
// async function fetchProjectId() {
//   try {
//     const listFlowResponse = await appflow.listFlows().promise();
//     const flows = listFlowResponse.flows;
// console.log(flows);
//     // Assuming you have at least one flow in the project
//     if (flows.length > 0) {
//       const projectId = flows[0].destinationFlowConfig.flowName.split('/')[0];
//       console.log('Project ID:', projectId);
//     } else {
//       console.log('No flows found in the project.');
//     }
//   } catch (error) {
//     console.error('Error fetching project ID:', error);
//   }
// }

// // Call the function to fetch the project ID
// fetchProjectId();

// Install the required dependencies using npm or yarn
// npm install appflow-sdk

const axios = require('axios');

// Set up your authentication credentials
const apiKey = 'YOUR_API_KEY';
const projectId = 'YOUR_PROJECT_ID';

// Fetch and preview the data nodes
async function previewDataNodes() {
  try {
    const url = `https://api.appflow.amazonaws.com/v1/projects/1233/datanodes`;

    // Make the API request
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dataNodes = response.data.dataNodes;

    // Display the data nodes
    dataNodes.forEach((node) => {
      console.log('Data Node:');
      console.log(`Name: ${node.name}`);
      console.log(`Type: ${node.type}`);
      console.log(`Fields: ${JSON.stringify(node.fields)}`);
      console.log('-----------------------------');
    });
  } catch (error) {
    console.error('Error fetching data nodes:', error);
  }
}

// Call the function to preview the data nodes
previewDataNodes();

