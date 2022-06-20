//задание1

const obj = {
  'Минск': 'Беларусь',
  'Москва': 'Россия',
  'Киев':'Украина'
}
function countryCity() {
  for (key in obj) {
    alert(key + "- это " + obj[key])
  }
}
