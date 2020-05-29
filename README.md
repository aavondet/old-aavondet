# aavondet

My portfolio site made with VueJS! Can be found at www.aavondet.xyz

## Running Locally

Script | Behavior
------------ | -------------
`npm run dev` | Runs a webpack dev server with hot reload on
`npm run build` | Builds for production and prodcues `Bundle.js` in `src/`
`npm run start` | Runs the web app on localhost:8080

## Running on Docker

Script | Behavior
------------ | -------------
`docker build --tag <name> .` | Builds a docker image for production
`docker build --tag <name> -f Dockerfile.dev .` | Builds a docker image for the dev server
`docker run -dp 8080:8080 <name>` | Runs the docker image and you can access the site at localhost:8080
