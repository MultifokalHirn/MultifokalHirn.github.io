---
title: Stop calling it "Dependency Inversion"!
description: What Chinese Philosophers and Marxism can teach us about software architecture.
author: Lennard Wolf
layout: post
---

<!-- ### tldr
(First part of my series Dependency Hell)

- Dependency Inversion and Inversion of Control are principles for decoupling software components.
- They are often falsely    
- They are named from the perspective of a structure in need of it

 -->

### What is the Dependency Inversion Principle?

Wikipedia says:
> The principle states:
>
> A. High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
>
> B. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

### What is a Principle?
>
> In object-oriented design, the dependency inversion principle is a specific methodology for loosely coupled software modules. When following this principle, the conventional dependency relationships established from high-level, policy-setting modules to low-level, dependency modules are reversed, thus rendering high-level modules independent of the low-level module implementation details.

...and why is "Dependency Inversion" a Principle and not a Pattern?

Inversion of Control is a pattern, Dependency Inversion is a principle. What is the difference?

it is a principle
it is a methodology

Dependency Injection

The goal of Dependency Injection is to separate the concerns of how a dependency is obtained from the core concerns of a component.
<http://aspiringcraftsman.com/2008/12/28/examining-dependency-inversion/>

### What is a Dependency?

### What is being inverted?

conventional dependency relationships
Right after, the article says:
> [...] this design principle inverts the way **some people may** think about object-oriented programming.

### What?
