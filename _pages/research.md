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
  padding: 50;
  vertical-align: bottom;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>

<h1> Publications </h1>

<div class="row">
  <div class="columnL">
      Name1
  </div>
  <div class="columnR">
      <img style="height:300px" src="/images/interface.png">
  </div>
</div>
{% endfor %}

<br />
<br />
<br />

<h1> Projects </h1>

<div class="row">
  <div class="columnL">
      Name
  </div>
  <div class="columnR">
      <img style="height:300px" src="/images/interface.png">
  </div>
</div>
<br />

  <div class="columnL">
      Name
  </div>
  <div class="columnR">
      <img style="height:300px" src="/images/interface.png">
  </div>
</div>


<!-- {% for post in site.projects reversed %}
<div class="row">
  <div class="columnL">
      {% include archive-single.html %}
  </div>
  <div class="columnR">
      <img style="height:300px" src="/images/interface.png">
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
