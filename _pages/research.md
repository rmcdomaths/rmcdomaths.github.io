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

/* Create two equal columns that floats next to each other */
.columnL {
  float: left;
  width: 67%;
}
.columnR {
  float: right;
  width: 33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>

<h1>Two Equal Columns</h1>

<div class="row">
  <div class="columnL" style="background-color:#aaa;">
    {% for post in site.publications reversed %}
      {% include archive-single.html %}
    {% endfor %}
  </div>
  <div class="columnR" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>

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
{% endfor %} --> -->
