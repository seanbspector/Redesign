---
layout: layouts/layout.html
pageTitle: Welcome
tags:
  - nav
navTitle: Home
date: 2010-01-01
permalink: /
---

<section>
  
  {% for post in collections.posts %}
  <article>
  {{ post.templateContent }}
  {{ post.date | date: "%Y-%m-%d" }}
  </article>
  {% endfor %}
  
</section>
