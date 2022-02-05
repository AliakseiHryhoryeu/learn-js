import * as $ from 'jquery'
import '@styles/styles.css'

import json from '@assets/json.json'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'

console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)

console.log(json[0])

let list = '';

for (let i in json) {
  const id = Number(i) + 1
  list += '<h2> ' + id + '. ' + json[i].name + '</b></h2>';
  list += '<li>' + 'Company name: <b>' + json[i].name + '</b></li>';
  list += '<li>' + 'Number of employees: <b>' + json[i].numberOfEmployees + '</b></li>';
  list += '<li>' + 'Company rating: <b>' + json[i].rating + '</b></li>';
  list += '<li>' + 'Company CEO: <b>' + json[i].ceo + '</b></li>';
}
console.log('list:', list)

document.getElementById('posts__container').innerHTML += '<ul>' + list + '</ul>';

