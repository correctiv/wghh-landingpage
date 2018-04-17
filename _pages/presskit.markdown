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
  text: |-
    <iframe src="https://player.vimeo.com/video/263317577" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <br><br>
    <a style="color: #e5007d" href="https://vimeo.com/263317577" target="blank"> Link zum Video</a>
- title: Fotos
  anchor: 4
  text: <a href="/assets/images/wghh-foto1.jpg" target="blank"><img src="/assets/images/wghh-foto1.jpg"></a>
- title: Logo
  anchor: 5
  text: |-
    **Logo**

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo.png" target="blank">wghh-logo.png</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo.svg" target="blank">wghh-logo.svg</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo.ai" target="blank">wghh-logo.ai</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo.pdf" target="blank">wghh-logo.pdf</a>

    **Logo mit Webadresse**

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo-www.png" target="blank">wghh-logo-www.png</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo-www.svg" target="blank">wghh-logo-www.svg</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo-www.ai" target="blank">wghh-logo-www.ai</a>

    <a href="https://wem-gehoert-hamburg.de/wghh/presskit/logo/wghh-logo-www.pdf" target="blank">wghh-logo-www.pdf</a>
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
