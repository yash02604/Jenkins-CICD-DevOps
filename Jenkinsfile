pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building the Node.js application...'
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t jenkins-cicd-demo:latest .'

                echo 'Deploying Docker container...'
                bat 'docker rm -f jenkins-cicd-demo 2>nul || exit /b 0'
                bat 'docker run -d --name jenkins-cicd-demo -p 3001:3000 jenkins-cicd-demo:latest'
            }
        }
    }

    post {
        success {
            echo 'Jenkins CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins CI/CD pipeline failed.'
        }
    }
}