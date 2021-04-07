'use strict';

var gSkilles = [
    {
        name: 'Python',
        pracent: '80%',
        color: 'bg-info'
    },
    {
        name: 'HTML5',
        pracent: '70%',
        color: 'bg-info'

    },
    {
        name: 'CSS3',
        pracent: '70%',
        color: 'bg-info'

    },
    {
        name: 'JavaScript',
        pracent: '80%',
        color: 'bg-info'
    },
    {
        name: 'Linux',
        pracent: '50%',
        color: 'bg-danger'
    },
    {
        name: 'System Integraton',
        pracent: '100%',
        color: 'bg-success'
    },
    {
        name: 'Node.JS',
        pracent: '50%',
        color: 'bg-danger'
    },
    {
        name: 'Express',
        pracent: '50%',
        color: 'bg-danger'
    },
    {
        name: 'MongoDB',
        pracent: '50%',
        color: 'bg-danger'
    },

]

var gProjects = [
    {
        minImage: './img/portfolio/01-thumbnail.jpg',
        maxImage: './img/portfolio/01-thumbnail-max.jpg',
        name: 'Memory Monster',
        category: 'Game',
        description: 'Memory monster game, flip 2 pare of cards until all the cars are flliped!',
        link: 'https://alexbil207.github.io/MemoryMonstersGame/'
    },
    {
        minImage: './img/portfolio/02-thumbnail.jpg',
        maxImage: './img/portfolio/02-thumbnail-max.jpg',
        name: 'Touch-The-Nums',
        category: 'Game',
        description: 'Click on The Given number as fast as you can!',
        link: 'https://alexbil207.github.io/touch-nums/'
    },
    {
        minImage: './img/portfolio/04-thumbnail.jpg',
        maxImage: './img/portfolio/04-thumbnail-max.jpg',
        name: 'Mine Sweeper',
        category: 'Game',
        description: 'My Variation of Minesweeper',
        link: 'https://alexbil207.github.io/minesweeper/'
    },
    {
        minImage: './img/portfolio/03-thumbnail.jpg',
        maxImage: './img/portfolio/03-thumbnail-max.jpg',
        name: 'Book Shop',
        category: 'Shop Management',
        description: 'CRUDL Shop Project',
        link: 'https://alexbil207.github.io/Book-Shop/'
    },

]


function getSkilles() {
    return gSkilles;
}
function getProjects() {
    return gProjects;
}

