# cerulean-drupal

### React

`npm start` to get the app running at `localhost:3000`

### Image Conventions

1. Slideshow and Recipe uses 3x2
2. FancyCard squares 1, 2, 3 use 1x1
3. FancyCard square 4 uses 2x1
4. Card uses 3x4

### DevOps Stuff

#### Add custom domain to Google Compute Engine project

Select `Cloud DNS` under `Network Services` and create a zone. 

Next, update the NS record of your domain name at your domain registrar. 
Then add an A record and a CNAME record in Cloud DNS of GCP

#### Setting up deployment pipeline

1. Follow the link to install Google Cloud SDK https://cloud.google.com/sdk/
2. I moved the google-cloud-sdk dir to the project root dir
3. Install google-cloud-sdk: `./google-cloud-sdk/install.sh`
4. Initialize it in the cerulean-react directory and follow the prompt: 
	`cd cerulean-react`
	`gcloud init`
5. Create an `app.yaml` file in `cerulean-react` for GCP to understand in order to deploy.

#### Deploying app to GCP

1. `gcloud app deploy` to create a build in `Cloud Build`
2. `gcloud app browse` to view the app running

#### Creating a Build Trigger 

TODO 

#### Specifying domain name for deployed app

TODO

#### Resolving cross origin requests for Drupal to talk to React app

TODO
