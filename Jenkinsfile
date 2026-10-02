pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building the Node.js application...'

                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'

                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'

                script {
                    if (isUnix()) {
                        sh 'docker build -t jenkins-cicd-demo:latest .'
                        sh 'docker rm -f jenkins-cicd-demo || true'
                        sh 'docker run -d --name jenkins-cicd-demo -p 3001:3000 jenkins-cicd-demo:latest'
                    } else {
                        bat 'docker build -t jenkins-cicd-demo:latest .'
                        bat 'docker rm -f jenkins-cicd-demo 2>nul || exit /b 0'
                        bat 'docker run -d --name jenkins-cicd-demo -p 3001:3000 jenkins-cicd-demo:latest'
                    }
                }
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