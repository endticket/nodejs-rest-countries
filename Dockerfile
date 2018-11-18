FROM pasthelod/nodejs


ENV NODE_ENV=production
ENV PORT=5000

RUN mkdir -p /opt/restcountries/resources
ADD ./package.json ./app.js ./utils.js /opt/restcountries/
ADD ./resources /opt/restcountries/resources/

RUN cd /opt/restcountries/ && npm i

CMD /usr/bin/node --harmony /opt/restcountries/app.js

