FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
COPY . .
RUN yarn install --production --silent
RUN yarn run prisma-generate && yarn run prisma-migrate:prod
RUN mv node_modules ../
EXPOSE 4000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start:prod"]
