## Serverless QR Code Generator with Azure Functions, APIs, Blob Storage, Terraform, and Postman

## Tools Used
- Azure Functions: Built and deployed a serverless function for generating QR codes.
- Azure Storage (Blob): Stored generated QR code images in a scalable and cost-effective manner.
- Azure Functions Core Tools: Tested and ran the function locally before deployment.
- Terraform: Automated the provisioning of Azure resources for a consistent and repeatable infrastructure setup.
- JavaScript: Wrote the function logic to handle HTTP requests and generate QR codes dynamically.
- Postman: Tested the HTTP API endpoints of the Azure Function for correct functionality and performance.

[![My Skills](https://skillicons.dev/icons?i=azure,terraform,js,nodejs,git,vscode,github&perline=10)](https://skillicons.dev)


## Description
In this project, I developed a serverless QR code generator using Azure Functions and Azure Blob Storage. The serverless function was written in JavaScript and could be triggered via HTTP requests. It accepts URLs as input, generates QR codes for the provided URLs, and stores the resulting images in Azure Blob Storage for easy retrieval.

To streamline resource provisioning and ensure infrastructure-as-code principles, I used Terraform to deploy and configure all required Azure resources. This included setting up Azure Functions, Blob Storage, and related networking components in a consistent and repeatable manner.

The development process involved creating and testing the function locally using Azure Functions Core Tools, ensuring smooth functionality and debugging before deployment. After testing, I pushed the function to Azure, where it runs in a serverless environment, scaling automatically based on demand. I also used Postman to test the HTTP API endpoints of the deployed Azure Function, ensuring that it handled requests and generated QR codes as expected.
This project demonstrates my ability to build serverless applications leveraging Azure services, automate deployments with Terraform, and write efficient backend code in JavaScript.


## Deployment Workflow 

Local Development with Azure Functions Core Tools:
- Installed and configured Azure Functions Core Tools.
- Created a new function using JavaScript, designed to handle HTTP triggers.
- Tested the function locally by providing sample HTTP requests.

Infrastructure Deployment with Terraform
- Azure Function App.
- Azure Storage Account with a Blob container.
- Applied the Terraform configuration to deploy the infrastructure.
- Verified resource deployment and connectivity.

Pushing Code to Azure Functions
- Deployed the tested function code to Azure using Azure CLI.
- Configured application settings, such as Blob Storage connection strings.

Integration with Azure Blob Storage
- Integrated the function to upload generated QR codes to Blob Storage securely.
- Ensured efficient and secure storage operations.

API Testing with Postman
- Used Postman to test the deployed function's HTTP endpoints.
- Validated that the API correctly generated QR codes for different URLs.
- Performed performance testing and monitored API responses.

## Getting Started
### 1. Clone the Repository

        git clone https://github.com/OLekgetho/Serverless-QR-Code-Generator-in-Azure-using-Azure-Functions-Azure-Storage-and-Terraform..git
        cd Serverless-QR-Code-Generator-in-Azure-using-Azure-Functions-Azure-Storage-and-Terraform

### 2. Install Dependencies

        npm install
        

### 3. Local Configuration

Set up your local.settings.json file with the necessary configuration values:

      {
          "IsEncrypted": false,
          "Values": {
              "AzureWebJobsStorage": "",
              "FUNCTIONS_WORKER_RUNTIME": "node",
      	      "STORAGE_CONNECTION_STRING":"<YOUR_STORAGE_CONNECTION_STRING>"
          }
      }

### 4. Running Locally

To start the function app locally, make sure you have Azure Functions Core Tools installed, then run:

      func start

### 5. Deploy to Azure

Deploy your function app to Azure using the following command:

    func azure functionapp publish <YOUR_FUNCTION_APP_NAME>



## Evidence

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(9).png)


https://ctu.campusmanager.co.za/portal/student-login.php QR Code

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/student-login.php.png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(2).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(1).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(7).png)

https://google.com QR Code

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/google.com(1).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(6).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(5).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(4).png)

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/Serverless%20QR%20Code%20(3).png)

https://microsoft.com QR Code

![Serveless](https://github.com/OLekgetho/Images/blob/main/Serverless%20QR/microsoft.com.png)


## Outcome

The project successfully demonstrates the implementation of a serverless architecture to generate and store QR codes, combined with infrastructure automation using Terraform. 
By leveraging Azure Functions, Blob Storage, Terraform, and Postman, the application ensures high availability, cost efficiency, scalability, and consistent resource deployment.


## Skills Gained
- Serverless Computing: Designing and deploying applications without managing infrastructure.
- Terraform: Automating Azure resource provisioning using infrastructure-as-code principles.
- Azure Functions: Developing and deploying serverless HTTP-triggered functions.
- Azure Blob Storage: Storing and retrieving application assets in a cloud-native manner.
- JavaScript Development: Writing backend logic for serverless applications.
- API Testing: Using Postman to validate and test APIs for functionality and performance.
- Cloud Integration: Seamlessly connecting Azure services for robust application functionality.
