FROM 200.0.1.1:5000/node


RUN mkdir /code

WORKDIR /code

COPY . .

EXPOSE 3000

CMD node server.js