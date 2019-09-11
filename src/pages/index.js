import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import logoUAL from '../assets/images/logo-ual.jpg';
import logoEDPS from '../assets/images/logo-edps.png';
import logoIBM from '../assets/images/logo-ibm.png';
import logoAyuntamiento from '../assets/images/logo-ayuntamiento.png';
import logoWroclaw from '../assets/images/logo-wroclaw.png';

import flagEnglish from '../assets/images/english.png';
import flagFrench from '../assets/images/french.png';
import flagSpanish from '../assets/images/spanish.png';
import flagJapanese from '../assets/images/japanese.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-laptop"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions">
          <li>
            <a href="#footer" className="button primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          {/* <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a> */}
          <div className="content">
            <h2 className="major">Skills</h2>
            <div>
              <div>
                <h3>Graduado en Ingenieria Técnica de Sistemas</h3>
                <img src={logoUAL} className="flag" />
                <p> 2007-2010 / 2011-2013 Universidad de Almería</p>
                <img src={logoWroclaw} className="flag" />
                <p> 2010-2011 Universidad Tecnológica de Wroclaw, Polonia</p>
                <div>
                  <h3>Experiencia laboral</h3>

                  <img src={logoIBM} className="flag" />
                  <p>
                    Programa de prácticas en IBM Bruselas, Belgica. Desarrollo
                    de un proyecto interno para el departamento de software de
                    Benelux.
                  </p>
                </div>
                <div>
                  <img src={logoEDPS} className="flag" />
                  <p>
                    Programa de practicas en la Comisión Europa – Oficina del
                    Supervisor Europeo de Protección de Datos Trabajo con el
                    área de normativa de IT.
                  </p>
                </div>
                <div>
                  <img src={logoAyuntamiento} className="flag" />
                  <p>
                    Analista y diseñador de software – Ayuntamiento de El Ejido.
                    Diseño y programación de soluciones para dispositivos
                    móviles.
                  </p>
                </div>
              </div>
            </div>

            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About me</h2>
            <p>
              Software developer - Frontend, Backend and Mobile Apps. I love to
              live different experiences in different countries. Currently based
              in Tokyo, enjoying a new culture and getting to know the software
              developing world in this country. Scroll down for more information
              about me, or click to see my contact information.
            </p>

            <div>
              <h3>Idiomas</h3>
              <p>
                <img src={flagSpanish} class="flag" />
                <strong>Español:</strong> Nativo
              </p>

              <p>
                <img src={flagEnglish} class="flag" />
                <strong>Ingles:</strong> Fluido. Certificado de inglés avanzado
                por la Universidad de Cambridge (C2). TOEFL iBT Test.
              </p>

              <p>
                <img src={flagFrench} class="flag" />
                <strong>Frances:</strong> Básico.
              </p>

              <p>
                <img src={flagJapanese} class="flag" />
                <strong>Japones:</strong> Principiante!
              </p>
            </div>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      {/* <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section> */}

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Proyectos</h2>
          <p>
            Ya que todos mis proyectos importantes han sido para uso privado no
            puedo compartir su codigo. Actualmente estoy en proceso de crear
            algunos proyectos propios, espero tener cosas importantes que
            compartir pronto!
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
