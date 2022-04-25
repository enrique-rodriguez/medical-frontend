import { readable } from "svelte/store";


export const testimonials = readable([
    {
        name: 'Saul Goodman',
        role: 'Ceo &amp; Founder',
        image: 'static/assets/img/testimonials/testimonials-1.jpg',
        review: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
        name: 'Sara Wilsson',
        role: 'Designer',
        image: 'static/assets/img/testimonials/testimonials-2.jpg',
        review: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
        name: 'Jena Karlis',
        role: 'Store Owner',
        image: 'static/assets/img/testimonials/testimonials-3.jpg',
        review: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
        name: 'Matt Brandon',
        role: 'Freelancer',
        image: 'static/assets/img/testimonials/testimonials-4.jpg',
        review: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
        name: 'John Larson',
        role: 'Entrepreneur',
        image: 'static/assets/img/testimonials/testimonials-5.jpg',
        review: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    },
])