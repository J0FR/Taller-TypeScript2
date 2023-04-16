import { series } from './data.js';
var TBody = document.getElementById('series');
var seasonsAverageSpan = document.getElementById('seasonsAverage');
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n        <td>").concat(s.name, "</td>\n        <td>").concat(s.channel, "</td>\n        <td>").concat(s.seasons, "</td>\n        ");
        TBody.appendChild(trElement);
    });
}
function averaSeasons(series) {
    var seasonsCounter = 0;
    var numberOfSeries = 0;
    series.forEach(function (serie) {
        seasonsCounter = seasonsCounter + serie.seasons;
        numberOfSeries++;
    });
    var result = seasonsCounter / numberOfSeries;
    return result.toFixed(2);
}
function renderSeasonsAverage() {
    var result = averaSeasons(series);
    seasonsAverageSpan.innerText = result;
}
renderSeriesInTable(series);
renderSeasonsAverage();
