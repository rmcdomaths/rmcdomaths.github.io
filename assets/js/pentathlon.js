/* ==========================================================================
   MODERN PENTATHLON SCORE CALCULATOR
   Used by _pages/pentathlon.md. Colours live in assets/css/pentathlon.css.

   Everything you are likely to want to change is in the SETTINGS section
   directly below. The code after it only reads those settings.
   ========================================================================== */


/* ==========================================================================
   SETTINGS
   ========================================================================== */

/* --------------------------------------------------------------------------
   SCORE STANDARDS (whole-competition totals)
   Par is not set here: it is the sum of each discipline's par points, so it
   always matches the green rows in the tables.
   -------------------------------------------------------------------------- */
var STANDARDS = {
  halfBlue: { label: "Half blue", points: 4600 },
  fullBlue: { label: "Full blue", points: 5200 }
};

/* --------------------------------------------------------------------------
   DISCIPLINES
   Each discipline has:
     name      - heading shown on the page
     measure   - column heading for the performance
     format    - how a performance is displayed: "percent" or "time"
                 (times are stored in seconds and shown as m:ss)
     range     - the rows shown in the table: from (top row) to (last row)
                 in steps of `step`. Change these to show more or fewer rows.
                 Below the last row there is always a box to type in any
                 performance (see YOUR OWN ENTRY below).
     par       - the performance that scores par (row coloured green).
                 It must be one of the rows, i.e. `from` plus a whole number
                 of steps, or no row will be green.
     toPoints  - the conversion from performance to points
     description - what the event is (shown under the table)
     scoring   - how the event is scored (shown under the description,
                 one line per entry)
   -------------------------------------------------------------------------- */
var DISCIPLINES = [
  {
    id: "fencing",
    name: "Fencing",
    measure: "Hits",
    format: "percent",
    range: { from: 100, to: 5, step: 5 },        // 100% down to 5%, every 5%
    par: 70,                                      // 70% hits
    // Conversion: 70% hits scores 1000 points.
    //             Each 1% of hits is worth 7.2 points (36 points per 5%).
    //             points = 1000 + 7.2 × (hits% − 70)
    //             Exception: 0 hits scores 0 points.
    toPoints: function (hitsPercent) {
      if (hitsPercent === 0) return 0;
      return 1000 + 7.2 * (hitsPercent - 70);
    },
    description: "Each athlete fences each other athlete.",
    scoring: [
      "Par: 70% of possible hits = 1,000 points.",
      "Each 5% above or below par: ±36 points.",
      "0 hits scores 0 points."
    ]
  },
  {
    id: "swimming",
    name: "Swimming",
    measure: "Time",
    format: "time",
    range: { from: 58, to: 115, step: 3 },       // 0:58 to 1:55, every 3 seconds
    par: 70,                                      // 1:10
    // Conversion: a time of 1:10 (70 s) scores 1000 points.
    //             Each second faster gains 20 points; each second slower loses 20.
    //             points = 1000 + 20 × (70 − seconds)
    toPoints: function (seconds) {
      return 1000 + 20 * (70 - seconds);
    },
    description: "100m freestyle swim on a 25m course (4 lengths).",
    scoring: [
      "Par: 1:10 = 1,000 points.",
      "Each 0.2 s faster or slower: ±4 points (20 per second)."
    ]
  },
  {
    id: "ocr",
    name: "OCR",
    measure: "Time",
    format: "time",
    range: { from: 29, to: 67, step: 2 },        // 0:29 to 1:07, every 2 seconds
    par: 65,                                      // 1:05
    // Conversion: a time of 1:05 (65 s) scores 1000 points.
    //             Each second faster gains 12 points; each second slower loses 12.
    //             points = 1000 + 12 × (65 − seconds)
    //             A completed course always scores at least 320 points
    //             (8 obstacles × 40 points), so the score is the larger of the two.
    toPoints: function (seconds) {
      return Math.max(320, 1000 + 12 * (65 - seconds));
    },
    description: "70m course containing 8 obstacles.",
    scoring: [
      "Par: 1:05 = 1,000 points.",
      "Each 1/3 s faster or slower: ±4 points (12 per second).",
      "Completing the course scores at least 320 points."
    ]
  },
  {
    id: "laser-run",
    name: "Laser Run",
    measure: "Time",
    format: "time",
    range: { from: 665, to: 950, step: 15 },     // 11:05 to 15:50, every 15 seconds
    par: 800,                                     // 13:20
    // Conversion: a time of 13:20 (800 s) scores 2000 points.
    //             Each second faster gains 4 points (40 points per 10 s);
    //             each second slower loses 4.
    //             points = 2000 + 4 × (800 − seconds)
    toPoints: function (seconds) {
      return 2000 + 4 * (800 - seconds);
    },
    description: "5 shoots and 5 600m runs (athletes time out after 50s in the shoot).",
    scoring: [
      "Par: 13:20 = 2,000 points.",
      "Each second faster or slower: ±4 points."
    ]
  }
];

