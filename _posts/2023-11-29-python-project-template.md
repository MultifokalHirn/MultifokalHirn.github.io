---
title: [OUTDATED] Python Project Template 
author: Lennard Wolf
layout: post
tags: [python]
---

The `README.md` of the repository is included below:
<div>
    <a href="https://github.com/MultifokalHirn/python_template_repo/actions/workflows/python-checks.yaml"><img
            src="https://github.com/MultifokalHirn/python_template_repo/actions/workflows/python-checks.yaml/badge.svg?branch=main"
            alt="Tests" /></a> <img
        src="https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo"
        alt="GitHub last commit" /> <img
        src="https://img.shields.io/github/issues/MultifokalHirn/python_template_repo"
        alt="GitHub issues" /> <img
        src="https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo"
        alt="GitHub tag (latest SemVer)" />
    <p>This is my personal template repository for python projects containing everything    needed to start developing.</p>
    <br />
    <p><img src="https://img.shields.io/badge/python-&gt;=3.11.0-3776AB?logo=python&amp;logoColor=FFFFFF&amp;style=flat-square"
        alt="py3" /> <img
        src="https://img.shields.io/badge/depedency_manager-pdm-blueviolet?logoColor=FFFFFF&amp;style=flat-square"
        alt="pdm" /> <img
        src="https://img.shields.io/badge/test%20suite-pytest-0A9EDC?logo=pytest&amp;logoColor=FFFFFF&amp;style=flat-square"
        alt="pytest" /> <img
        src="https://img.shields.io/badge/linter-ruff-006400?&amp;style=flat-square"
        alt="ruff" /> <img
        src="https://img.shields.io/badge/typechecker-mypy-blue?&amp;style=flat-square"
        alt="mypy" /></p>
