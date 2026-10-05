---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<style>

/* ============================================
   Publication Badges
   ============================================ */

/* Base badge style */
.badge {
  font-size: 0.65rem !important;
  font-weight: 700 !important;
  border-radius: 3px !important;
  padding: 0.2rem 0.55rem !important;
  letter-spacing: 0.03em !important;
  text-transform: uppercase !important;
}

/* ---- A* Conferences ----
   CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR
   Deep Navy Blue
*/
.badge-CVPR,
.badge-ICCV,
.badge-ECCV,
.badge-NeurIPS,
.badge-ICML,
.badge-ICLR {
  background-color: #1a237e !important;
  color: white !important;
}

/* ---- A Conferences ----
   WACV, BMVC, IJCB, ICCP
   Medium Blue
*/
.badge-WACV,
.badge-BMVC,
.badge-IJCB,
.badge-ICCP {
  background-color: #1565C0 !important;
  color: white !important;
}

/* ---- Other Conferences ----
   Steel Blue
*/
.badge-AAAI,
.badge-MICCAI,
.badge-ICASSP,
.badge-ICIP,
.badge-ACCV,
.badge-CoRR,
.badge-ICVGIP,
.badge-IGARSS,
.badge-SPIE,
.badge-ICPR,
.badge-IJCNN,
.badge-FG,
.badge-AVSS,
.badge-ICCST {
  background-color: #1E88E5 !important;
  color: white !important;
}

/* ---- Journals ----
   TPAMI, IJCV, TIP, TBIOM, TNNLS, TCI
   Purple
*/
.badge-TPAMI,
.badge-IJCV,
.badge-TIP,
.badge-BOE,
.badge-TBIOM,
.badge-TNNLS,
.badge-TCI {
  background-color: #6A1B9A !important;
  color: white !important;
}

/* ---- Workshop Papers ----
   Grey
*/
.badge-Workshop,
.badge-CVPRW,
.badge-ICCVW,
.badge-ECCVW,
.badge-NeurIPSW {
  background-color: #546E7A !important;
  color: white !important;
}

/* ---- Patents ----
   Teal/Cyan
*/
.badge-Patent,
.badge-PATENT,
.badge-USPTO,
.badge-IPO {
  background-color: #00695C !important;
  color: white !important;
}

/* ---- arXiv / Preprint ----
   Dark Red
*/
.badge-arXiv,
.badge-Preprint,
.badge-preprint {
  background-color: #B71C1C !important;
  color: white !important;
}

</style>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
