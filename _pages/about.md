---
permalink: /    
layout: default
title: Home
redirect_from:
    - /home
---
<div id="content">
    <br />
    <br />
    <span>
    My name is Lennard Wolf and I am a programmer working and living in Berlin, Germany.
        <br />
    I am Tech Lead at <a href="https://www.signatrix.com"><i>Signatrix</i></a>, where I contribute to the development of a suite of computer vision applications and the infrastructure around them.
    </span>
    <br />
    <br />
    Professionally, my focus is classic software engineering, as well as creating (infra-)structures to ensure robust processes and/or environments (see my <a href="{{ "/resume" | relative_url }}">CV</a> for more details).
    <i>IRL</i> I prefer spending time with my wife and dog, doing gardening/renovation work, or finding an outlet for my creativity in music, visual art, or audiobook adjacent formats.
    <br />
    <br />
    <h3>
    <!-- <a href="{{ "/posts" | relative_url }}">Recent Posts</a> -->
    Recent Posts
    </h3>

    {% if site.paginate %}
    {% assign posts = paginator.posts %}
    {% else %}
    {% assign posts = site.posts %}
    {% endif %}
    <ul class="list-unstyled m-0">
    {% assign date_format = site.minima_reboot.date_format | default: "%b %-d, %Y" %}
    {% for post in posts %}
    <li class="py-2">
        <span class="text-secondary">{{ post.date | date: date_format }}</span>

        <h4 class="mt-1 mb-4 h4">
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h4>

        <div class="text-justify">
        {{ post.excerpt }}
        </div>
    </li>
    {% endfor %}
    </ul>
    <br />
</div>
