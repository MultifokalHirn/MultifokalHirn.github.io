<script lang="ts">
	const promptExample = `Write a program that prints the integers from 1 to 100 (inclusive).

But:
  for multiples of three, print "Fizz" instead of the number;
  for multiples of five, print "Buzz" instead of the number;
  for multiples of both three and five, print "FizzBuzz" instead of the number.`;

	const pythonExample = `def fizzbuzz() -> None:
    for i in range(1, 101):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz()`;

	const javaExample = `package com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl.parameters.DefaultFizzBuzzUpperLimitParameter;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.FizzBuzz;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.parameters.FizzBuzzUpperLimitParameter;

public final class Main {

    public static void main(final String[] args) {
        final ApplicationContext context = new ClassPathXmlApplicationContext(Constants.SPRING_XML);
        final FizzBuzz myFizzBuzz = (FizzBuzz) context.getBean(Constants.STANDARD_FIZZ_BUZZ);
        final FizzBuzzUpperLimitParameter fizzBuzzUpperLimit = new DefaultFizzBuzzUpperLimitParameter();
        myFizzBuzz.fizzBuzz(fizzBuzzUpperLimit.obtainUpperLimitValue());

        ((ConfigurableApplicationContext) context).close();
    }
}`;
</script>

<h2>FizzBuzz</h2>

<p>
	FizzBuzz is a very simple programming exercise that is often used as a litmus test for basic
	programming ability. The exercise can be solved in various ways, and any given solution may be
	dead-simple, overcomplicated, or intricate, and can thus showcase cleverness, technical skill, and
	imagination. Some have even called it the
	<a href="https://blog.codinghorror.com/fizzbuzz-the-programmers-stairway-to-heaven/"
		><em>Programmer's Stairway to Heaven</em></a
	>.
</p>

<p><a href="https://rosettacode.org/wiki/FizzBuzz">Rosetta Code</a> defines it as follows:</p>

<pre><code>{promptExample}</code></pre>

<p>A solution in Python:</p>

<pre><code>{pythonExample}</code></pre>

<h3>Enterprise FizzBuzz</h3>

<p>
	Enterprise FizzBuzz is a joke term poking fun at seemingly overengineered or wildly intransparent
	architectures in large organizations, with one well-known example being the Java project
	<a href="https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition"
		>FizzBuzzEnterpriseEdition</a
	>.
</p>

<p>Just to give you an idea, here is the <code>Main.java</code> file that runs it:</p>

<pre><code>{javaExample}</code></pre>

<h2>Dependency Inversion</h2>

<p>
	In object-oriented design, the dependency inversion principle is a specific methodology for
	loosely coupled software modules. When following this principle, the conventional dependency
	relationship from high-level policy-setting modules to low-level dependency modules is reversed,
	which makes high-level modules independent of implementation details.
</p>

<p><code>TODO</code></p>

<h2>Capitalism</h2>

<p><code>TODO</code></p>
