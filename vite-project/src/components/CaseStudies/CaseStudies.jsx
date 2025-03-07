import React from 'react';
import './CaseStudies.css'; // Import file CSS
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets"


const CaseStudies = () => {

  return (
    <div className='case_container'>
      <div className="case_card">
        <p>
          For a local restaurant, we implemented
          a targeted PPC campaign that resulted in a 50%
          increase in website traffic and a 25% increase in sales.
        </p>
        <Link>Lean more<img src={assets.case1} /></Link>
      </div>
      <div className="case_card">
        <p>
          For a B2B software company, we developed an SEO strategy
          that resulted in a first page ranking for key keywords
          and a 200% increase in organic traffic.
        </p>
        <Link>Lean more<img src={assets.case1} /></Link>
      </div>
      <div className="case_card">
        <p>
          For a national retail chain, we created a social
          media marketing campaign that increased followers
          by 25% and generated a 20% increase in online sales.
        </p>
        <Link><label>Learn More</label><img src={assets.case1} /></Link>
      </div>
    </div>
  );
};

export default CaseStudies;