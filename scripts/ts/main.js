import { series } from './data.js';
var TBody = document.getElementById('series');
var seasonsAverageSpan = document.getElementById('seasonsAverage');
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n        <td><a id=\"").concat(s.id, "\" href=\"#\">").concat(s.name, "</a></td>\n        <td>").concat(s.channel, "</td>\n        <td>").concat(s.seasons, "</td>");
        TBody.appendChild(trElement);
        var btn = document.getElementById((s.id).toString());
        btn.addEventListener("click", function (event) {
            var element_img = document.getElementById('img-serie');
            element_img.setAttribute('src', s.image);
            var element_title = document.getElementById('title-serie');
            element_title.innerText = s.name;
            var element_description = document.getElementById('description-serie');
            element_description.innerText = s.description;
            var element_link = document.getElementById('link-serie');
            element_link.innerText = s.url;
            element_link.setAttribute('href', s.url);
        });
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
