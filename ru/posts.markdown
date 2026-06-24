---
layout: page
lang: ru
permalink: /ru/posts/
title: Посты
description: "Полный архив записей блога: здоровье, образ жизни, образование и обзоры технологий. Предыдущие статьи отсортированы в хронологическом порядке."
---

{% for post in site.posts %}
  {% if post.lang == "ru" %}
{{ post.date | date: "%Y-%m-%d" }}&nbsp;
  [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}
