import hero from '../Images/icons8-gift-64.png';
import hero2 from '../Images/icons8-sparkling-48.png';

function Bonus() 
{
    return(
      <div className="bonus-parent justify-content-center py-3">
        <div className="bonus-child text-center text-white">
        <img src={hero2} className="img-fluid gift-box2"/>
            <img src={hero2} className="img-fluid gift-box2"/><br></br>
            <img src={hero} className="img-fluid gift-box"/>
            <h6 className='p-2 fw-light fs-5' data-aos="zoom-in" data-aos-delay="3000" data-aos-duration="3000" data-aos-easing="ease-in-out"><i class="bi bi-git"></i> Free Git & GitHub Course<br></br><i class="bi bi-cloud"></i> Free Hosting & Deployment</h6>
        </div>
      </div>
  );
}

export default Bonus;