---
title: Intro to Leaflet
subtitle: Outline
map: false
permalink: /leaflet/index.html
---
This is a basic introduction to the [Leaflet JavaScript API](http://leafletjs.com). The Leaflet homepage also has great [tutorials](http://leafletjs.com/examples.html), and there are many more out on the web. This site and these first set of tutorials was originally created for a workshop at the 2017 [Ohio URISA](https://www.ohurisa.org) GIS Education Series.

<ul class="post-list">
  {% for step in site.leaflet offset:1%}
    <li class="content">
      <h3>
        <a class="post-link" href="{{ step.url | prepend: site.baseurl | remove:'index.html' }}">{{ step.subtitle }}</a>
      </h3>
    </li>
  {% endfor %}
</ul>
