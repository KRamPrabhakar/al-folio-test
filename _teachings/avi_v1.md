---
layout: page
title: Advanced Visual Intelligence
permalink: /teachings/avi_v1/
nav: false
---

<style>
/* Hide page title */
h1.post-title,
h1.page-title,
.post-title,
.page-title {
  display: none !important;
}

/* ============================================
   Course Page — Clean Academic Style
   ============================================ */

.course-page {
  max-width: 860px;
  font-family: 'Inter', -apple-system,
    BlinkMacSystemFont, sans-serif;
  font-size: 0.95rem;
  line-height: 1.75;
}

/* Course header */
.course-header {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.course-header h1 {
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  margin-bottom: 0.3rem !important;
  color: inherit !important;
  border: none !important;
  padding: 0 !important;
}

.course-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 0.8rem;
  font-size: 0.82rem;
  color: #888;
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.course-meta strong {
  color: #555;
}

/* Section headings */
.course-page h2 {
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: #999 !important;
  border-bottom: none !important;
  margin-top: 2.5rem !important;
  margin-bottom: 0.8rem !important;
  padding: 0 !important;
}

/* Description text */
.course-desc {
  font-size: 0.92rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

/* Info boxes */
.course-infobox {
  display: grid;
  grid-template-columns: repeat(auto-fill,
    minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem 0;
}

.infobox-item {
  padding: 0.8rem 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 2px solid #e0e0e0;
  font-size: 0.82rem;
}

.infobox-item .label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
  margin-bottom: 0.2rem;
}

.infobox-item .value {
  font-weight: 500;
  color: #333;
}

/* Announcements */
.announcements {
  margin: 1rem 0 2rem 0;
}

.announcement-item {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.85rem;
  align-items: baseline;
}

.announcement-item:last-child {
  border-bottom: none;
}

.ann-date {
  min-width: 80px;
  font-size: 0.78rem;
  color: #aaa;
  white-space: nowrap;
}

.ann-text {
  color: #444;
  line-height: 1.5;
}

/* Schedule table */
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  margin: 1rem 0;
}

.schedule-table thead tr {
  border-bottom: 2px solid #e0e0e0;
}

.schedule-table th {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
  padding: 0.5rem 0.8rem;
  text-align: left;
}

.schedule-table td {
  padding: 0.55rem 0.8rem;
  border-bottom: 1px solid #f5f5f5;
  vertical-align: top;
  color: #444;
}

.schedule-table tr:hover td {
  background-color: #fafafa;
}

/* Week number */
.schedule-table .week {
  color: #bbb;
  font-size: 0.78rem;
  white-space: nowrap;
  font-weight: 600;
}

/* Exam row highlight */
.schedule-table tr.exam td {
  background-color: #fef9f0;
  font-weight: 500;
  color: #333;
}

.schedule-table tr.exam td:first-child {
  border-left: 2px solid #f0a500;
}

/* Links in schedule */
.schedule-table a {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.1rem 0.45rem;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #666 !important;
  text-decoration: none !important;
  margin-right: 0.2rem;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.schedule-table a:hover {
  border-color: #A51C30;
  color: #A51C30 !important;
}

/* Grading table */
.grading-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  margin: 1rem 0;
  max-width: 400px;
}

.grading-table td {
  padding: 0.5rem 0.8rem;
  border-bottom: 1px solid #f5f5f5;
  color: #444;
}

.grading-table td:last-child {
  text-align: right;
  font-weight: 600;
  color: #333;
}

/* References list */
.ref-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.ref-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.88rem;
  color: #444;
  display: flex;
  gap: 0.8rem;
  align-items: baseline;
}

.ref-list li:last-child {
  border-bottom: none;
}

.ref-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  white-space: nowrap;
  flex-shrink: 0;
}

.ref-badge.primary {
  background-color: #1a237e;
  color: white;
}

.ref-badge.secondary {
  background-color: #e0e0e0;
  color: #666;
}

