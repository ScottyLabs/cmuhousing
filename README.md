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

Then, if docker is set up correctly, you can start the app by running run_local.sh
```
chmod a+x ./run_local.sh
./run_local.sh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
