---
title: Recommended Reading for Software Developers
author: Lennard Wolf
layout: post
description: 
tags: listicle
---


## A Little Architecture

[Link](https://blog.cleancoder.com/uncle-bob/2016/01/04/ALittleArchitecture.html)

The blog article "A Little Architecture" from January 4, 2016, discusses the role and misconceptions of a Software Architect. The dialogue begins with a young developer aspiring to become a Software Architect to make decisions about databases, frameworks, and servers. However, the experienced architect clarifies that these are not the crucial aspects of the role. Instead, they emphasize that the architecture should not be overly dependent on specific tools like databases, which are described as merely IO devices with auxiliary features.

The article delves into the Dependency Inversion Principle, explaining that high-level business rules should not depend on low-level implementations like databases. It argues for an architecture where business rules define interfaces for their data needs, promoting the Interface Segregation Principle. This approach allows business rules to be independent of specific database tools, facilitating easier changes and maintenance.

The conversation also touches on Object-Oriented Design, illustrating how dependencies can be managed at compile time, rather than runtime, using Java code examples. The architect argues that important architectural decisions enable deferral of choices like database or web server selection until necessary, focusing on what truly matters and isolating from resource-heavy dependencies.

The article concludes with the young developer struggling to grasp these concepts, implying that a deeper understanding of software architecture may come with experience and an open mind towards these principles.

## Effective Engineering Teams

[Link](https://addyosmani.com/blog/effective-teams/)

The blog article "Effective Engineering Teams," is based on Google's Project Aristotle, which sought to understand what makes a team effective. The project followed the earlier Project Oxygen and was driven by the idea that a team's whole is greater than the sum of its parts. It distinguished between work groups and teams by their level of interdependence and sought to define team effectiveness beyond traditional metrics like code lines or bug fixes.

Key Findings of Project Aristotle:

1. **Psychological Safety**: This emerged as the most crucial factor. It's about the team's comfort in taking risks without fear of negative repercussions, encouraging innovation and learning.
2. **Dependability**: Relates to team members consistently delivering high-quality work on time.
3. **Structure and Clarity**: Involves clear understanding of job roles, processes, and performance consequences.
4. **Meaning**: The personal significance of the work or its outcomes for team members.
5. **Impact**: Belief in one’s work contributing meaningfully to organizational goals.

The study revealed that team success depends less on who is in the team and more on how team members interact. Factors like colocation, consensus-driven decision-making, extroversion, individual performance, workload size, seniority, team size, and tenure did not significantly impact team effectiveness at Google.

The research also led to the development of a reflective survey based on the five key pillars of team effectiveness. This survey serves as a tool for teams to self-assess and initiate discussions on their practices and behaviors.

The article emphasizes the importance of psychological safety, originally defined by Amy Edmondson as a team's confidence to take interpersonal risks. This environment allows team members to feel comfortable expressing their thoughts, leading to innovation and progress.

For managers, fostering psychological safety is critical. It involves treating work as a learning process, admitting mistakes, and being inquisitive. Google has also implemented workshops and scenarios to help understand behaviors that promote or undermine psychological safety.

The article concludes with actionable insights for understanding team dynamics and strategies for leaders and managers to cultivate critical team behaviors. These strategies include encouraging participation, outlining responsibilities, keeping aligned on objectives, recognizing individual contributions, and connecting individual efforts to larger goals. These principles, while derived from Google's research, are applicable across various organizations to enhance team effectiveness.

    - https://www.wiley.com/en-ae/Teaming%3A+How+Organizations+Learn%2C+Innovate%2C+and+Compete+in+the+Knowledge+Economy-p-9780787970932
    - https://web.archive.org/web/20230307221541/https://www.youtube.com/watch?v=LhoLuui9gX8
