// Accessibility Settings JS - Button Logic
(function () {
    'use strict';

    function loadPreferences() {
        const prefs = JSON.parse(localStorage.getItem('a11y-prefs') || '{}');
        if (prefs.boldText) updateButtonState('bold-group', true);
        if (prefs.easyRead) updateButtonState('easy-group', true);
        if (prefs.textSize) {
            setTextSize(prefs.textSize);
            updateSizeButtons(prefs.textSize);
        }
        if (prefs.colorblindMode) {
            setColorblindMode(prefs.colorblindMode);
            const select = document.getElementById('colorblind-select');
            if (select) select.value = prefs.colorblindMode;
        }
    }

    function savePrefs(key, value) {
        const prefs = JSON.parse(localStorage.getItem('a11y-prefs') || '{}');
        prefs[key] = value;
        localStorage.setItem('a11y-prefs', JSON.stringify(prefs));
    }

    // Toggles using Buttons
    window.setToggle = function (type, enabled) {
        const key = type === 'bold' ? 'boldText' : 'easyRead';
        const classToToggle = type === 'bold' ? 'a11y-bold' : 'a11y-easy-read';
        const groupName = type === 'bold' ? 'bold-group' : 'easy-group';

        document.body.classList.toggle(classToToggle, enabled);
        savePrefs(key, enabled);
        updateButtonState(groupName, enabled);
    };

    function updateButtonState(groupId, enabled) {
        const container = document.getElementById(groupId);
        if (!container) return;
        const buttons = container.querySelectorAll('.btn-option');
        // Assuming button[0] is ON, button[1] is OFF or similar. 
        // Actually better logic: pass specific value.
        // Let's assume buttons have data-val="true" / "false".
        buttons.forEach(btn => {
            const val = btn.dataset.val === 'true';
            if (val === enabled) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    // Text Size Buttons
    window.setTextSize = function (size) {
        document.documentElement.style.setProperty('--a11y-font-scale', size);
        document.body.style.fontSize = (size * 100) + '%';
        savePrefs('textSize', size);
        updateSizeButtons(size);
    };

    function updateSizeButtons(size) {
        const container = document.getElementById('size-group');
        if (!container) return;
        const buttons = container.querySelectorAll('.btn-option');
        buttons.forEach(btn => {
            if (parseFloat(btn.dataset.size) === size) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    // Colorblind
    window.setColorblindMode = function (mode) {
        document.body.classList.remove('a11y-protanopia', 'a11y-deuteranopia', 'a11y-tritanopia', 'a11y-achromatopsia');
        if (mode && mode !== 'none') {
            document.body.classList.add('a11y-' + mode);
        }
        savePrefs('colorblindMode', mode);
    };

    // Reset
    window.resetA11ySettings = function () {
        localStorage.removeItem('a11y-prefs');
        document.body.classList.remove('a11y-bold', 'a11y-easy-read', 'a11y-protanopia', 'a11y-deuteranopia', 'a11y-tritanopia', 'a11y-achromatopsia');
        document.body.style.fontSize = '';

        // Reset UI
        updateButtonState('bold-group', false);
        updateButtonState('easy-group', false);
        updateSizeButtons(1);
        const select = document.getElementById('colorblind-select');
        if (select) select.value = 'none';
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPreferences);
    } else {
        loadPreferences();
    }
})();
