#To RUN the application locally, build the image first
docker-compose build

#Check the image ( I should see the image: political_test-app)
docker images

#Deploy the application
docker-compose up

#Application should be available at 
localhost:3000

#How to use the app
#Fill in the form and see which party you belong to

#To view the results stored in the database go to
localhost:3000/results
