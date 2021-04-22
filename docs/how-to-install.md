Developer settings > GitHub Apps
![](./images/how-to-install01.png)

[New GitHub App]
![](./images/how-to-install02.png)

Enter [GitHub App name] and [Homepage URL]
![](./images/how-to-install03.png)

Disable Webhook [Active]
![](./images/how-to-install04.png)

Add Repository permissions

* Contents: Read & write
* Metadata: Read-only
* Pull requests: Read-only

![](./images/how-to-install05.png)
![](./images/how-to-install06.png)
![](./images/how-to-install07.png)

Select [Only on this account]
Click [Create GitHub App]
![](./images/how-to-install08.png)

Copy [App ID]
![](./images/how-to-install09.png)

[Generate a private key]
![](./images/how-to-install10.png)

Move to [Install App] section
Click [Install]
![](./images/how-to-install11.png)

Enable [Only select repositories] option and select your blog repository.

![](./images/how-to-install12.png)

Move to your blog repository settings.

![](./images/how-to-install13.png)

Click [New repository secret] and add following secrets:

* APP_ID: App ID of created GitHub App
* PRIVATE_KEY: Private key of created GitHub App
* AZURE_STORAGE_CONNECTION_STRING: Connection string for Azure Blob Storage

![](./images/how-to-install14.png)
