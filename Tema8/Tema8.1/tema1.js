const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const people = [
  { firstName: 'John', lastName: 'Doe', age: 40, city: 'Paris, FR' },
  { firstName: 'Jane', lastName: 'Doe', age: 44, city: 'Bucharest, RO' },
];

const filterPeople = (age, city) => {
  let filtered = people;
  if(age) {
    filtered = filtered.filter(p => p.age == age);
  }
  if(city) {
    filtered = filtered.filter(p => p.city.toLowerCase().startsWith(city.toLowerCase()));
  }
  return filtered;
}

const renderList = (people) => `
  <ul>
    ${people.map(p => `<li>${p.firstName} ${p.lastName} (${p.age} - ${p.city})</li>`).join('')}
  </ul>
  <a href="/add">Add person</a>
`;

app.get('/persoane', function (req, res) {
  const people = filterPeople(req.query.age);
  const html = renderList(people);
  res.send(html);
});

app.get('/persoane/:city', function (req, res) {
  const people = filterPeople(req.query.age, req.params.city);
  const html = renderList(people);
  res.send(html);
});

app.get('/add', function (req, res) {
  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/add', function (req, res) {
  console.log(req.body);
  people.push(req.body);
  res.send(req.body);
});

app.listen(3000);