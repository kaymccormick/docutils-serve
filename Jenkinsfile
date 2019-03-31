pipeline {
    options { timeout(time: 10, unit: 'MINUTES') }
    agent { docker {
    image 'node:latest'
    args '-v /.cache/yarn'
 } }
    stages {
        stage('build') {
            steps {
	        sh 'yarn'
		sh 'yarn grunt'
		sh 'mkdir -p build'
		sh 'tar --exclude node_modules --exclude build --exclude-vcs -zcv . -f build/docutils-serve.tar.gz'
            }
        }
    }
       post {
      always {
      archiveArtifacts artifacts: 'build/*.tar.gz', fingerprint: true
      }
      }

}