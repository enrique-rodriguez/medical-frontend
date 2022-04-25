import { readable } from "svelte/store";


export const services = readable([
    {
        name: 'Lorem Ipsum',
        description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
        icon: 'fas fa-heartbeat'
    },
    {
        name: 'Sed ut perspiciatis',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
        icon: 'fas fa-pills'
    },
    {
        name: 'Magni Dolores',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
        icon: 'fas fa-user'
    },
    {
        name: 'Dele cardo',
        description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
        icon: 'fas fa-wheelchair'
    },
    {
        name: 'Divera don',
        description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
        icon: 'fas fa-notes-medical'
    },
    {
        name: 'Nemo Enim',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
        icon: 'fas fa-dna'
    },
])