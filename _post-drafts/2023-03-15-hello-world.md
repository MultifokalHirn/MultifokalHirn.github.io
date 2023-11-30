---
title: Hello World
author: Lennard Wolf
layout: post
content2: >-
    <span data-ty="input">pip install spacy</span>
    <span data-ty="progress"></span>
    <span data-ty>Successfully installed spacy</span>
    <span data-ty></span>
    <span data-ty="input">python -m spacy download en</span>
    <span data-ty="progress"></span>
    <span data-ty>Installed model 'en'</span>
    <span data-ty></span>
    <span data-ty="input">python</span>
    <span data-ty="input" data-ty-prompt=">>>">import spacy</span>
    <span data-ty="input" data-ty-prompt=">>>">nlp = spacy.load('en')</span>
    <span data-ty="input" data-ty-prompt=">>>">doc = nlp(u'Hello world')</span>
    <span data-ty="input" data-ty-prompt=">>>">print([(w.text, w.pos_) for w in doc])</span>
    <span data-ty>[('Hello', 'INTJ'), ('world', 'NOUN')]</span>

content1: >-
    <span data-ty="input">pip install spacy</span>
    <span data-ty="progress"></span>
    <span data-ty>Successfully installed spacy</span>
    <span data-ty></span>
    <span data-ty="input">python -m spacy download en</span>
    <span data-ty="progress"></span>
    <span data-ty>Installed model 'en'</span>
    <span data-ty></span>
    <span data-ty="input">python</span>
    <span data-ty="input" data-ty-prompt=">>>">import spacy</span>
    <span data-ty="input" data-ty-prompt=">>>">nlp = spacy.load('en')</span>
    <span data-ty="input" data-ty-prompt=">>>">doc = nlp(u'Hello world')</span>
    <span data-ty="input" data-ty-prompt=">>>">print([(w.text, w.pos_) for w in doc])</span>
    <span data-ty>[('Hello', 'INTJ'), ('world', 'NOUN')]</span>
---

{% highlight python %}
def greet() -> None:
    print("Hello World!")

{% endhighlight %}



{% include termynal.html id="content1" content=page.content1 %}
<!-- {% include termynal.html id="content2" content=page.content2 %} -->

