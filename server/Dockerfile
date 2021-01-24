# Use an existing docker image as a base
FROM node:14-alpine

WORKDIR /usr/app
# Download and install  a dependency
# RUN apk add --update redis
COPY ./package.json ./
RUN yarn install
COPY ./ ./

# Tell the image what to do when it starts
# as a container

CMD ["npm", "run", "start"]