import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/adobe-xd-img.png";
import SketchImg from "../assets/images/sktech-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/winner-award.png";
import WinnerAward2 from "../assets/images/winner-award2.png";
import WinnerAward3 from "../assets/images/winner-award3.png";
import WinnerAward4 from "../assets/images/winner-award4.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Pendidikan.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">D4 Manajemen Produksi Media</p>
                <p className="cursus university">
                  Universitas Padjadjaran / 2018 - 2022
                </p>
                <p className="cursus"> ● IPK: 3.69</p>
                <p className="cursus"> ● Staf Dokumentasi PMB FIKOM UNPAD 2019</p>
                <p className="cursus"> ● Ka. Koordinator Dokumentasi PMB FIKOM UNPAD 2019</p>
                <p className="cursus"> ● Ka. Div. Multimedia DIALOG 2020 (PMB FIKOM UNPAD)</p>
                <p className="cursus"> ● Staf Dept. Media dan Informasi BEM FIKOM UNPAD 2020</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Pengalaman.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">BIRO KLASIFIKASI INDONESIA (PERSERO)</p>
                <p className="cursus university">Staf Pengembangan Talenta dan Budaya | 2023 - sekarang</p>
                <p className="cursus">
                Merancang komunikasi visual sesuai rencana kerja budaya perusahaan IDSurvey untuk media konvensional 
                dan/atau platform digital; mengembangkan identitas visual perusahaan atau merek, agar pesan dapat secara 
                tepat dan menarik terkomunikasikan pada target audiens yang dituju.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="cursus university">Staf DKV Manajemen Holding | Oktober 2022 - September 2023</p>
                <p className="cursus">
                ● Menyiapkan segala bentuk materi multimedia sebagai kanal komunikasi internal maupun eksternal untuk kepentingan perusahaan.
                </p>
                <p className="cursus">    

                </p>
                <p className="cursus">● Ikut serta dalam proses pelaksanaan kegiatan utama lingkup kerja Departemen Manajemen Holding.</p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">BINA PERTIWI (MEMBER OF ASTRA)</p>
                <p className="cursus university">Marketing Communication Intern | Juni - September 2021 </p>
                <p className="cursus">
                ● Memproduksi konten visual berupa promosi produk, katalog, flyer dan brosur untuk diunggah dimedia sosial atau sebagai keperluan desain di Divisi Marketing. 
                </p>
                <p className="cursus">● Telah berkontribusi dengan membuat 18 aset grafis untuk campaign konten visual</p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">FIX INDONESIA</p>
                <p className="cursus university">Strategic Marketing Intern | Maret - Mei 2021 </p>
                <p className="cursus">
                Membantu membuat campaign sebagai upaya meningkatkan insight, reach dan engagement pada media sosial dari website Fix Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
        </div>
        <div id="progress" ref={progressRef}>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Software Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up">
            <img src={FigmaImg} alt="figma-img" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>AFTER EFFECT</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up">
            <img src={PhotoShopImg} alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>PHOTOSHOP</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>INDESIGN</p>
            </div>
          </div>
          <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>OBS</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>ILLUSTRATOR</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
    </>
  );
};
export default Resume;
