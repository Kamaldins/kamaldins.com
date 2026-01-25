---
title: "Iestatījumi"
weight: 100
---

# Pieejamības Iestatījumi

<p class="hx-text-lg hx-text-gray-600 dark:hx-text-gray-400 hx-mb-8">
Izvēlieties sev ērtākos skata parametrus.
</p>

<script src="/js/accessibility.js"></script>

<svg style="display:none">
<defs>
<filter id="protanopia-filter"><feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/></filter>
<filter id="deuteranopia-filter"><feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/></filter>
<filter id="tritanopia-filter"><feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/></filter>
</defs>
</svg>

<div class="settings-grid">

<div class="settings-card">
<div class="hx-mb-4">
<h3 class="hx-text-lg hx-font-bold hx-m-0">Teksta Izmērs</h3>
</div>
<div class="btn-group" id="size-group">
<button class="btn-option" onclick="setTextSize(0.8)" data-size="0.8">Mazs</button>
<button class="btn-option active" onclick="setTextSize(1)" data-size="1">Normāls</button>
<button class="btn-option" onclick="setTextSize(1.25)" data-size="1.25">Liels</button>
<button class="btn-option" onclick="setTextSize(1.5)" data-size="1.5">Ļoti Liels</button>
</div>

<div class="hx-mt-6 hx-mb-4">
<h3 class="hx-text-lg hx-font-bold hx-m-0">Lasāmības Režīmi</h3>
</div>

<div class="control-group">
<span class="control-label">Treknraksts (Bold)</span>
<div class="btn-group" id="bold-group">
<button class="btn-option active" onclick="setToggle('bold', false)" data-val="false">Izslēgts</button>
<button class="btn-option" onclick="setToggle('bold', true)" data-val="true">Ieslēgts</button>
</div>
</div>

<div class="control-group">
<span class="control-label">Vieglā Lasīšana (Atstarpes)</span>
<div class="btn-group" id="easy-group">
<button class="btn-option active" onclick="setToggle('easy', false)" data-val="false">Izslēgts</button>
<button class="btn-option" onclick="setToggle('easy', true)" data-val="true">Ieslēgts</button>
</div>
</div>
</div>

<div class="settings-card">
<div class="hx-mb-4">
<h3 class="hx-text-lg hx-font-bold hx-m-0">Vizuālais</h3>
</div>

<div class="control-group">
<label for="colorblind-select" class="control-label">Krāsu Filtrs</label>
<select id="colorblind-select" class="settings-select" onchange="setColorblindMode(this.value)">
<option value="none">Normāls (Bez filtra)</option>
<option value="protanopia">Protanopija (Sarkans-Zaļš)</option>
<option value="deuteranopia">Deiteranopija (Zaļš-Sarkans)</option>
<option value="tritanopia">Tritanopija (Zils-Dzeltens)</option>
<option value="achromatopsia">Melnbalts (Ahromatopsija)</option>
</select>
</div>

<div class="hx-mt-auto hx-pt-6">
<button class="btn-reset" onclick="resetA11ySettings()">
Atiestatīt Visus Iestatījumus
</button>
</div>
</div>

</div>
