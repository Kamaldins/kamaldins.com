---
title: "Sākums"
layout: "hextra-home"
summary: "Kamaldiņu dzimtas digitālais arhīvs un vēstures enciklopēdija."
---

<style>
.homepage-hero {
  text-align: left;
  padding: 3rem 1rem 1.5rem; /* Restored some breathing room */
  max-width: 100%;
}
.homepage-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.homepage-hero p {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.5;
  color: #e5e7eb;
  opacity: 1;
  margin-bottom: 1.5rem; /* Restored some margin */
  max-width: 600px;
}
.homepage-grid-container {
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem; /* Relaxed gap for mobile */
  margin-top: 1rem;
  margin-bottom: 2rem; /* Restored bottom margin */
}
@media (min-width: 768px) {
  .homepage-grid-container {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
  }
}
.homepage-column {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Relaxed vertical stack */
}
</style>

<div class="homepage-hero">
  <h1 class="hx-hero-headline">Kamaldiņu Dzimta</h1>
  <p>
    Digitālais arhīvs – vēstures, dokumentu un atmiņu krātuve.
    <br><br>
    No Vidzemes pirmsākumiem līdz Daugmales krastiem – mantojums, ko saglabājam un nododam tālāk.
  </p>
</div>

<div class="homepage-grid-container">
  <!-- Left Column (First 4 known items) -->
  <div class="homepage-column">
    {{< card link="history" title="Saknes" subtitle="Uzvārda izcelsme, Tālava un Hronoloģija" icon="globe-alt" >}}
    {{< card link="place" title="Vieta" subtitle="Tauriņupe, Kamaldas stacija, Sateka" icon="map" >}}
    {{< card link="people" title="Cilvēki" subtitle="Dzimtas koks, profili un statistika" icon="user-group" >}}
    {{< card link="archive" title="Arhīvs" subtitle="Dokumenti, foto, atmiņas (1826–2004)" icon="archive" >}}
  </div>

  <!-- Right Column (Next 4 items) -->
  <div class="homepage-column">
    {{< card link="history/hronologija" title="Hronoloģija" subtitle="Laika līnija no 1826. gada" icon="clock" >}}
    {{< card link="place/kamaldini-homestead" title="Mājas" subtitle="Kamaldiņu sēta un apkārtne" icon="home" >}}
    {{< card link="about" title="Par Mums" subtitle="Projekta mērķi un autori" icon="information-circle" >}}
    {{< card link="contact" title="Kontakti" subtitle="Sazinies ar mums" icon="mail" >}}
  </div>
</div>
