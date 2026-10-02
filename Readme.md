
# Jenkins CI/CD DevOps Demo

## Project Overview

This project demonstrates a basic CI/CD pipeline using Jenkins and Docker.

The pipeline automatically:
1. Checks out the application from GitHub
2. Installs Node.js dependencies
3. Runs application tests
4. Builds a Docker image
5. Deploys the application in a Docker container

## Technologies Used

- Jenkins
- GitHub
- Node.js
- Express.js
- Docker
- JavaScript

## Application

The application is a simple Express.js server.

### Endpoints

- `/` - Displays the application message
- `/health` - Returns the application health status

## Jenkins Pipeline

The Jenkins pipeline contains three main stages:
1. Create New Item using Pipeline
2. In Trigger Poll SCM (H/5 * * * *) to build the project every 5 min to check whether is passed or failure.
3. In Pipeline selecting Script as git then putting the repository link to build the docker images and test the build of the project. 

### Build
Installs project dependencies using:

npm ci


 ## Builds the Docker image and deploys the application:
 docker build -t jenkins-cicd-demo:latest .
docker run -d --name jenkins-cicd-demo -p 3001:3000 jenkins-cicd-demo:latest

# Repository
https://github.com/yash02604/Jenkins-CICD-DevOps.git