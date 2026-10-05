---
layout: page
title: Advanced Visual Intelligence (AVI)
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

.course-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.course-title {
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  margin-bottom: 0.3rem !important;
  color: inherit !important;
  border: none !important;
  padding: 0 !important;
  display: block;
}

.course-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 0.6rem;
  font-size: 0.82rem;
  color: #888;
}

.course-meta a {
  color: #4a7ab5;
  text-decoration: none;
}

/* Section headings */
.course-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  margin-top: 2.5rem;
  margin-bottom: 0.8rem;
  padding: 0;
  border: none !important;
  display: block;
}

/* Info boxes */
.course-infobox {
  display: grid;
  grid-template-columns: repeat(auto-fill,
    minmax(180px, 1fr));
  gap: 0.8rem;
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
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
  margin-bottom: 0.3rem;
}

.infobox-item .value {
  font-weight: 500;
  color: #333;
  line-height: 1.4;
}

/* Description */
.course-desc {
  font-size: 0.92rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

/* Announcements */
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
  font-size: 0.82rem;
  margin: 1rem 0;
}

.schedule-table thead tr {
  border-bottom: 2px solid #e0e0e0;
}

.schedule-table th {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
  padding: 0.5rem 0.6rem;
  text-align: left;
  white-space: nowrap;
}

.schedule-table td {
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid #f5f5f5;
  vertical-align: top;
  color: #444;
}

.schedule-table tr:hover td {
  background-color: #fafafa;
}

.schedule-table .week {
  color: #bbb;
  font-size: 0.75rem;
  white-space: nowrap;
  font-weight: 600;
  text-align: center;
}

.schedule-table tr.exam td {
  background-color: #fef9f0;
  font-weight: 600;
  color: #333;
}

.schedule-table tr.exam td:first-child {
  border-left: 2px solid #f0a500;
}

.schedule-table a {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.1rem 0.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #666 !important;
  text-decoration: none !important;
  margin-right: 0.2rem;
  white-space: nowrap;
  display: inline-block;
  margin-bottom: 0.1rem;
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
  max-width: 380px;
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

/* TA table */
.ta-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  margin: 1rem 0;
}

.ta-table th {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
  padding: 0.5rem 0.8rem;
  border-bottom: 2px solid #e0e0e0;
  text-align: left;
}

.ta-table td {
  padding: 0.55rem 0.8rem;
  border-bottom: 1px solid #f5f5f5;
  color: #444;
  vertical-align: top;
}

.ta-table tr:last-child td {
  border-bottom: none;
}

.ta-email::before {
  content: attr(data-user) "\0040"
           attr(data-domain);
  font-size: 0.82rem;
  color: #4a7ab5;
}

/* References */
.ref-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.ref-list li {
  padding: 0.6rem 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.88rem;
  color: #444;
  display: flex;
  gap: 0.8rem;
  align-items: baseline;
  line-height: 1.5;
}

.ref-list li:last-child {
  border-bottom: none;
}

.ref-badge {
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  white-space: nowrap;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.ref-badge.primary {
  background-color: #1a237e;
  color: white;
}

.ref-badge.secondary {
  background-color: #e0e0e0;
  color: #666;
}

.ref-badge.extra {
  background-color: #f3e5f5;
  color: #6A1B9A;
}

/* Policy boxes */
.policy-box {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  margin: 0.4rem 0 1rem 0;
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
}

.policy-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #555;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  display: block;
}

/* Dark mode */
html[data-theme='dark'] .course-header {
  border-bottom-color: #333;
}

html[data-theme='dark'] .course-title {
  color: #e0e0e0 !important;
}

html[data-theme='dark'] .course-section-title {
  color: #666 !important;
}

html[data-theme='dark'] .infobox-item {
  background-color: #222;
  border-left-color: #333;
}

html[data-theme='dark'] .infobox-item .value {
  color: #ccc;
}

html[data-theme='dark'] .course-desc,
html[data-theme='dark'] .ann-text {
  color: #bbb;
}

html[data-theme='dark'] .ann-date {
  color: #555;
}

html[data-theme='dark'] .announcement-item {
  border-bottom-color: #2a2a2a;
}

