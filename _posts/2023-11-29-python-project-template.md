---
title: Python Project Template 
author: Lennard Wolf
layout: post
---


![py3](https://img.shields.io/badge/python->=3.8.1%20<=3.12.0-3776AB?logo=python&logoColor=FFFFFF&style=flat-square)
![pdm](https://img.shields.io/badge/depedency_manager-pdm-blueviolet?logoColor=FFFFFF&style=flat-square)
![pytest](https://img.shields.io/badge/test%20suite-pytest-0A9EDC?logo=pytest&logoColor=FFFFFF&style=flat-square)
![ruff](https://img.shields.io/badge/linter-ruff-006400?&style=flat-square)
![mypy](https://img.shields.io/badge/typechecker-mypy-blue?&style=flat-square)

This is [my](https://github.com/MultifokalHirn) personal template for python projects containing everything needed to start developing.

<!--more-->

### Setup

#### Pre-requisites

<!-- <div class="text-justify"> -->

{% highlight bash %}

# clone the repo

mkdir my_new_project && cd my_new_project
git clone <https://github.com/MultifokalHirn/python_template_repo.git> .

# optional: remove the git history to start fresh

rm -rf .git/ && git init

{% endhighlight %}

<!-- </div> -->
<!-- <div class="row text-justify" style="display: flex; flex-direction: row;">
<div class="col-md-4"  style="flex: 1;"> </div>
<div class="col-md-6"  style="flex: 1;">
{% include asciinema.html id="template-project-make" cast="/assets/casts/template-project-make-2.cast" %}
</div>
</div> -->

#### Development Setup

<!-- <div class="row" style="display: flex; flex-direction: row;"> -->
<!-- <div class="col" style="flex: 1;"> -->

{% highlight bash %}

# ensure python3 is installed

python3 --version # should be >= 3.8.1

make bootstrap  

# creates a fresh virtualenv & installs prod requirements

make dev

# this will install all the dev requirements

make test

# this will run all the tests

{% endhighlight %}
<!-- </div> -->

<!-- <div class="col" style="min-width: 0% !important; flex: 1;"> -->
{% include asciinema.html id="template-project-make2" cast="/assets/casts/template-project-make-2.cast" %}
<!-- </div> -->
<!-- </div> -->

### pre-commit hooks

{% highlight bash %}

# install the pre-commit hooks

pre-commit install && pre-commit install --hook-type commit-msg

# run the pre-commit hooks on all files to start with a clean slate

pre-commit run --all-files
{% endhighlight %}

<br />
<br />

### Project Status

[![Tests](https://github.com/MultifokalHirn/python_template_repo/actions/workflows/python-checks.yaml/badge.svg?branch=main)](https://github.com/MultifokalHirn/python_template_repo/actions/workflows/python-checks.yaml)
![GitHub last commit](https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo)
![GitHub issues](https://img.shields.io/github/issues/MultifokalHirn/python_template_repo)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo)
