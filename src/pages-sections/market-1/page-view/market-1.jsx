import { Fragment } from "react"; 
// GLOBAL COMPONENTS

import Setting from "components/settings";
import Newsletter from "components/newsletter"; 
// LOCAL CUSTOM COMPONENTS

import Section1 from "../section-1"
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";
import Section10 from "../section-10";
import Section11 from "../section-11";
import Section12 from "../section-12";
import Section13 from "../section-13";
import Section14 from '../section-14';
import Section15 from '../section-15';
import Section16 from "../../medical/section-6";

import api from "utils/__api__/grocery-2";
export default async function MarketOnePageView() {
  const testimonials = await api.getTestimonials();
  return <Fragment>
      {
      /* HERO SLIDER SECTION */
    }
      <Section1 />

      {
      /* CATEGORIES */
    }
      <Section9 />

      {
        /** Our Brands */
      }

      <Section14 />

      {
      /* FLASH DEALS SECTION */
    }
      <Section2 />

{
  // Best Offers
}

 <Section15 />


 {
      /* TOP RATED PRODUCTS */
    }
      <Section4 />


      {
      /* CAR LIST */
    }
      <Section6/>

      {
      /* MORE FOR YOU */
    }
      <Section10 />

      {
      /* SERVICE CARDS */
    }
      <Section11 />

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter />
      {
        /**
         * Testimonial and Blog
         */
      }
      <Section16 testimonials={testimonials}/>
    </Fragment>;
}