## This script is intended to be used to build and push the usspaceforce images to docker-hub
## Should be run from the root of this project
docker build --tag trileyschwarz/usspaceforce:latest .
docker push trileyschwarz/usspaceforce:latest
