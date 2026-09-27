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

news: true
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

---

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