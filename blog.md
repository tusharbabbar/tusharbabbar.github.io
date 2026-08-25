---
layout: page
title: Blog
permalink: /blog/
---

Micro blogs about things I'm learning, split into three loose buckets. New posts with `categories: [general]`, `[ideas]`, or `[software]` show up here automatically.

## General Thoughts
{% for post in site.categories.general %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}

## Ideas
{% for post in site.categories.ideas %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}

## Software
{% for post in site.categories.software %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
