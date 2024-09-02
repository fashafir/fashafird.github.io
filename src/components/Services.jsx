import React from "react";
import UiUxSvg from "../assets/images/svg/ui-ux.svg";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import VisualBranding from "../assets/images/svg/visual-branding.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";
import GalleryImg2 from "../assets/images/gallery/gallery-img2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
      </section>
      {/* <!-- ====================================== Section Services End ===================================== --> */}
      {/* <!-- ====================================== Section Services Pop Up ===================================== --> */}
      <div id="services-popup" className="popup-container">
        <div className="popup-content popup-content2">
          <Link to="#" className="close">
            &times;
          </Link>
          <img
            className="blog-popup-img1"
            src={GalleryImg2}
            alt="gallery-img8"
          />
          <p className="blog-sit-text">
            Just because we cant get out and about like we normally would,
            doesn’t mean we have to taking pictures. There’s still plenty you
            can do, provided you are prepared to use some imagination. Here are
            a few ideas to keep you shooting until normal life resumes.
          </p>
          <p className="blog-sit-text">
            Most photographers love to shoot the unusual, and you don’t get much
            more unusual than These Unprecedented Times. Right now everything
            counts as out of the ordinary. There are a number of remarkable
            things about these lockdown days that are worth photographing now we
            can remember them when it is all over.
          </p>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <h2 className="simple-steps services-popup-text">What Is Ui/Ux?</h2>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <p className="blog-sit-text">
            treets empty that are usually busy are remarkable and can evoke the
            sense of historical pictures from before the invention of the
            motorcar. Other things that are different at the moment will be
            queues to get into stores and the lines marked out on the floor to
            show how far apart we should be.
          </p>
        </div>
      </div>
      {/* <!-- ====================================== Services PopUp End ===================================== --> */}
    </>
  );
};
export default Services;
