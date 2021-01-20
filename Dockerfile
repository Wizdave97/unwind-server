# Use an existing docker image as a base
FROM node:14-alpine


# Download and install  a dependency
# RUN apk add --update redis
RUN npm install

# Tell the image what to do when it starts
# as a container

CMD ["npm", "start"]