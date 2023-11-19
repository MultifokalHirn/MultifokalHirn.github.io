---
permalink: /    
layout: default
title: Home
redirect_from:
    - /home
---
<br />
Hi, my name is [Lennard Wolf](https://www.linkedin.com/in/lennardwolf/) and I am a Software Engineer from Berlin, currently working as Tech Lead at [*Signatrix*](https://www.signatrix.com).

After receiving my B.Sc in *IT System Engineering* from [Hasso Plattner Institute](https://hpi.de), I was went on to study *Philosophy* at [Humboldt University](https://www.hu-berlin.de/de).
During those studies I met one of the founders of a (back then) very early stage computer vision startup named [Signatrix](https://www.signatrix.com), which I joined as the first non-founding Software Engineer half a year later.

<br />
<h3>
<a href="{{ "/posts" | relative_url }}">Recent Posts</a>
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