/* Policy boxes */
.policy-box {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 1rem 1.2rem;
  margin: 0.5rem 0;
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
}

/* Dark mode */
html[data-theme='dark'] .course-header {
  border-bottom-color: #333;
}

html[data-theme='dark'] .course-desc,
html[data-theme='dark'] .ann-text,
html[data-theme='dark'] .schedule-table td,
html[data-theme='dark'] .grading-table td,
html[data-theme='dark'] .ref-list li {
  color: #bbb;
}

html[data-theme='dark'] .course-meta {
  color: #666;
}

html[data-theme='dark'] .infobox-item {
  background-color: #222;
  border-left-color: #333;
}

html[data-theme='dark'] .infobox-item .value {
  color: #ccc;
}

html[data-theme='dark'] .schedule-table thead tr {
  border-bottom-color: #333;
}

html[data-theme='dark'] .schedule-table td,
html[data-theme='dark'] .grading-table td,
html[data-theme='dark'] .ref-list li {
  border-bottom-color: #2a2a2a;
}

html[data-theme='dark'] .schedule-table tr:hover td {
  background-color: #222;
}

html[data-theme='dark'] .schedule-table a {
  border-color: #333;
  color: #aaa !important;
}

html[data-theme='dark'] .schedule-table a:hover {
  border-color: #d4526a;
  color: #d4526a !important;
}

html[data-theme='dark'] .schedule-table tr.exam td {
  background-color: #1e1a10;
}

html[data-theme='dark'] .policy-box {
  background-color: #222;
  color: #bbb;
}

html[data-theme='dark'] .ref-badge.secondary {
  background-color: #333;
  color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
  .course-infobox {
    grid-template-columns: 1fr 1fr;
  }

  .schedule-table {
    font-size: 0.78rem;
  }

  .schedule-table th,
  .schedule-table td {
    padding: 0.4rem 0.5rem;
  }
}
</style>

<div class="course-page">

<!-- ===================== HEADER ===================== -->

<div class="course-header">
<h1>Advanced Visual Intelligence (AVI)</h1>
<div class="course-meta">
  <span>📍 <strong>IIT Madras</strong></span>
  <span>🎓 <strong>Dept. of Data Science and AI</strong></span>
  <span>📅 <strong>Spring 2026</strong></span>
  <span>👤 <a href="https://kramprabhakar.github.io"
    target="_blank">Dr. Ram Prabhakar</a></span>
</div>
</div>

<!-- ===================== INFO BOXES ===================== -->

<div class="course-infobox">
  <div class="infobox-item">
    <div class="label">Course Code</div>
    <div class="value">CS6XXX</div>
  </div>
  <div class="infobox-item">
    <div class="label">Credits</div>
    <div class="value">3-0-0-3</div>
  </div>
  <div class="infobox-item">
    <div class="label">Lecture</div>
    <div class="value">Mon / Wed / Fri<br>TBD</div>
  </div>
  <div class="infobox-item">
    <div class="label">Venue</div>
    <div class="value">TBD</div>
  </div>
  <div class="infobox-item">
    <div class="label">Office Hours</div>
    <div class="value">By appointment</div>
  </div>
  <div class="infobox-item">
    <div class="label">Prerequisites</div>
    <div class="value">Linear Algebra,
    Probability, Python</div>
  </div>
</div>

<!-- ===================== DESCRIPTION ===================== -->

## About

<div class="course-desc">
This course covers fundamental and advanced topics
in computer vision and visual intelligence.
Students will develop a strong understanding of
both classical methods and modern deep learning
approaches, with emphasis on mathematical
foundations and practical implementation.

Topics include image formation, feature extraction,
object detection and segmentation, generative models,
video understanding, and vision-language models.
</div>

<!-- ===================== ANNOUNCEMENTS ===================== -->

## Announcements

<div class="announcements">
  <div class="announcement-item">
    <span class="ann-date">Jan 2026</span>
    <span class="ann-text">
      Course website is live. Welcome to AVI!
      First lecture on [date].
    </span>
  </div>
