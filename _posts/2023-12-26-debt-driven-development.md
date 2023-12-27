---
title: Debt Driven Development
author: Lennard Wolf
layout: post
tags: [programming, programming paradigms]
---

When given a task to fulfill, a (good) developer should put the stated goal
into context with the overall goals of the organization or project.
One important aspect of this is to consider the long-term consequences of
the strategy (or "paradigm") chosen, by which to fulfill the task.

Test Driven Development (TDD) is a popular strategy that is often recommended
as "best practice". Undoubtedly, TDD will lead to a result of much higher
quality than a result that was developed without rhyme or reason, but such a
universally acclaimed paradigm surely has higher standards to meet than just
"better than nothing". But what exactly is it that TDD wants to replace? And
why is that unnamed paradigm the default?
In this article I want to put a name to the default programming paradigm that
projects like TDD want to replace - but first, let's take a step back and
consider why we might need a paradigm in the first place.

When a developer is given a task for which they know all the steps needed to
fulfill it abd how to do them, then the fulfillment will be an automatism. Lets
take an example: A high ranking chess player is given the task to set up the
board for a new game - what would be a good strategy for them to do so?
TDD would have them write out a bunch of tests that check the board for
correctness, put the pieces on the board, and then run the tests.
The correctness would clearly be established, but the player would have wasted
a lot of time. Why? Because they already know how to set up a chess board, and
they know that they know it. They don't need to test it, they just need to do it.
When that same player learned how to set up a chess board, they probably ran
such tests in their head.

Of course, the player could still make a mistake, which is why, for any match
with stakes, there should be an entity that checks the board for correctness -
the human players should play, not check the board.

   "Debt Driven Development",
and I will explain why it is the default, and why it is so hard to replace.

## FizzBuzz

{% comment %}

Principle of Least Astonishment

{% endcomment %}