/* --------------------------------------------------------------------------
   ENTRY COLUMNS
   The two columns people click to enter their scores.
   -------------------------------------------------------------------------- */
var ENTRY_COLUMNS = [
  { id: "current", label: "Current score" },
  { id: "target",  label: "Target score" }
];

/* --------------------------------------------------------------------------
   TITLE BOX (at the top, e.g. for someone's name; included in saved images)
   -------------------------------------------------------------------------- */
var TITLE_BOX = {
  placeholder: "Title (e.g. Name)"
};

/* --------------------------------------------------------------------------
   YOUR OWN ENTRY (the typed-in row at the bottom of each table)
     placeholder - grey hint shown in the empty box
     help        - shown under the table if the entry is in the wrong format
     errorText   - shown in the Points cell if the entry is in the wrong format
   Accepted formats:
     percent - a number from 0 to 100, with or without %, e.g. 75 or 72.5%
     time    - minutes:seconds, e.g. 1:08 or 1:08.5 (seconds 00 to 59)
   -------------------------------------------------------------------------- */
var OWN_ENTRY = {
  percent: { placeholder: "0–100", help: "Type hits as a percentage from 0 to 100, e.g. 75 or 72.5" },
  time:    { placeholder: "m:ss",  help: "Type a time as minutes:seconds, e.g. 1:08 or 1:08.5" },
  errorText: "Error"
};

/* --------------------------------------------------------------------------
   SAVE AS IMAGE
   The button saves the whole calculator as a PNG (uses the html-to-image
   library, loaded in _pages/pentathlon.md).
   -------------------------------------------------------------------------- */
var SCREENSHOT = {
  buttonLabel: "Save as image",
  fileName: "pentathlon-score.png",        // used when the title box is empty
  // When a title is entered, the file is named <title>-<suffix>.png with
  // dashes between all words, e.g. "Jane Smith" -> Jane-Smith-pentathlon-scores.png
  titledSuffix: "pentathlon scores",
  padding: 12                               // white border around the image, in pixels
};


/* ==========================================================================
   CODE (no settings below this line)
   ========================================================================== */

