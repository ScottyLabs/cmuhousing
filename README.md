## Getting Started

First, make sure you have docker installed

**Installing Docker (Ubuntu/WSL)**

```
sudo apt-get update
sudo apt install docker.io
```
```
$ docker --version
Docker version 26.1.3
```

To make sure docker is set up correctly, try running the hello-world docker image
```
sudo docker run hello-world
```

## Running the app for production
If docker is set up correctly, you can start the app by running run_local.sh
```
chmod a+x ./run_local.sh
./run_local.sh
```
Note you only have to run 'chmod' the first time you run 'run_local'

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the app for development
If you are developing the app, we recommend you run dev_run_local.sh
```
chmod a+x ./dev_run_local.sh
./dev_run_local.sh
```

'dev_run_local' is a wrapper of 'npm run dev' which runs much quicker and allows 
changes to render instantly when saving the project
