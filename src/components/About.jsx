import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">Tentang Saya.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Halo, nama saya <span>Fasha Firdaus</span> Memiliki pengalaman dalam menangani project perusahaan 
              serta pengalaman kerja dan internship sebagai Marketing. Fasha Firdaus adalah seorang yang keratif, 
              tertarik bekerja soma dengan tim dan dapat diandalkan 
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Nama</p>
          <p className="about-detail-info">Fasha Firdaus</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:firdausfasha@gmail.com'"
          >
            firdausfasha@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Instagram</p>
          <p className="about-detail-info">@fashaafirdaus</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Bahasa</p>
          <p className="about-detail-info">Indonesia, English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
