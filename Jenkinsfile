pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/SamNotLazy/SPE.git' // Replace with your Git repository URL
        BRANCH = 'main' // Specify the branch you want to build
        MYSQL_ROOT_PASSWORD = 'root_password' // Replace with a secure password
        MYSQL_DATABASE = 'my_database'
        MYSQL_USER = 'my_user'
        MYSQL_PASSWORD = 'user_password'
        MYSQL_PORT = '3306'
        IMAGE_NAME = 'custom-mysql-image'
        SQL_CONTAINER_NAME = 'mysql-container'
        INTEGRITY_TEST_CONTAINER_NAME = 'itestapp-container'
    }

    stages {
        stage('Secure Fetch From Repository') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'gitCred', usernameVariable: 'TEMP_USERNAME', passwordVariable: 'TEMP_PASSWORD')]) {
                        // Set credentials for the Git repository
                        env.USERNAME = env.TEMP_USERNAME
                        env.PASSWORD = env.TEMP_PASSWORD
                    }
                }
                git branch: "${BRANCH}", url: "${GIT_REPO_URL}"
            }
        }

        stage('Maven Build and Frontend Build') {
            steps {
                bat """
                    cd stock-exchange-backend
                    mvn clean package -DskipTests
                    cd ..

                    cd integrityTests
                    mvn clean package -DskipTests
                    cd ..

                    cd stock-exchange-frontend
                    npm install
                    npm run build
                    cd ..
                """
            }
        }


        stage('Docker Image Testing') {
            steps {
                script {
                    echo 'Building and starting Docker containers using docker-compose...'
                    bat """
                    cd stock-exchange-frontend
                                        npm install
                                        npm run build
                                        cd ..
                                        docker-compose up --build -d

                    """

                }
            }
        }

        stage('Verify MySQL Docker Container') {
            steps {
                echo 'Verifying MySQL container...'
                script {
                    def status = bat(script: """
                        wsl docker exec ${SQL_CONTAINER_NAME} mysql -h 127.0.0.1 -u ${MYSQL_USER} -p${MYSQL_PASSWORD} -e 'SHOW DATABASES;'
                    """, returnStatus: true)
                    if (status == 0) {
                        echo 'MySQL container is running and accessible.'
                    } else {
                        echo 'Warning: MySQL connection returned a non-zero status.'
                    }
                }
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockCred', usernameVariable: 'TEMP_USERNAME', passwordVariable: 'TEMP_PASSWORD')]) {
                        env.DOCKER_USERNAME = env.TEMP_USERNAME
                        env.DOCKER_PASSWORD = env.TEMP_PASSWORD
                    }
                    echo 'Logging in to Docker Hub and pushing images...'
                    bat """
                        docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%
                        docker push samnotlazy/mysql:latest
                        docker push samnotlazy/app:latest
                        docker push samnotlazy/backend:latest
                        docker push samnotlazy/frontend:latest
                    """
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running additional tests...'
                // Add test commands here if required
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo 'Deploying application to Minikube...'
                bat "minikube start "
                bat """
                    kubectl apply -f ./k8s/mysql-deployment.yaml
                    kubectl apply -f ./k8s/app-deployment.yaml
                    kubectl apply -f ./k8s/backend-deployment.yaml
                    kubectl apply -f ./k8s/frontend-deployment.yaml
                    kubectl apply -f ./k8s/test-pod-shell.yaml

                """
            }
        }
        stage('Mysql Connectivity Check') {
                    steps {
                        echo 'Testing connection to mysql'

                    }
                }
    }

    post {
        always {
            echo 'Pipeline finished. Cleaning up Docker containers...'
            bat "docker stop ${SQL_CONTAINER_NAME} ${INTEGRITY_TEST_CONTAINER_NAME}"
            bat "docker rm ${SQL_CONTAINER_NAME} ${INTEGRITY_TEST_CONTAINER_NAME}"
            bat "minikube delete"
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
