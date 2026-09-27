---
layout: about
title: Home
permalink: /
subtitle: >
  Assistant Professor,
  <a href="https://wsai.iitm.ac.in" target="_blank">
  Dept. of Data Science and AI</a> · <a href="https://www.iitm.ac.in/" target="_blank">
  IIT Madras</a> 

profile:
  align: left
  image: profile.png
  image_circular: false

news: false
announcements:
  enabled: false
news_limit: 6
selected_papers: true
social: false
---

<!-- **Assistant Professor,**
[Department of Data Science and AI](https://wsai.iitm.ac.in)
at [IIT Madras](https://www.iitm.ac.in) -->

Leading the
[Artificial Perception X (APX) Lab](https://apx-lab.github.io),
working on **computer vision**, **deep learning**,
**image processing**, and **machine learning**.

Previously, I was an Assistant Research Scientist under the guidance of [Dr. Rama Chellappa](https://engineering.jhu.edu/ece/faculty/rama-chellappa/) at [Johns Hopkins University](https://www.jhu.edu).
I received my Ph.D. from Indian Institute of Science (IISc) Bangalore, advised by [Dr. Venkatesh Babu](https://cds.iisc.ac.in/faculty/venky/).

My research focuses on building machines that can **perceive, understand, and reason** about the visual world - developing methods that are robust, efficient, and generalizable across diverse real-world conditions.

[Full bio →](/bio){: .bio-link}

---

<div class="simple-social">
  <a href="https://scholar.google.com/citations?user=gBhmvr8AAAAJ"
     target="_blank">Google scholar</a>
  <span>/</span>
  <span class="email-obf"
        data-user="ram"
        data-domain="dsai.iitm.ac.in">
  </span>
  <span>/</span>
  <a href="/al-folio-test/assets/pdf/cv.pdf"
     target="_blank">CV</a>
</div>

<script>
document.querySelectorAll('.email-obf').forEach(function(el) {
  el.style.cursor = 'pointer';
  el.addEventListener('click', function() {
    var user = el.getAttribute('data-user');
    var domain = el.getAttribute('data-domain');
    window.location.href = 'mailto:' + user + '@' + domain;
  });
});
</script>

<style>
.email-obf::before {
  content: attr(data-user) "\0040" attr(data-domain);
  color: #4a7ab5;
  cursor: pointer;
  font-size: 0.85rem;
}
.email-obf:hover::before { text-decoration: underline; }
.simple-social { margin-top: 0.8rem; font-size: 0.85rem; }
.simple-social a { color: #4a7ab5; text-decoration: none; }
.simple-social a:hover { text-decoration: underline; }
.simple-social .sep { color: #999; margin: 0 0.3rem; }
</style>

<div style="clear:both; margin-top: 3rem;"></div>

<h2 class="news-heading">What's new</h2>

<table class="news-table">
{% assign news_items = site.data.news.news | limit: 6 %}
{% for item in news_items %}
<tr>
  <td class="news-date">{{ item.date }}</td>
  <td class="news-text">{{ item.text }}</td>
</tr>
{% endfor %}
</table>

<div style="margin-bottom: 3rem;"></div>

<!-- <div class="news-section" style="margin-bottom: 3rem;">

## What's new

{% assign news_items = site.data.news.news | limit: 6 %}
<table class="news-table">
{% for item in news_items %}
<tr>
  <td class="news-date">{{ item.date }}</td>
  <td class="news-text">{{ item.text }}</td>
</tr>
{% endfor %}
</table>
</div> -->
<!-- 
<style>
.news-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  margin-top: 1rem;
}
.news-table tr {
  border-bottom: 1px solid #e8e8e8;
  border-left: 3px solid transparent;
}
.news-table tr:first-child {
  border-left: 3px solid #4a7ab5;
}
.news-table tr:hover {
  border-left: 3px solid #4a7ab5;
}
.news-table .news-date {
  white-space: nowrap;
  color: #888;
  font-size: 0.82rem;
  min-width: 90px;
  padding: 0.7rem 1rem 0.7rem 0.5rem;
  vertical-align: top;
}
.news-table .news-text {
  padding: 0.7rem 0.5rem;
  line-height: 1.6;
  vertical-align: top;
}
.news-table .news-text a {
  color: #4a7ab5;
  text-decoration: none;
}
.news-table .news-text a:hover {
  text-decoration: underline;
}
html[data-theme='dark'] .news-table tr {
  border-bottom: 1px solid #333;
}
html[data-theme='dark'] .news-table .news-date {
  color: #aaa;
}
html[data-theme='dark'] .news-table .news-text a {
  color: #6d9fd4;
}
</style> -->