'use strict';

var app = require('koa')(),
    router = require('koa-router')(),
    cors = require('koa-cors'),
    utils = require('./utils'),
    data = {
      hu: utils.formatCountryList(require('./resources/countries-hu')),
      en: utils.formatCountryList(require('./resources/countries-en'))
    },
    locale = utils.getLocale(data);

router
  .get('/countries', function *(next) {
    this.body = {
      meta: {
        status: 200,
        error: false
      },
      data: data[locale(this.query)]
    };

    yield next;
  })
  .get('/countries/:id', function *(next) {
    let countries = data[locale(this.query)];

    this.body = {
      meta: {
        status: 200,
        error: false
      },
      data: countries.filter(function(country) {
        return country.id === this.params.id;
      }.bind(this))
    };

    yield next;
  });

app
  .use(cors({
    methods: ['GET', 'OPTIONS']
  }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3005);