html[data-theme='dark'] .schedule-table thead tr {
  border-bottom-color: #333;
}

html[data-theme='dark'] .schedule-table td {
  border-bottom-color: #2a2a2a;
  color: #bbb;
}

html[data-theme='dark'] .schedule-table tr:hover td {
  background-color: #1e1e1e;
}

html[data-theme='dark'] .schedule-table a {
  border-color: #333;
  color: #888 !important;
}

html[data-theme='dark'] .schedule-table a:hover {
  border-color: #d4526a;
  color: #d4526a !important;
}

html[data-theme='dark'] .schedule-table tr.exam td {
  background-color: #1e1a10;
  color: #ccc;
}

html[data-theme='dark'] .grading-table td,
html[data-theme='dark'] .ta-table td {
  border-bottom-color: #2a2a2a;
  color: #bbb;
}

html[data-theme='dark'] .ta-table th {
  border-bottom-color: #333;
}

html[data-theme='dark'] .grading-table td:last-child {
  color: #ccc;
}

html[data-theme='dark'] .ref-list li {
  border-bottom-color: #2a2a2a;
  color: #bbb;
}

html[data-theme='dark'] .ref-badge.secondary {
  background-color: #333;
  color: #aaa;
}

html[data-theme='dark'] .ref-badge.extra {
  background-color: #2a1a2e;
  color: #ce93d8;
}

html[data-theme='dark'] .policy-box {
  background-color: #1e1e1e;
  color: #bbb;
}

html[data-theme='dark'] .policy-label {
  color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
  .course-infobox {
    grid-template-columns: 1fr 1fr;
  }
  .schedule-table {
    font-size: 0.75rem;
  }
  .schedule-table th,
  .schedule-table td {
    padding: 0.4rem 0.4rem;
  }
}
</style>

<!-- ========== HEADER ========== -->

<div class="course-header">
<span class="course-title">
  Advanced Visual Intelligence (AVI)
</span>
<div class="course-meta">
  <span>📍 IIT Madras</span>
  <span>🎓 Dept. of Data Science and AI</span>
  <span>📅 Spring 2026</span>
  <span>👤
    <a href="https://kramprabhakar.github.io"
       target="_blank">
      Dr. Ram Prabhakar
    </a>
  </span>
</div>
</div>

<!-- ========== INFO BOXES ========== -->

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
    <div class="value">
      Linear Algebra,
      Probability, Python
    </div>
  </div>
</div>

<!-- ========== ABOUT ========== -->

<span class="course-section-title">About</span>

<div class="course-desc">
This course covers fundamental and advanced
topics in computer vision and visual intelligence.
Students will develop a strong understanding of
both classical methods and modern deep learning
approaches, with emphasis on mathematical
foundations and practical implementation.
<br><br>
Topics include image formation, feature extraction,
object detection and segmentation, generative models,
video understanding, and vision-language models.
</div>

<!-- ========== ANNOUNCEMENTS ========== -->

<span class="course-section-title">
  Announcements
</span>

<div class="announcement-item">
  <span class="ann-date">Jan 2026</span>
  <span class="ann-text">
    Course website is live.
    Welcome to AVI! First lecture on [date].
  </span>
</div>

<!-- ========== SCHEDULE ========== -->

<span class="course-section-title">Schedule</span>

