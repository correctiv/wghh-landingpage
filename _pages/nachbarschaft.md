---
title: Wem gehört Hamburg in Ihrer Nachbarschaft?
permalink: "/nachbarschaft"
page-hidden: true
page-name: nachbarschaft
type: header
image: "/assets/images/wghh-teaser.jpg"
description: Wem gehört Hamburg in Ihrer Nachbarschaft?
hero:
  title: 'Ihre Daten wurden erfolgreich übermittelt. '
  lead: Vielen Dank für Ihre Teilnahme! Als Dankeschön erhalten Sie jetzt einen ersten
    Einblick in die Eigentumsverhältnisse in Ihrer Nachbarschaft.*
  footnote: '* Diese Angaben beziehen sich auf ein Quadrat mit einer Länge von 100x100
    Meter, in dem Ihre Adresse an einer festgelegten Position liegt. Die Daten stammen
    aus dem <a href="https://www.zensus2011.de/SharedDocs/Aktuelles/Ergebnisse/DemografischeGrunddaten.html?nn=3065474"
    target="blank">Zensus 2011</a>. Um Anonymität zu gewährleisten, sind manche Daten
    etwas verfremdet und daher ungenau. Aktuellere und bessere Daten gibt es derzeit
    nicht. Auch deswegen machen wir diese Recherche.'
  error: 'Für einige Gegenden haben wir Daten aus dem Zensus 2011, die grob Auskunft
    über die Eigentumsverhältnisse geben. Im Umkreis Ihrer Adresse haben wir allerdings
    leider keine Daten. Deshalb ist es um so wichtiger, dass Sie gerade zu unserer
    Recherche beigetragen haben. Vielen Dank! Wenn Sie dazu fragen haben, können Sie
    uns gerne kontaktieren: hamburg@correctiv.org'
twitter_text: 'Wir wollen herausfinden, welche Eigentümer die Wohnungskrise in Hamburg
  verschärfen. Jeder kann sich beteiligen auf https://wem-gehoert-hamburg.de #WemGehoertHamburg'
nowrap: true
layout: default
---

<ul class="slides" id="slides-container">
  <li id="slide">
      <div class="content">
          <h2>{{page.hero.title}}</h2>
          <div class="main"><span id="lead">{{page.hero.lead}}</span></div>
          <h3 id="table-header">Im Umkreis von <span id="address"></span>:</h3>
          <div id="main" class="main">
            <p class="results-description">In Ihrer Nachbarschaft haben wir Daten für
              <span id="flats_total"></span> Wohnungen gefunden. Darunter befinden sich:</p>
              <table class="results">
                <tr><td>in Privatbesitz</td><td id="flats_private_owned"></td></tr>
                <tr><td>im Besitz von Wohnungsunternehmen</td><td id="flats_private_company_owned"></td></tr>
                <tr><td>im Besitz von anderen Unternehmen</td><td id="flats_other_private_company_owned"></td></tr>
                <tr><td>im Besitz von Genossenschaften</td><td id="flats_cooperative_owned"></td></tr>
                <tr><td>in städtischem Besitz</td><td id="flats_public_body_owned"></td></tr>
                <tr><td>im Besitz von NGOs oder Kirchen</td><td id="flats_ngo_church_owned"></td></tr>
                <tr><td>in Staatseigentum</td><td id="flats_state_owned"></td></tr>
              </table>
              <div class="footnote"><small>{{page.hero.footnote}}</small></div>
             {% include components/sharing.html %}
              <p><small>Bitte verbreiten Sie dieses Projekt, damit der Wohnungsmarkt transparenter wird</small></p>
          </div>
      </div>
  </li>
</ul>

<script>
function handleResponse(request, street, number) {
      if (request.readyState == 4) {
        if (request.status == 200) {
          var response = JSON.parse(request.responseText);
          if (response.data != null) {
            for (var stat in response.data) {
              var element = document.getElementById(stat);
              if (element) element.innerText = response.data[stat];
            }
            document.getElementById("address").innerText = (street +" "+number);
            return "https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&size=640x640&scale=2&zoom=17&center="+street+number+"HamburgGermany&key=AIzaSyCdGzleqAIZ5HK5ePdemM6MnPz2h-21oCk";
          }
        }
        document.getElementById("lead").style.display = "none";
        document.getElementById("main").innerText = "{{page.hero.error}}";
        document.getElementById("table-header").style.display = "none";
        return "assets/images/Bild2.jpg";
      }
};

function wem() {
    var street = getQueryVariable("street");
    var number = getQueryVariable("nr");
    var wghhXhttp = new XMLHttpRequest();
    wghhXhttp.onreadystatechange = function() {
      var request = this;
      var streetview = handleResponse(request, street, number);
      document.getElementById("slides-container").style.backgroundImage = "url('"+streetview+"')";
    };
    wghhXhttp.open("GET", "https://wghh-census-api.apps.correctiv.org/"+window.location.search, true);
    wghhXhttp.send();
}
wem();

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Search variable %s not found.', variable);
}
</script>
