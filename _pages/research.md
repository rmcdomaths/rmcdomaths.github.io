---
layout: archive
title: 
permalink: /research/
author_profile: true
---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %} -->

{% include base_path %}

Publications
======
{% for post in site.publications reversed %}
  Hello {{"first one"}}
  {% include archive-single.html %}
{% endfor %}

Projects
======
{% for post in site.projects reversed %}
  Hello {{"it's robbo"}}
  {% include archive-single.html %}
{% endfor %}

none