<table class="schedule-table">
<thead>
  <tr>
    <th>#</th>
    <th>Topic</th>
    <th>Slides</th>
    <th>Video</th>
    <th>Reading</th>
    <th>Assignment</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="week">01</td>
    <td>Introduction to Computer Vision</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Notes</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">02</td>
    <td>Image Formation and Cameras</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Ch. 2</a></td>
    <td>HW1 Out</td>
  </tr>
  <tr>
    <td class="week">03</td>
    <td>Image Filtering and Edge Detection</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">04</td>
    <td>Feature Detection and Description</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW1 Due</td>
  </tr>
  <tr>
    <td class="week">05</td>
    <td>Deep Learning for Vision — CNNs</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW2 Out</td>
  </tr>
  <tr>
    <td class="week">06</td>
    <td>Object Detection</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">07</td>
    <td>Image Segmentation</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW2 Due</td>
  </tr>
  <tr class="exam">
    <td class="week">08</td>
    <td>⚡ Mid-semester Exam</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">09</td>
    <td>Transformers for Vision (ViT)</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW3 Out</td>
  </tr>
  <tr>
    <td class="week">10</td>
    <td>Generative Models — GANs, Diffusion</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">11</td>
    <td>Video Understanding</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW3 Due</td>
  </tr>
  <tr>
    <td class="week">12</td>
    <td>3D Vision and Depth Estimation</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>HW4 Out</td>
  </tr>
  <tr>
    <td class="week">13</td>
    <td>Vision-Language Models</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td><a href="#">Paper</a></td>
    <td>—</td>
  </tr>
  <tr>
    <td class="week">14</td>
    <td>Recent Topics + Guest Lecture</td>
    <td><a href="#">Slides</a></td>
    <td><a href="#">Video</a></td>
    <td>—</td>
    <td>HW4 Due</td>
  </tr>
  <tr class="exam">
    <td class="week">15</td>
    <td>⚡ End-semester Exam</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
  </tr>
</tbody>
</table>

<!-- ========== TEACHING ASSISTANTS ========== -->

<span class="course-section-title">
  Teaching Assistants
</span>

<table class="ta-table">
<thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Office Hours</th>
    <th>Days</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>TA Name 1</td>
    <td>
      <span class="ta-email"
        data-user="ta1"
        data-domain="smail.iitm.ac.in">
      </span>
    </td>
    <td>3:00 PM – 5:00 PM</td>
    <td>Monday, Wednesday</td>
  </tr>
  <tr>
    <td>TA Name 2</td>
    <td>
      <span class="ta-email"
        data-user="ta2"
        data-domain="smail.iitm.ac.in">
      </span>
    </td>
    <td>2:00 PM – 4:00 PM</td>
    <td>Tuesday, Thursday</td>
  </tr>
</tbody>
</table>

<!-- ========== GRADING ========== -->

<span class="course-section-title">Grading</span>

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

<!-- ========== REFERENCES ========== -->

<span class="course-section-title">
  Textbooks & References
</span>

<ul class="ref-list">
  <li>
    <span class="ref-badge primary">Primary</span>
    Szeliski,
    <em>Computer Vision: Algorithms
    and Applications</em>
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
    <span class="ref-badge secondary">
      Reference
    </span>
    Prince,
    <em>Understanding Deep Learning</em>
    (2023) —
    <a href="https://udlbook.github.io/udlbook/"
       target="_blank">Free PDF</a>
  </li>
  <li>
    <span class="ref-badge secondary">
      Reference
    </span>
    Forsyth & Ponce,
    <em>Computer Vision: A Modern Approach</em>
  </li>
  <li>
    <span class="ref-badge extra">Extra</span>
    Hartley & Zisserman,
    <em>Multiple View Geometry
    in Computer Vision</em>
    (2nd ed.) —
    <a href="https://www.robots.ox.ac.uk/~vgg/hzbook/"
       target="_blank">Website</a>
  </li>
  <li>
    <span class="ref-badge extra">Extra</span>
    Vidal, Ma & Sastry,
    <em>Generalized Principal Component
    Analysis</em>
  </li>
  <li>
    <span class="ref-badge extra">Extra</span>
    Selected papers from
    CVPR, ICCV, ECCV, NeurIPS
    — linked in schedule above
  </li>
</ul>

<!-- ========== POLICIES ========== -->

<span class="course-section-title">Policies</span>

<span class="policy-label">Attendance</span>
<div class="policy-box">
  Not mandatory but strongly encouraged.
  Lecture slides and videos will be posted
  after each class.
</div>

<span class="policy-label">Late Submissions</span>
<div class="policy-box">
  10% penalty per day.
  No submissions accepted after
  3 days past the deadline.
</div>

<span class="policy-label">Academic Integrity</span>
<div class="policy-box">
  All submitted work must be your own.
  Collaboration is encouraged for understanding
  concepts but not for writing code or answers.
  Use of AI tools must be explicitly disclosed.
</div>

<br>
<small style="color:#aaa;">
  Last updated: January 2026
</small>