(function () {
  "use strict";

  var root = document.getElementById("pentathlon-calculator");
  if (!root) return;

  // selected.current.fencing = "80" (a table row) or "own" (the typed-in row);
  // undefined = nothing chosen
  var selected = {};
  ENTRY_COLUMNS.forEach(function (col) { selected[col.id] = {}; });

  // Points for a performance: whole numbers, never negative.
  function points(d, value) {
    return Math.max(0, Math.round(d.toPoints(value)));
  }

  // 80 -> "80%", or 68 -> "1:08"
  function formatPerformance(d, value) {
    if (d.format === "percent") return value + "%";
    var secs = value % 60;
    return Math.floor(value / 60) + ":" + (secs < 10 ? "0" : "") + secs;
  }

  // Every performance in the range, top row first.
  function rangeValues(r) {
    var values = [];
    var step = r.to >= r.from ? Math.abs(r.step) : -Math.abs(r.step);
    for (var v = r.from; step > 0 ? v <= r.to : v >= r.to; v += step) values.push(v);
    return values;
  }

  // Read the typed-in box for a discipline.
  // Returns the performance as a number, "" if the box is empty, or null if
  // it is in the wrong format.
  function readOwnEntry(d) {
    var text = document.getElementById("pent-own-" + d.id).value.trim();
    if (text === "") return "";
    var m;
    if (d.format === "percent") {
      m = text.match(/^(\d+(\.\d+)?)\s*%?$/);
      if (!m || Number(m[1]) > 100) return null;
      return Number(m[1]);
    }
    m = text.match(/^(\d+):([0-5]\d(\.\d+)?)$/);
    if (!m) return null;
    return Number(m[1]) * 60 + Number(m[2]);
  }

  // The performance chosen in a column, or "" / null as for readOwnEntry.
  function chosenValue(colId, d) {
    var key = selected[colId][d.id];
    if (key === undefined) return "";
    return key === "own" ? readOwnEntry(d) : Number(key);
  }

  // How to show a performance in the summary table.
  function describe(d, key) {
    if (key !== "own") return formatPerformance(d, Number(key));
    var text = document.getElementById("pent-own-" + d.id).value.trim();
    return d.format === "percent" ? text.replace(/\s*%?$/, "%") : text;
  }

  var parTotal = 0;
  DISCIPLINES.forEach(function (d) { parTotal += points(d, d.par); });

  /* ---------- build the page as an HTML string ---------- */

  // Top line: title box, and the save-as-image button (left out of the image).
  var html = '<div class="pent-header">' +
             '<input type="text" class="pent-title" placeholder="' + TITLE_BOX.placeholder + '"' +
             ' aria-label="' + TITLE_BOX.placeholder + '">' +
             '<div class="pent-toolbar"><button type="button" class="pent-save">' + SCREENSHOT.buttonLabel +
             '</button></div></div>';

  html += '<div class="pent-summary">';

  // Left: entered scores for each discipline, with totals.
  html += '<table class="pent-breakdown"><thead><tr><th>Discipline</th>';
  ENTRY_COLUMNS.forEach(function (col) { html += '<th class="pent-num">' + col.label + '</th>'; });
  html += '</tr></thead><tbody>';
  DISCIPLINES.forEach(function (d) {
    html += '<tr><td>' + d.name + '</td>';
    ENTRY_COLUMNS.forEach(function (col) {
      html += '<td class="pent-num" id="pent-' + col.id + '-' + d.id + '">–</td>';
    });
    html += '</tr>';
  });
  html += '<tr class="pent-total-row"><td>Total</td>';
  ENTRY_COLUMNS.forEach(function (col) {
    html += '<td class="pent-num" id="pent-' + col.id + '-total">0</td>';
  });
  html += '</tr></tbody></table>';

  // Middle: entered totals, current above target.
  html += '<div class="pent-boxes">';
  ENTRY_COLUMNS.forEach(function (col) {
    html += '<div class="pent-box pent-box-' + col.id + '"><div class="pent-box-label">' + col.label +
            '</div><div class="pent-box-value" id="pent-' + col.id + '-box">0</div></div>';
  });
  html += '</div>';

  // Right: standards, highest points at the top.
  var standards = [
    { label: STANDARDS.halfBlue.label, points: STANDARDS.halfBlue.points, className: "pent-box-half" },
    { label: "Par",                    points: parTotal,                  className: "pent-box-par" },
    { label: STANDARDS.fullBlue.label, points: STANDARDS.fullBlue.points, className: "pent-box-full" }
  ];
  standards.sort(function (a, b) { return b.points - a.points; });
  html += '<div class="pent-boxes">';
  standards.forEach(function (s) {
    html += '<div class="pent-box ' + s.className + '"><div class="pent-box-label">' + s.label +
            '</div><div class="pent-box-value">' + s.points + '</div></div>';
  });
  html += '</div></div>';

  // One table per discipline, side by side.
  html += '<div class="pent-grid">';
  DISCIPLINES.forEach(function (d) {
    html += '<section class="pent-card"><h3>' + d.name + '</h3>' +
            '<table class="pent-table"><thead><tr><th>' + d.measure + '</th><th class="pent-num">Points</th>';
    ENTRY_COLUMNS.forEach(function (col) { html += '<th class="pent-pick">' + col.label + '</th>'; });
    html += '</tr></thead><tbody>';
    rangeValues(d.range).forEach(function (value) {
      html += '<tr' + (value === d.par ? ' class="pent-par-row"' : '') + '>' +
              '<td>' + formatPerformance(d, value) + '</td>' +
              '<td class="pent-num">' + points(d, value) + '</td>';
      ENTRY_COLUMNS.forEach(function (col) {
        html += '<td class="pent-pick"><button type="button" class="pent-dot pent-dot-' + col.id + '"' +
                ' data-col="' + col.id + '" data-discipline="' + d.id + '" data-value="' + value + '"' +
                ' aria-pressed="false" aria-label="' + col.label + ': ' + d.name + ' ' +
                formatPerformance(d, value) + '"></button></td>';
      });
      html += '</tr>';
    });

    // Bottom row: type in your own performance.
    var own = OWN_ENTRY[d.format];
    html += '<tr class="pent-own-row"><td><input type="text" class="pent-own" id="pent-own-' + d.id + '"' +
            ' placeholder="' + own.placeholder + '" title="' + own.help + '"' +
            ' aria-label="' + d.name + ': your own ' + d.measure.toLowerCase() + '"></td>' +
            '<td class="pent-num" id="pent-own-points-' + d.id + '">–</td>';
    ENTRY_COLUMNS.forEach(function (col) {
      html += '<td class="pent-pick"><button type="button" class="pent-dot pent-dot-' + col.id + '"' +
              ' data-col="' + col.id + '" data-discipline="' + d.id + '" data-value="own"' +
              ' aria-pressed="false" aria-label="' + col.label + ': ' + d.name + ' own entry"></button></td>';
    });
    html += '</tr></tbody></table>' +
            '<p class="pent-help" id="pent-help-' + d.id + '" hidden>' + own.help + '</p>' +
            '<div class="pent-explainer">' +
            '<p class="pent-explainer-title">Description</p><p>' + d.description + '</p>' +
            '<p class="pent-explainer-title">Scoring</p>';
    d.scoring.forEach(function (line) { html += '<p>' + line + '</p>'; });
    html += '</div></section>';
  });
  html += '</div>';

  root.innerHTML = html;

  /* ---------- clicking a button ---------- */

  root.addEventListener("click", function (event) {
    if (event.target.closest(".pent-save")) { saveImage(); return; }
    var btn = event.target.closest(".pent-dot");
    if (!btn) return;
    var col = btn.dataset.col, id = btn.dataset.discipline, key = btn.dataset.value;
    // Clicking the selected button again clears it.
    selected[col][id] = selected[col][id] === key ? undefined : key;
    update();
  });

  // Typing in an own-entry box recalculates straight away.
  root.addEventListener("input", function (event) {
    if (event.target.classList.contains("pent-own")) update();
  });

  /* ---------- save the calculator as a PNG ---------- */

  // "Jane Smith" -> "Jane-Smith-pentathlon-scores.png"; empty -> the default name.
  // Characters that aren't allowed in file names are removed.
  function imageFileName() {
    var title = root.querySelector(".pent-title").value.replace(/[\\\/:*?"<>|]/g, "").trim();
    if (title === "") return SCREENSHOT.fileName;
    return (title + " " + SCREENSHOT.titledSuffix).split(/\s+/).join("-") + ".png";
  }

  function saveImage() {
    if (typeof htmlToImage === "undefined") {
      alert("Sorry, saving as an image is not available right now.");
      return;
    }
    var pad = SCREENSHOT.padding;
    var scale = 2;   // save at double resolution so the image is sharp
    htmlToImage.toCanvas(root, {
      backgroundColor: "#ffffff",
      pixelRatio: scale,
      // Leave the button itself out of the image.
      filter: function (node) { return !(node.classList && node.classList.contains("pent-toolbar")); }
    }).then(function (picture) {
      // Copy the picture onto a slightly bigger white canvas to add a border.
      var border = pad * scale;
      var canvas = document.createElement("canvas");
      canvas.width = picture.width + 2 * border;
      canvas.height = picture.height + 2 * border;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(picture, border, border);

      var link = document.createElement("a");
      link.download = imageFileName();
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  /* ---------- recalculate totals and highlights ---------- */

  function update() {
    // Own-entry rows: points, or the error text and format help.
    DISCIPLINES.forEach(function (d) {
      var value = readOwnEntry(d);
      document.getElementById("pent-own-points-" + d.id).textContent =
        value === "" ? "–" : value === null ? OWN_ENTRY.errorText : points(d, value);
      document.getElementById("pent-help-" + d.id).hidden = value !== null;
    });

    // Summary table and boxes.
    ENTRY_COLUMNS.forEach(function (col) {
      var total = 0;
      DISCIPLINES.forEach(function (d) {
        var value = chosenValue(col.id, d);
        var cell = document.getElementById("pent-" + col.id + "-" + d.id);
        if (value === "") {
          cell.textContent = "–";
        } else if (value === null) {
          cell.textContent = OWN_ENTRY.errorText;
        } else {
          total += points(d, value);
          cell.textContent = points(d, value) + " (" + describe(d, selected[col.id][d.id]) + ")";
        }
      });
      document.getElementById("pent-" + col.id + "-total").textContent = total;
      document.getElementById("pent-" + col.id + "-box").textContent = total;
    });

    // Highlight the chosen rows.
    root.querySelectorAll(".pent-dot").forEach(function (btn) {
      var on = selected[btn.dataset.col][btn.dataset.discipline] === btn.dataset.value;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.closest("tr").classList.toggle("pent-selected-" + btn.dataset.col, on);
    });
  }
})();
