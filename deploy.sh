!#bin/bash
yes | docker container prune
docker-compose down
sleep 1
docker-compose build --no-cache
sleep 1
if [ $? -eq 0 ]; then
   echo "Image successfully built!"
   sleep 1
   echo "Runnign the app..."
   docker-compose up
   sleep 1
   if  [ $? -eq 0 ]; then
   docker-compose down
   sleep 1
   else
      echo "Something went wrong..."
      sleep 1
   fi
else
   echo "something went wrong with the built..."
   sleep 1
fi


