import { Serie } from './serie.js';
import { series } from './data.js';

const TBody: HTMLElement = document.getElementById('series')!; 
const seasonsAverageSpan: HTMLElement = document.getElementById('seasonsAverage')!; 

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
        `;
            TBody.appendChild(trElement);
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