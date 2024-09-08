let numeroUm = 1
let stringUm = '1'
let numeroDez = 10
let stringDez = '10'
let numeroTrinta = 30
let stringTrinta = '30'

console.log(`\nlet numeroUm = 1 | let stringUm = '1'`)
if (numeroUm == stringUm) {
  console.log(" As variáveis tem os mesmos valores")
  if (numeroUm === stringUm)
    console.log(" As variáveis tem os mesmos tipos")
  else
    console.log(" As variáveis não tem os mesmos tipos")
} else
  console.log(" As variáveis  não tem os mesmos valores")
console.log(`\nlet numeroDez = 10 | let stringDez = '10'`)
if (numeroDez == stringDez) {
  console.log(" As variáveis tem os mesmos valores")
  if (numeroDez === stringDez) console.log("  As variáveis tem os mesmos tipos")
  else
    console.log(" As variáveis não tem os mesmos tipos")
} else
  console.log(" As variáveis  não tem os mesmos valores")
console.log(`\nlet numeroTrinta = 30 | let stringTrinta = '30'`)
if (numeroTrinta == stringTrinta) {
  console.log(" As variáveis tem os mesmos tipos")
  if (numeroTrinta === stringTrinta) console.log("  As variáveis tem os mesmos tipos")
  else
    console.log(" As variáveis não tem os mesmos tipos")
} else
  console.log(" As variáveis  não tem os mesmos valores")

