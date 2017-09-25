

import { Component } from '@angular/core';

@Component({
    selector: 'app-snakes-carousel',
    templateUrl: 'snakes-carousel.component.html',
    styleUrls: ['snakes-carousel.component.css']
})

export class SnakesCarouselComponent {

    snakes = SNAKES;

}

const SNAKES: SnakeInfo [] = [
    {
        img: 'http://deskbg.com/s3/wpp/25/25912/yellow-snake-desktop-background.jpg',
        header: 'This snake is really yellow',
        subtitle: 'Yellow snakes are always angry because they cant believe of all colours they were born yellow'
    },
    {
        img: 'https://wallpaperscraft.com/image/snake_tongue_scales_venomous_78406_1920x1080.jpg',
        header: 'This snake is really black',
        subtitle: 'Since snakes dont have hands they use their tongues to communicate in SSL (Snake Sign Language)'
    },
    {
        img: 'https://images5.alphacoders.com/391/thumb-1920-391746.jpg',
        header: 'This is a swimming snake',
        // tslint:disable-next-line:max-line-length
        subtitle: 'In the wild snakes will pretend their tongues are legs and walk them along the water, this has never been observed in captivity'
    }
];

class SnakeInfo {
    img: string;
    header: string;
    subtitle: string;
}