<p><img src="https://img.shields.io/badge/pyproject.toml-000000?logo=python&amp;style=flat-square"
        alt="pyproject" /> <img
        src="https://img.shields.io/badge/.pre--commit--config.yaml-000000?logo=precommit&amp;style=flat-square"
        alt="precommit" /> <img
        src="https://img.shields.io/badge/-.vscode/-000000?logo=visualstudiocode&amp;logoColor=007ACC&amp;style=flat-square"
        alt="visualstudiocode" /> <img
        src="https://img.shields.io/badge/Templates-000000?logo=github&amp;logoColor=FFFFFF&amp;style=flat-square"
        alt="templates" />
    <!-- ![editorconfig](https://img.shields.io/badge/-.editorconfig-000000?logo=editorconfig&style=flat-square) -->
</p>
<p><img src="https://img.shields.io/badge/Makefile-FFFFFF?logo=gnu&amp;logoColor=A42E2B&amp;style=flat-square"
        alt="make" /> <img
        src="https://img.shields.io/badge/Github_Actions-FFFFFF?logo=githubactions&amp;style=flat-square"
        alt="ghactions" /> <img
        src="https://img.shields.io/badge/Conventional%20Commits-FFFFFF?logo=conventionalcommits&amp;style=flat-square"
        alt="conventionalcommits" />
    <!-- ![docker](https://img.shields.io/badge/-Docker-FFFFFF?logo=docker&style=flat-square) -->
    <!-- [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white&style=flat-square)](https://github.com/pre-commit/pre-commit&style=flat-square) -->
    <!-- [![conventional-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg&style=flat-square)](https://conventionalcommits.org&style=flat-square) -->
</p> <!-- - [`pyenv`](./.python-version)-->
<!-- [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) -->
<p><!-- - `semantic-release` for automated versioning and changelog generation -->
    <!-- - `commitizen` for version control and changelog generation --></p>
<!-- omit in toc ## Table of Contents -->
<!--more-->
    <h3 id="quickstart">Quickstart</h3>
<div class="language-bash highlighter-rouge">
    <div class="highlight">
        <pre class="highlight"><code>git clone https://github.com/MultifokalHirn/python_template_repo.git
<span class="nb">cd </span>python_template_repo/

make bootstrap     <span class="c"># sets up virtual environment and installs pdm</span>
make dev           <span class="c"># sets up dev environment and installs dependencies</span>
make ci            <span class="c"># runs formatter, linter, typechecker, and tests</span>
</code></pre>
    </div>  
</div>
<p>See <a href="./CONTRIBUTING.md"><code
            class="language-plaintext highlighter-rouge">CONTRIBUTING.md</code></a> for
    information on how to setup and contribute to this project.</p>
<h3 id="features">Features</h3>
<ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" /><a href="./pyproject.toml"><code
                class="language-plaintext highlighter-rouge">pyproject.toml</code></a> with <a
            href="https://pdm.fming.dev/"><code
                class="language-plaintext highlighter-rouge">pdm</code></a> as dependency
        manager</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Coverage Reporting and automated badge
        generation</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" /><a href="./Makefile"><code
                class="language-plaintext highlighter-rouge">Makefile</code></a> with targets
        for common tasks like setting up the dev environment, running tests, and formatting code
    </li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Dev packages configured out of the box (in
        <a href="./pyproject.toml"><code
                class="language-plaintext highlighter-rouge">pyproject.toml</code></a>)</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" /><code
            class="language-plaintext highlighter-rouge">pre-commit</code> hooks in <a
            href="./.pre-commit-config.yaml"><code
                class="language-plaintext highlighter-rouge">.pre-commit-config.yaml</code></a>
    </li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Templates for <a
            href="./.github/ISSUE_TEMPLATE.md">Issues</a> and <a
            href="./.github/PULL_REQUEST_TEMPLATE.md">PRs</a> on GitHub</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Github Actions for testing and linting</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Dependabot config for automated dependency
        updates</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" checked="checked" />Configuration for VSCode in <a
            href="./.vscode"><code
                class="language-plaintext highlighter-rouge">.vscode/</code></a></li>
</ul>
<h2 id="roadmap">Roadmap</h2>
<h3 id="demo-project">Demo Project</h3>
<ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />create demo project to showcase best practices and features
    </li>
</ul>
<h3 id="improve-documentation">Improve Documentation</h3>
<ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />document project structure</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />document pyenv</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />expand list of tools I have tried and decided against</li>
</ul>
<h3 id="ideas-for-v2-release">Ideas for v2 Release</h3>
<ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up tox for testing with multiple python versions</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up Dockerfile</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />docker-compose for easy setup of dev environment</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up devcontainer</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up commitizen</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up semantic-release</li>
    <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"
            disabled="disabled" />set up github actions for semantic versioning</li>
</ul>
<!-- ### Ideas for the Future - [ ] find out how to sync templates with projects that use them? -->
<h2 id="why-dont-you-use-x">“Why don’t you use X?”</h2>
<blockquote>
    <p>This template is meant to be a starting point for my own projects and may not follow
        other people’s preferred setups.</p>
</blockquote>
<p>Depending on the tool of configuration detail, I either actively decided against something or
    I have not yet tried them.</p>
<p>If you have any suggestions for improvements, or tools to check out, please <a
        href="https://github.com/MultifokalHirn/python_template_repo/issues">file an issue</a>.
</p>
<h3 id="tried-and-decided-against">Tried and Decided Against</h3>
<ul>
    <li><code class="language-plaintext highlighter-rouge">black</code> - I like configuring
        stuff</li>
    <li><code class="language-plaintext highlighter-rouge">flake8</code> - replaced by <code
            class="language-plaintext highlighter-rouge">ruff</code></li>
    <li><code class="language-plaintext highlighter-rouge">autopep8</code> - replaced by <code
            class="language-plaintext highlighter-rouge">ruff</code></li>
    <li><code class="language-plaintext highlighter-rouge">isort</code> - replaced by <code
            class="language-plaintext highlighter-rouge">ruff</code></li>
    <li><code class="language-plaintext highlighter-rouge">poetry</code> - using <code
            class="language-plaintext highlighter-rouge">pdm</code> instead because of bad
        experience with <code class="language-plaintext highlighter-rouge">poetry</code></li>
</ul>
<h3 id="currently-in-evaluation">Currently in Evaluation</h3>
<ul>
    <li><code class="language-plaintext highlighter-rouge">tox</code></li>
    <li><code class="language-plaintext highlighter-rouge">readthedocs</code></li>
</ul>
<h2 id="troubleshooting">Troubleshooting</h2>
<blockquote>
    <p>In this section, you will find some common issues you might encounter and how to resolve
        them. If you are experiencing any issues that are not covered here, please <a
            href="https://github.com/MultifokalHirn/python_template_repo/issues">file an
            issue</a>.</p>
</blockquote>
<h3 id="i-does-not-work-i-tried-everything">I does not work! I tried everything</h3>
<p>Well, have you tried turning it off and on again?</p>
<h2 id="license">License</h2>
<p>This project is authored by Lennard Wolf and open sourced under MIT license, see <a
        href="./LICENSE"><code class="language-plaintext highlighter-rouge">LICENSE</code></a>
    for details.</p>
<p><img src="https://img.shields.io/github/license/MultifokalHirn/python_template_repo"
        alt="License" />
</p>
