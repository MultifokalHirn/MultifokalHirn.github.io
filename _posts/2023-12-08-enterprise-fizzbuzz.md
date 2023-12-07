---
title: Preamble to Enterprise FizzBuzz, Dependency Inversion, and Capitalism
author: Lennard Wolf
layout: post
tags: [programming, software architecture, dependency inversion, dependency injection, inversion of control, enterprise fizzbuzz, capitalism]
---

This is a preamble to my series on Enterprise FizzBuzz, Dependency Inversion, and Capitalism. Generally, the series is written for an audience that is likely familiar with the titular topical, but I will still use this preamble to quickly introduce them. I will end this preamble with the questions that I want to answer in the series.
<!--more-->
## FizzBuzz

FizzBuzz is a very simple programming exercise that is often used a sort of litmus test for basic programming ability. The exercise can be solved in various ways, and any given solution may be dead-simple, overcomplicated, or intricate, and can thus be a showcase of one's cleverness, technical skill, and imagination - some have called it the
[Programmer's Stairway to Heaven](https://blog.codinghorror.com/fizzbuzz-the-programmers-stairway-to-heaven/).

The task as defined on [Rosetta Code](https://rosettacode.org/wiki/FizzBuzz):

``` text
Write a program that prints the integers from 1 to 100 (inclusive).

But:
  for multiples of three, print "Fizz" instead of the number;
  for multiples of five, print "Buzz" instead of the number;
  for multiples of both three and five, print "FizzBuzz"  instead of the number.
```

A solution in Python:

``` python
def fizzbuzz() -> None:
    for i in range(1, 101):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz()
```

### Enterprise FizzBuzz

Enterprise FizzBuzz is a joke term poking fun at seemingly overengineered or at least wildly intransparent architectures of large scale organizations, with it's root perhaps in the actual implementation [`FizzBuzzEnterpriseEdition`](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) in *Java*. Just to give you an idea of what I mean, here is the `Main.java` file in which the FizzBuzz is actually executed:

``` java
package com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl.parameters.DefaultFizzBuzzUpperLimitParameter;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.FizzBuzz;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.parameters.FizzBuzzUpperLimitParameter;

/**
 * Main
 */
public final class Main {

    /**
     * @param args
     */
    public static void main(final String[] args) {
        final ApplicationContext context = new ClassPathXmlApplicationContext(Constants.SPRING_XML);
        final FizzBuzz myFizzBuzz = (FizzBuzz) context.getBean(Constants.STANDARD_FIZZ_BUZZ);
        final FizzBuzzUpperLimitParameter fizzBuzzUpperLimit = new DefaultFizzBuzzUpperLimitParameter();
        myFizzBuzz.fizzBuzz(fizzBuzzUpperLimit.obtainUpperLimitValue());

        ((ConfigurableApplicationContext) context).close();

    }

}
```

{% comment %}

Principle of Least Astonishment

{% endcomment %}
