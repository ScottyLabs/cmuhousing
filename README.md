## Alpha Demo

The cmu housing project is hosted at https://cmuhousing.com, however it is currently in alpha and lacks functionality in many regards. Take it as a demo of what the site will appear like, not an MVP. Currently we're on track for an MVP in late October / early November, so check back frequently for updates!

## Getting Started

First, make sure you have docker installed

**Installing Docker (Ubuntu/WSL)**

Follow the most up to date instructions at [Docker's Official Installation Page for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

Or alternatively run the following snippet bellow (from the installation page)

1. Set up Docker's `apt` repository.

   ```bash
   # Add Docker's official GPG key:
   sudo apt-get update
   sudo apt-get install ca-certificates curl
   sudo install -m 0755 -d /etc/apt/keyrings
   sudo curl -fsSL {{% param "download-url-base" %}}/gpg -o /etc/apt/keyrings/docker.asc
   sudo chmod a+r /etc/apt/keyrings/docker.asc

   # Add the repository to Apt sources:
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] {{% param "download-url-base" %}} \
     $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update
   ```

2. Install the Docker packages.
   ```console
   $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

3. Verify that the installation is successful by running the `hello-world` image:

   ```console
   $ sudo docker run hello-world
   ```

   This command downloads a test image and runs it in a container. When the
   container runs, it prints a confirmation message and exits.

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
