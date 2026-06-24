---
layout: page
title: Posts
permalink: /posts/
description: "Complete archive of blog posts: health, lifestyle, education, and tech insights. Find past articles organized chronologically."
---

{% for post in site.posts %}
  {% if post.lang == "en" %}
{{ post.date | date: "%Y-%m-%d" }}&nbsp;
  [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}
