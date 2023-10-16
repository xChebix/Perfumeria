import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function About(){
    return (
        <Fragment>
            <div className="text-center">
                <h1 >About Us</h1>
                <img src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg" alt="" />
                <h2 className="mt-5">Welcome to Perfumeria – Where Fragrance Meets Elegance</h2>
                <p className="mt-5">At Perfumeria, we believe that the power of scent is unparalleled. Perfumes are not just fragrances; they are expressions of personality, style, and individuality. With a passion for perfumery that spans generations, we have made it our mission to craft the finest scents that leave an indelible mark.</p>
                
                <h2 className="mt-5">Exquisite Ingredients, Ethical Practices</h2>
                <p className="mt-5">We take pride in using only the highest-quality, sustainably sourced ingredients. From delicate florals to rare woods and spices, our perfumers carefully select each element to ensure that your scent is not just alluring but environmentally responsible.</p>

                <h2 className="mt-5">Unveil Your Aura</h2>
                <p className="mt-5">A fragrance should reflect who you are, and that's why our range offers diversity. Whether you prefer floral, woody, oriental, or citrus notes, our perfumes will help you express your mood and personality, turning every day into an unforgettable experience.</p>

                <h2 className="mt-5">Uncompromising Quality</h2>
                <p className="mt-5">Quality is our promise, and it's evident in the longevity and unique character of our fragrances. Every perfume is a blend of science and art, delivering an experience that lingers long after you've left the room.</p>
            </div>
        </Fragment>
    );
}
export default About;