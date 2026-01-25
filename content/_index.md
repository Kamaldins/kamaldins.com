---
title: "Sākums"
layout: "hextra-home"
summary: "Kamaldiņu dzimtas digitālais arhīvs un vēstures enciklopēdija."
---

<style>
.homepage-hero {
  text-align: left;
  padding: 4rem 1rem 3rem;
  max-width: 100%;
}
.homepage-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 600; /* Playfair Display Semibold */
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.homepage-hero p {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.6;
  color: #e5e7eb; /* Light gray/white for better contrast on dark */
  opacity: 1;
  margin-bottom: 2rem;
  max-width: 650px;
  /* margin-left: auto; Removed for left alignment */
  /* margin-right: auto; Removed for left alignment */
}
.homepage-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem; /* Compacted gap */
  margin: 1.5rem 0; /* Reduced margin */
  align-items: stretch;
}
</style>

<div class="homepage-hero">
  <h1 class="hx-hero-headline">Kamaldiņu Dzimta</h1>
  <p>
    Sveicināti Kamaldiņu dzimtas digitālajā arhīvā – mūsu vēstures un atmiņu krātuvē.
    <br><br>
    Šeit apkopoti cauri laikiem nestie dokumenti, fotogrāfijas un stāsti. No dzimtas pirmsākumiem Vidzemē līdz dzīvei Daugmales krastos, mēs saglabājam šo mantojumu, lai ikviens varētu izzināt savas saknes un nodot tās tālāk.
  </p>
</div>

<div class="homepage-cards">
  {{< card link="history" title="Saknes" subtitle="Uzvārda izcelsme, Tālava un Hronoloģija" icon="globe-alt" >}}
  {{< card link="place" title="Vieta" subtitle="Tauriņupe, Kamaldas stacija, Sateka" icon="map" >}}
  {{< card link="people" title="Cilvēki" subtitle="Dzimtas koks, profili un statistika" icon="user-group" >}}
  {{< card link="archive" title="Arhīvs" subtitle="Dokumenti, foto, atmiņas (1826–2004)" icon="archive" >}}
  {{< card link="history/hronologija" title="Hronoloģija" subtitle="Laika līnija no 1826. gada" icon="clock" >}}
  {{< card link="place/kamaldini-homestead" title="Mājas" subtitle="Kamaldiņu sēta un apkārtne" icon="home" >}}
  {{< card link="about" title="Par Mums" subtitle="Projekta mērķi un autori" icon="information-circle" >}}
  {{< card link="contact" title="Kontakti" subtitle="Sazinies ar mums" icon="mail" >}}
  {{< card link="settings" title="Iestatījumi" subtitle="Pielāgot vietnes izskatu" icon="adjustments" >}}
</div>
