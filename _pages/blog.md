---
permalink: /blog
layout: page
title: Blog
---
<div class="home">
  <!-- {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%} -->
  <ul>
    {% for post in site.posts %}
      <li>
        <a href=".{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
