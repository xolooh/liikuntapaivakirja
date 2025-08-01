# Liikuntapäiväkirja - Web-sovellus

## Sovelluksen käyttötarkoitus

Liikuntapäiväkirja on yksinkertainen web-sovellus, joka auttaa käyttäjiä seuraamaan heidän treenejään. Sovellus tallentaa käyttäjien lisäykset (harjoitus, kesto ja päivämäärä) ja esittää tiedot visuaalisesti kaavioiden avulla. Sovelluksessa on kolme pääsivua:
1. **Etusivu** - käyttäjä voi lisätä uusia treenejä ja tarkastella treenihistoriaa.
2. **Tilastot** - käyttäjä voi tarkastella treenitietoja visuaalisesti kaavioina ja suodattaa niitä aikarajojen mukaan.
3. **Tietoa** - sivu, jossa kerrotaan sovelluksen toiminnasta ja sen tallentamasta datasta.

## Sovelluksen käyttö

1. **Treeni lisäys:** 
   - Siirry **Etusivulle** ja täytä lomake, jossa voit valita päivämäärän, syöttää harjoituksen nimen ja keston (minuuteissa).
   - Klikkaa **"Lisää treeni"** -painiketta lisätäksesi treenin.
   - Lisätty treeni näkyy treenihistoriassa, ja tiedot tallennetaan selaimen **localStorage**:en, joten ne säilyvät, vaikka sivu ladataan uudelleen.

2. **Treenitilastot:** 
   - Siirry **Tilastot**-sivulle, jossa voit tarkastella kaavioita, jotka näyttävät treenien keston ja harjoitustyypit.
   - Voit myös suodattaa tilastoja valitsemalla aikarajoja (aloitus- ja lopetuspäivämäärä).

3. **Tietoa:** 
   - Siirry **Tietoa**-sivulle saadaksesi lisätietoja sovelluksesta.

## Sovelluksen asennus

1. **Lataa tiedostot:**
   - kloonaa projektin lähdekoodit GitHubista
   
2. **Asennusohjeet:**
   - Avaa projektin kansio selaimessa (kaksoisklikkaa **index.html**-tiedostoa).
   - Sovellus on käyttövalmis paikallisessa ympäristössä!


## Käytetyt teknologiat

- **HTML5** – verkkosivun rakenne
- **CSS3** – ulkoasun muotoilu (Flexbox, responsiivisuus)
- **JavaScript** – interaktiiviset toiminnot ja tiedon hallinta **localStorage**:ssa
- **Chart.js** – kaavioiden luominen tilastot-sivulla

## Lisätiedot ja lähteet

Sovelluksessa käytetyt resurssit:

- [Chart.js - Dokumentaatio](https://www.chartjs.org/docs/latest/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
