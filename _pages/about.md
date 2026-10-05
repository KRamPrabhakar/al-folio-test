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
  more_info:
  image_size: "180px"

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

My research group, the **Artificial Perception X (APX)** Lab, investigates core problems in **computer vision** and **deep learning**.

<!-- My research group, the [Artificial Perception X (APX) Lab](https://apx-lab.github.io), investigates core problems in **computer vision** and **deep learning**. -->

Our research focuses on building machines that can **perceive, understand, and reason** about the visual world - developing methods that are robust, efficient, and generalizable across diverse real-world conditions.

[Full bio →](/al-folio-test/bio){: .bio-link}

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
/* Openings strip */
.openings-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  padding: 0.8rem 1rem;
  background-color: #f8f9fa;
  border-left: 3px solid #A51C30;
  border-radius: 0 4px 4px 0;
  font-size: 0.85rem;
}

.openings-label {
  font-weight: 600;
  color: #A51C30;
  margin-right: 0.3rem;
}

.opening-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.15rem 0.6rem;
  border: 1px solid #A51C30;
  border-radius: 20px;
  color: #A51C30 !important;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.opening-tag:hover {
  background-color: #A51C30;
  color: white !important;
}

/* Dark mode */
html[data-theme='dark'] .openings-strip {
  background-color: #1e1515;
  border-left-color: #d4526a;
}

html[data-theme='dark'] .openings-label {
  color: #d4526a;
}

html[data-theme='dark'] .opening-tag {
  border-color: #d4526a;
  color: #d4526a !important;
}

html[data-theme='dark'] .opening-tag:hover {
  background-color: #d4526a;
  color: white !important;
}
</style>

<div class="openings-strip">
  <span class="openings-label">We are hiring →</span>
  <a href="/al-folio-test/join/" class="opening-tag">PhD</a>
  <a href="/al-folio-test/join/" class="opening-tag">MS</a>
  <a href="/al-folio-test/join/" class="opening-tag">Intern</a>
  <a href="/al-folio-test/join/" class="opening-tag">Project Associate</a>
  <a href="/al-folio-test/join/" class="opening-tag">Postdoc</a>
</div>

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