import { initializeTheme } from './theme.js';
import { initializeNavigation } from './navigation.js';
import { initializeCarousel } from './carousel.js';
import { initializeAccordion } from './accordion.js';
import { initializeMap } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeNavigation();
    initializeCarousel();
    initializeAccordion();
    initializeMap();

    const dajout = document.getElementById("dajout");

    dajout.addEventListener('click', () => {
        const url = 'https://rape-gaorui.chih-hao.xyz'
        window.location.href = url
    })

});