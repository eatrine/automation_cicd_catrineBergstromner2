pipeline {    
    agent any
    stages {
        stage('Deploy/Build App') {
            steps {
                sh '''
                    echo 'Application deployed successfully!'
                ''' 
            }
        }
         stage('Frontend tests') {
            steps {
               sh '''
                    cd jenkins-pipeline-example2/frontend-project/
                    npm install && npm run test:report:regression                   
                ''' 
                archiveArtifacts allowEmptyArchive: true, artifacts: 'jenkins-pipeline-example2/frontend-project/cypress/videos/**'
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'jenkins-pipeline-example2/frontend-project/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend report', 
                    reportTitles: ''
                ])
            }
        }
         stage('Backend tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
         stage('Performance tests') {
            steps {
                sh '''
                    cd jenkins-pipeline-example2/performance-tests/
                    rm test1.csv -Rf && rm html-reports/ -Rf
                    jmeter2 -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'jenkins-pipeline-example2/performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'JMeter dashboard report', 
                    reportTitles: ''
                ])
            }
        }
    }

}