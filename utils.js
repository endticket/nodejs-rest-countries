'use strict';

function getLocale(data) {

  return (query) => {
    return query && query.lang && data[query.lang] !== undefined ? query.lang : 'hu';
  };
}

function formatCountryList(countries) {
  let countryList = [];

  for (var id in countries) {
    countryList.push({
      id: id.toLowerCase(),
      name: countries[id]
    });
  }

  return countryList;
}

module.exports = {
  getLocale: getLocale,
  formatCountryList: formatCountryList
};
