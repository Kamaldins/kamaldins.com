---
title: "Sākums"
layout: "hextra-home"
summary: "Kamaldiņu dzimtas digitālais arhīvs un vēstures enciklopēdija."
---

<style>
.homepage-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .homepage-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

<div class="hx-mt-12 hx-mb-6 hx-text-center">
  <h1 class="hx-hero-headline" style="font-size: 3.5rem; margin-bottom: 1rem;">
    Kamaldiņu Dzimta
  </h1>
  
  <div class="hx-text-lg hx-text-gray-600 dark:hx-text-gray-400" style="font-family: var(--font-serif); font-style: italic;">
    Digitālais arhīvs un vēstures enciklopēdija.<br>
    No Vidzemes upes līkločiem līdz Daugmales krastiem.
  </div>
</div>

<div class="homepage-grid">
  <div>
    {{< cards cols="1" >}}
      {{< card link="history" title="Saknes" subtitle="Uzvārda izcelsme, Tālava un Hronoloģija" icon="globe-alt" >}}
      {{< card link="place" title="Vieta" subtitle="Tauriņupe, Kamaldas stacija, Sateka" icon="map" >}}
      {{< card link="people" title="Cilvēki" subtitle="Dzimtas koks, profili un statistika" icon="user-group" >}}
      {{< card link="archive" title="Arhīvs" subtitle="Dokumenti, foto, atmiņas (1826–2004)" icon="archive" >}}
    {{< /cards >}}
  </div>
  <div>
    {{< cards cols="1" >}}
      {{< card link="history/hronologija" title="Hronoloģija" subtitle="Laika līnija no 1826. gada" icon="clock" >}}
      {{< card link="place/kamaldini-homestead" title="Mājas" subtitle="Kamaldiņu sēta un apkārtne" icon="home" >}}
      {{< card link="about" title="Par Mums" subtitle="Projekta mērķi un autori" icon="information-circle" >}}
      {{< card link="contact" title="Kontakti" subtitle="Sazinies ar mums" icon="mail" >}}
    {{< /cards >}}
  </div>
</div>
