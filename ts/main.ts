import { Serie } from './serie.js';
import { series } from './data.js';

const TBody: HTMLElement = document.getElementById('series')!; 
const seasonsAverageSpan: HTMLElement = document.getElementById('seasonsAverage')!; 
 

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
        <td><a id="${s.id}" href="#">${s.name}</a></td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>`;
            TBody.appendChild(trElement);
            const btn: HTMLElement = document.getElementById((s.id).toString())!;
            btn.addEventListener("click", function (event) {
                const element_img: HTMLElement = document.getElementById('img-serie')!; 
                element_img.setAttribute('src', s.image);
                const element_title: HTMLElement = document.getElementById('title-serie')!; 
                element_title.innerText = s.name;
                const element_description: HTMLElement = document.getElementById('description-serie')!; 
                element_description.innerText = s.description;
                const element_link: HTMLElement = document.getElementById('link-serie')!; 
                element_link.innerText = s.url;
                element_link.setAttribute('href', s.url);
            });
        });
    }
    
function averaSeasons(series: Serie[]): string {
    let seasonsCounter: number = 0;
    let numberOfSeries: number = 0;
    series.forEach(function (serie) {
        seasonsCounter = seasonsCounter + serie.seasons;
        numberOfSeries++;
    });
    let result: number = seasonsCounter / numberOfSeries;
    return result.toFixed(2);
}

function renderSeasonsAverage(): void {
    let result: string = averaSeasons(series);
    seasonsAverageSpan.innerText = result;
}


    
    
renderSeriesInTable(series);
renderSeasonsAverage();
