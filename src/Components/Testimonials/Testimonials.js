import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'California',
//         img : "https://i.ibb.co/xLKX0cD/Keep-Rugby-Clean-logo-1024x651.jpg"
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'California',
//         img : "https://i.ibb.co/xLKX0cD/Keep-Rugby-Clean-logo-1024x651.jpg"
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aliza Farari',
//         from : 'California',
//         img : "https://i.ibb.co/xLKX0cD/Keep-Rugby-Clean-logo-1024x651.jpg"
//     }
// ]


const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-hamlet-54915.herokuapp.com/reviewsByUser')
            .then(res => res.json())
            .then(data => setTestimonialsData(data))
            // console.log(testimonialsData);
    },[])
    
    return (
        
            
        <section className="testimonials mt-5">
           <div className="container">
               <div className="section-header">
                   <br></br>
                   <br></br>
                   <h2 className="text-primary text-uppercase text-center"><span>Member Reviews</span></h2>
                   <h1>What Our Members <br/> Say </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                       testimonialsData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
       
    );
};

export default Testimonials;