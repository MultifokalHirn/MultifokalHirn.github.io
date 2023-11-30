---
title: Python Project Template
author: Lennard Wolf
layout: post
content1: >-
    <span data-ty="input">git clone MultifokalHirn/python-project</span>
    <span data-ty="progress">Cloning...</span>
    <span data-ty="input">make bootstrap dev</span>
    <span data-ty>rm -f -r "./.venv"</span>
    <span data-ty>python3 -m venv ./.venv</span>
    <span data-ty>./.venv/bin/python -m pip install --upgrade pip setuptools wheel</span>
    <span data-ty="progress">Installing collected packages: wheel, setuptools</span>
    <span data-ty></span>
    <span data-ty>  ✔ Update python-template-repo 0.0.0+editable -> 0.0.0 successful</span>
    <span data-ty></span>
    <span data-ty>🎉 All complete!</span>
    <span data-ty></span>
    <span data-ty="input">make test</span>
    <span data-ty># Run pytest...</span>
    <span data-ty>./.venv/bin/pytest tests/ -p no:logging -p no:warnings</span>
    <span data-ty>================== test session starts ==================</span>
    <span data-ty>platform darwin -- Python 3.11.6, pytest-7.4.3, pluggy-1.3.0</span>
    <span data-ty>rootdir: /Users/lennardwolf/Documents/Git/python_template_repo</span>
    <span data-ty>plugins: devtools-0.12.2, mypy-0.10.3, cov-4.1.0, xdist-3.3.1</span>
    <span data-ty>collected 0 items</span>
    <span data-ty></span>
    <span data-ty>================== no tests ran in 0.01s ==================</span>
---

<!-- {% highlight python %}
def greet() -> None:
    print("Hello World!")

{% endhighlight %} -->



{% include termynal.html id="content1" content=page.content1 %}
<!-- {% include termynal.html id="content2" content=page.content2 %} -->

