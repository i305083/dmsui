# Document Management Admin UI with SAP BTP
 - Using Document Management Service, Integration Option in the SAP BTP ABAP Environment

   
[Integrating SAP BTP Document Management Service UI in the Fiori App](https://community.sap.com/t5/technology-blog-posts-by-members/integrating-sap-btp-document-management-service-ui-in-the-fiori-app/ba-p/13460730)

[SAP Document Management Service](https://help.sap.com/docs/document-management-service/sap-document-management-service/what-is-document-management-service)

## 0. Setup Environments

 - Download key from Document Service

![Integrating SAP BTP Document Management Service UI in the Fiori App](./images/image1.png)

 - Add variables to Environments

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image2.png)

``` code
Token URL uaa.url/oauth/token?grant_type=client_credentials

client secret uaa.clientsecret

clientid uaa.clientid

service url endpoints.ecmservice.url/rest/v2/repositories
``` 

## 1. Get Token

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image3.png)

## 2. Creating a Repository

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image4.png)

## 3. Get the Folder ID and Repository ID

 - Now replace the URL: **/rest/v2/repositories** with **/browser** and change the request type to "GET"

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image5.png)

 - Save this response for further usage.

## 4. Create Application router

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image6.png)

## 5. Update xs-app.json in the ui5 app

 - Find the Document Service instance name

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image7.png)

 - Update this name in **requires** and **resources**

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image8.png)

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image9.png)

## 6. Update xs-app.json in the ui5 app

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image10.png)

## 7. add component usage in the manifest.json of the UI5 app

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image11.png)

## 8. APP on BTP

 - Since this need support from BTP Service, I can’t run local test on BAS. So, I just deploy the app to cloud foundry.

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image12.png)

 - Initial Screen

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image13.png)

 - We can create Folder / Document / Link

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image14.png)

 - The upload dialog supports uploading multiple files simultaneously.

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image15.png)

 - Provide Out-of-box in-progress bar and messages.

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image16.png)

 - Provide preview and other functions for the documents.


![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image17.png)

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image18.png)

![Integrating SAP BTP Document Management Service UI in the Fiori App]( ./images/image19.png)
