---
title: presskit
date: 2018-04-17 09:09:00 Z
permalink: "/presskit"
page-hidden: false
type: header
page-name: presskit
presskit:
- title: Pressetext (kurz)
  anchor: 1
  text: "<p>Mehr Transparenz auf dem Immobilienmarkt. Eine informierte Debatte, wie
    die Wohnsituation in Hamburg erschwinglich bleiben kann.</p> <p>Viele Eigentümer
    von Mietwohnungen sind nicht öffentlich. Das betrifft Mieter, die den wahren Eigentümer
    ihrer Wohnung nicht kennen. Von der Intransparenz profitieren auch Firmen, die
    mit Wohnungen handeln oder Mieter ausnutzen.</p> <p>Wir wollen recherchieren,
    ob fragwürdige Firmen ihre Geschäfte in Hamburg machen. Oder ob in Einzelfällen
    Immobilienkäufe zur Geldwäsche genutzt werden. Mit den Recherchen können wir prüfen,
    ob sich Investoren an die Vorgabe halten, Wohnungen zu sozialverträglichen Preisen
    anzubieten.</p> <p>Wir wollen mit dieser Recherche auch die Frage aufwerfen, ob
    die Geheimhaltung der Grundbücher noch zeitgemäß ist. Die Grundbücher der Städte
    und Gemeinden in Deutschland sind nicht vernetzt, nur wenige haben Zugang. Das
    nützt Firmen, die Geschäfte verschleiern wollen.</p> <p>Und wir sind überzeugt,
    dass Transparenz den Bürgern hilft, die Stadt mitzugestalten. Wenn wir wissen,
    wie der Immobilienmarkt funktioniert, können Bürger und Politik besser diskutieren,
    was sich ändern muss, damit Wohnen in Hamburg erschwinglich bleibt und letztlich
    in allen Städten in Deutschland.</p>"
- title: Pressetext (lang)
  anchor: 2
  text: "<p>Mehr Transparenz auf dem Immobilienmarkt. Eine informierte Debatte, wie
    die Wohnsituation in Hamburg erschwinglich bleiben kann.</p> <p>Viele Eigentümer
    von Mietwohnungen sind nicht öffentlich. Das betrifft Mieter, die den wahren Eigentümer
    ihrer Wohnung nicht kennen. Von der Intransparenz profitieren auch Firmen, die
    mit Wohnungen handeln oder Mieter ausnutzen.</p> <p>Wir wollen recherchieren,
    ob fragwürdige Firmen ihre Geschäfte in Hamburg machen. Oder ob in Einzelfällen
    Immobilienkäufe zur Geldwäsche genutzt werden. Mit den Recherchen können wir prüfen,
    ob sich Investoren an die Vorgabe halten, Wohnungen zu sozialverträglichen Preisen
    anzubieten.</p> <p>Wir wollen mit dieser Recherche auch die Frage aufwerfen, ob
    die Geheimhaltung der Grundbücher noch zeitgemäß ist. Die Grundbücher der Städte
    und Gemeinden in Deutschland sind nicht vernetzt, nur wenige haben Zugang. Das
    nützt Firmen, die Geschäfte verschleiern wollen.</p> <p>Und wir sind überzeugt,
    dass Transparenz den Bürgern hilft, die Stadt mitzugestalten. Wenn wir wissen,
    wie der Immobilienmarkt funktioniert, können Bürger und Politik besser diskutieren,
    was sich ändern muss, damit Wohnen in Hamburg erschwinglich bleibt und letztlich
    in allen Städten in Deutschland.</p>"
- title: Videos
  anchor: 3
  text: |
    <iframe src="https://player.vimeo.com/video/263317577" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <br><br>
    Link: [https://vimeo.com/263317577](https://vimeo.com/263317577)
- title: Fotos
  anchor: 4
  text: 
- title: Logo & Grafiken
  anchor: 5
  text: 
wrapped: true
main-classes: presskit
layout: default
---

<div class="accordion">
    <h1>Presskit</h1>
    {% for presskit in page.presskit %}
    <div class="toggle">
        <div class="toggle-title" id="{{ presskit.anchor }}">
            <p><i></i><span class="title-name">{{ presskit.title }}</span></p>
        </div>
        <div class="toggle-inner">
            {{ presskit.text }}
        </div>
    </div>
    {% endfor %}
</div>
