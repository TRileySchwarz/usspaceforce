##  from within ssh into the server
## navigate to project directory
cd ~/usspaceforce/

## stop old container
docker container stop usspaceforce-react

## system prune would remove both containers and images
## but the issue is that deleting unchanged docker images would delete the unchanged prtion of image
## we also need to remove this container or we cant launch one with the same name
docker container rm usspaceforce-react -f

## update new images from docker hub
docker pull trileyschwarz/usspaceforce:latest

## redeploy the container
docker run -p 81:80 --name usspaceforce-react -d trileyschwarz/usspaceforce:latest

## remove old images and any other lingering containers/images not in use
docker system prune -a -f
