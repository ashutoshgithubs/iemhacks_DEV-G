FROM node:20

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

ENV REACT_APP_BASE_URL="http://localhost:4000/api/v1"

CMD ["npm", "run", "start"]