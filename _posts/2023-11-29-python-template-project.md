---
title: Python Template Project
author: Lennard Wolf
layout: post
icon: fa-lightbulb
---

## Overview

This is a template project for python projects. It is based on my own preferences and experiences. It is not meant to be a one-size-fits-all solution. It is meant to be a starting point for new projects.
## Installation

<div class="row text-justify" style="display: flex; flex-direction: row;">
<div class="col-md-4" style="flex: 1;">

{% highlight bash %}
git clone  # this will create a fresh virtualenv and install all the prod requirements

{% endhighlight %}
</div>

<div class="col-md-6" style="flex: 1;">
{% include asciinema.html id="template-project-make" cast="/assets/casts/template-project-make-2.cast" %}
</div>
</div>

## Make commands

<div class="row" style="display: flex; flex-direction: row;">
<div class="col-md-4" style="flex: 1;">

{% highlight bash %}
# this will create a fresh virtualenv and install all the prod requirements
make bootstrap  
# this will install all the dev requirements
make dev        
# this will run all the tests
make test       

{% endhighlight %}
</div>

<div class="col-md-6" style="flex: 1;">
{% include asciinema.html id="template-project-make2" cast="/assets/casts/template-project-make-2.cast" %}
</div>
</div>
