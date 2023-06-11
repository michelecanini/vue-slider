"use strict";

//VUE.JS
const {createApp} = Vue;                       

//FUNZIONE CREATEAPP
createApp({

        //FUNZIONE DATA + RETURN
        data(){ 
            return{

                //VARIABILE DELLA SLIDE ATTIVA
                activeSlide: 0,
                //VARIABILE AUTOPLAY
                autoplaySlide: null,

                //ARRAY DI OGGETTI CON IMMAGINI TITOLI E TESTI
                    slider: [ 
                        {
                            image: 'img/01.webp',
                            title: 'Marvel\'s Spiderman Miles Morale',
                            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        }, 
                        {
                            image: 'img/02.webp',
                            title: 'Ratchet & Clank: Rift Apart',
                            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        }, 
                        {
                            image: 'img/03.webp',
                            title: 'Fortnite',
                            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        }, 
                        {
                            image: 'img/04.webp',
                            title: 'Stray',
                            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        }, 
                        {
                            image: 'img/05.webp',
                            title: "Marvel's Avengers",
                            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        }
                    ],
                }      
            },

            // FUNZIONE CREATED MEDOTO VUE
            created() {
                this.autoplaySlider();
            }, 

            // SEZIONE METHODS PER LE FUNZIONI (PULSANTI NEXT E PREV)   
            methods: {

                // FUNZIONE NEXT SLIDE
                nextSlide(){
                    this.activeSlide++;

                    if(this.activeSlide > this.slider.length - 1){
                        this.activeSlide = 0;
                    }
                },

                // FUNZIONE PREV SLIDE
                prevSlide(){
                    this.activeSlide--;

                    if(this.activeSlide < 0){
                        this.activeSlide = this.slider.length - 1;
                    }
                },

                // FUNZIONE CLICK SULLA SINGOLA SLIDE
                clickedActiveSlide(index){
                    this.activeSlide = index;
                },

                // FUNZIONE AUTOPLAY CON INTERVALLO TEMPORALE A 3 SECONDI
                autoplaySlider(){
                    this.autoplay = setInterval(() => {
                        this.nextSlide();
                    }, 3000);
                }
                
            }

}).mount('#app');