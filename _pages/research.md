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
      <h2> <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2023.0280">Zigzag persistence for coral reef resilience using a stochastic spatial model</a> </h2>
      Published in: <em>Journal of the Royal Society Interface</em>, 2023
      <br /> <br />
      This paper introduces a stochastic spatio-temporal model of coral reef growth. We use zigzag persistence to study different ecological scenarios and demonstrate the applicability of our methods to real coral data.
      <br /> <br />
      Citation: McDonald, R.A., Neuhausler, R., Robinson, M., Larsen, L.G., Harrington, H.A. and Bruna, M., 2023. Zigzag persistence for coral reef resilience using a stochastic spatial model. Journal of the Royal Society Interface, 20(205), p.20230280.
      <br /> <br />      
      <a href="https://arxiv.org/abs/2209.08974"> [arxiv] </a>
      <a href="https://github.com/rmcdomaths/zigzagcoralmodel"> [code] </a>   
  </div>
  <div class="columnR">
        <br /> <br />     
      <img style="height:350px" src="/images/interface.png">
  </div>
</div>

<br />
<br />
<br />

<h1> Projects </h1>

<div class="row">
  <div class="columnL">
      <h2> Max-Plus Algebra for the Optimisation of Urban Transport Networks</h2>
      This project compared transport networks in Rotterdam, London and New York using max-plus (tropical) algebra. 
      <br /> <br />
      Completed as part of the MSc in Mathematical Modelling and Scientific Computing.
      <br /> <br /> 
  </div>
  <div class="columnR">
        <br /> <br />    
      <img style="width:auto;height:200px" src="/images/trains_fig.png">
  </div>
</div>

<br />

<div class="row">
  <div class="columnL">
      <h2> Community detection in complex networks</h2>
      This project investigated methods of partitioning complex networks with multi-node relations.
      <br /> <br />
      Completed as part of the MSc in Mathematical Modelling and Scientific Computing.
      <br /> <br /> 
  </div>
  <div class="columnR">
        <br /> <br />    
      <img style="width:auto;height:150px" src="/images/network_fig.png">
  </div>
</div>

<br />
<br />

<div class="row">
  <div class="columnL">
      <h2> Pattern formation in Reaction-Diffusion systems</h2>
      This project used persistent homology to quantify the different spatial patterns that can arise in reaction-diffusion equations.
      <br /> <br />
      Completed as part of the MSc in Mathematical Modelling and Scientific Computing.
      <br /> <br /> 
  </div>
  <div class="columnR">
        <br /> <br />    
        <div class="inline-block">
        <img style="width:auto;height:125px" src="/images/turing_fig1.png">
        </div>
        <div class="inline-block">
        <img style="width:auto;height:125px" src="/images/turing_fig2.png">
        </div>


  </div>
</div>

<br />
<br />

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
