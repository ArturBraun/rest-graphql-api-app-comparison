FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock*", "./"]
COPY . .
RUN chown -R node /usr/src/app

RUN yarn install --production --silent
RUN yarn run prisma:generate && yarn run prisma:migrate:prod

EXPOSE 4000
USER node
CMD ["yarn", "start:prod"]
