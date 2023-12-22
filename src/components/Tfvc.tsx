import * as azdev from "azure-devops-node-api";
import { useEffect, useState } from "react";

const Tfvc = () => {
    const [tfvcClient, setTfcvClient] = useState(null);
    const [tfvcItem, setTfvcItems] = useState(null);

    let projectName = "TfvcTest";
    let scopePath = `$/${projectName}/`;
        
    useEffect(() => {
        async function getTfvcClient() {
            // your collection url
            let orgUrl = "https://dev.azure.com/<org name here>";

            let token = "<token>"; 
            // process.env.AZURE_PERSONAL_ACCESS_TOKEN;         

            let authHandler = azdev.getPersonalAccessTokenHandler(token); 
            let connection = new azdev.WebApi(orgUrl, authHandler);    
            setTfcvClient(await connection.getTfvcApi());
        }

        getTfvcClient();

        if(!tfvcClient) return;

        async function getItems() {
            //let changesets: TfvcChangesetRef[] = await tfvcClient.getChangesets();
            let items = await tfvcClient.getItems(projectName, scopePath)
            setTfvcItems(items);
        }      

        getItems();       
      }, []);
   

    const itempaths = tfvcItem.map(item => {
        return <p>{item.path}</p>
    })

    return <h1>{itempaths}</h1>;
}

export default Tfvc