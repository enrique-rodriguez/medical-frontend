import { readable } from "svelte/store";


export const doctors = readable([
    {
        id: 1,
        name: 'Walter White',
        specialty: 'Chief Medical Officer',
        image: 'static/assets/img/doctors/doctors-1.jpg',
    },
    {
        id: 2,
        name: 'Sarah Jhonson',
        specialty: 'Anesthesiologist',
        image: 'static/assets/img/doctors/doctors-2.jpg',
    },
    {
        id: 3,
        name: 'William Anderson',
        specialty: 'Cardiology',
        image: 'static/assets/img/doctors/doctors-3.jpg',
    },
    {
        id: 4,
        name: 'Amanda Jepson',
        specialty: 'Neurosurgeon',
        image: 'static/assets/img/doctors/doctors-4.jpg',
    },
]);