<!DOCTYPE html>
---
layout: archive
title: 
permalink: /research/
author_profile: true
---
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
.columnL {
  float: left;
  width: 67%;
}
.columnR {
  float: right;
  width: 33%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>
{% for post in site.publications reversed %}
<div class="row">
  <div class="columnL">
      {% include archive-single.html %}
  </div>
  <div class="columnR">
      <img src="/images/profile.jpeg">
  </div>
</div>
{% endfor %}
</body>
</html>



<!-- ---
layout: archive
title: 
permalink: /research/
author_profile: true
---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %} -->
<!-- 
{% include base_path %}

Publications
======
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

Projects
======
{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %} --> 