</div>

<!-- ===================== SCHEDULE ===================== -->

## Schedule

<table class="schedule-table">
<thead>
  <tr>
    <th>Week</th>
    <th>Topic</th>
    <th>Slides</th>
    <th>Reading</th>
    <th>Assignment</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="week">01</td>
    <td>Introduction to Computer Vision</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Notes</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">02</td>
    <td>Image Formation and Cameras</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Ch. 2</a></td>
    <td>HW1 Out</td>
  </tr>
  <tr>
    <td class="week">03</td>
    <td>Image Filtering and Edge Detection</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">04</td>
    <td>Feature Detection and Description</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW1 Due</td>
  </tr>
  <tr>
    <td class="week">05</td>
    <td>Deep Learning for Vision — CNNs</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW2 Out</td>
  </tr>
  <tr>
    <td class="week">06</td>
    <td>Object Detection</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">07</td>
    <td>Image Segmentation</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW2 Due</td>
  </tr>
  <tr class="exam">
    <td class="week">08</td>
    <td>⚡ Mid-semester Exam</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">09</td>
    <td>Transformers for Vision (ViT)</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW3 Out</td>
  </tr>
  <tr>
    <td class="week">10</td>
    <td>Generative Models — GANs, Diffusion</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">11</td>
    <td>Video Understanding</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW3 Due</td>
  </tr>
  <tr>
    <td class="week">12</td>
    <td>3D Vision and Depth Estimation</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW4 Out</td>
  </tr>
  <tr>
    <td class="week">13</td>
    <td>Vision-Language Models (CLIP, LLaVA)</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">14</td>
    <td>Recent Topics + Guest Lecture</td>
    <td><a href="#">Slides</a></td>
    <td>—</td>
    <td>HW4 Due</td>
  </tr>
  <tr class="exam">
    <td class="week">15</td>
    <td>⚡ End-semester Exam</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
  </tr>
</tbody>
</table>

<!-- ===================== GRADING ===================== -->

## Grading

<table class="grading-table">
  <tr>
    <td>Assignments (4 × 10%)</td>
    <td>40%</td>
  </tr>
  <tr>
    <td>Mid-semester Exam</td>
    <td>25%</td>
  </tr>
  <tr>
    <td>End-semester Exam</td>
    <td>35%</td>
  </tr>
</table>

<!-- ===================== REFERENCES ===================== -->

## Textbooks & References

<ul class="ref-list">
  <li>
    <span class="ref-badge primary">Primary</span>
    Szeliski,
    <em>Computer Vision: Algorithms and Applications</em>
    (2nd ed., 2022) —
    <a href="https://szeliski.org/Book/"
       target="_blank">Free PDF</a>
  </li>
  <li>
    <span class="ref-badge primary">Primary</span>
    Goodfellow et al.,
    <em>Deep Learning</em> (2016) —
    <a href="https://www.deeplearningbook.org/"
       target="_blank">Free online</a>
  </li>
  <li>
    <span class="ref-badge secondary">Reference</span>
    Prince,
    <em>Understanding Deep Learning</em> (2023) —
    <a href="https://udlbook.github.io/udlbook/"
       target="_blank">Free PDF</a>
  </li>
  <li>
    <span class="ref-badge secondary">Reference</span>
    Forsyth & Ponce,
    <em>Computer Vision: A Modern Approach</em>
  </li>
</ul>

<!-- ===================== POLICIES ===================== -->

## Policies

**Attendance**
<div class="policy-box">
Attendance is not mandatory but strongly encouraged.
Lecture slides will be posted after each class.
</div>

**Late Submissions**
<div class="policy-box">
Late assignments will be penalized 10% per day.
No submissions accepted after 3 days past deadline.
</div>

**Academic Integrity**
<div class="policy-box">
All submitted work must be your own.
Collaboration is encouraged for understanding
concepts but not for writing code or answers.
Use of AI tools must be disclosed.
</div>

</div><!-- end course-page -->