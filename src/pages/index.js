import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';

import profile from '../assets/images/profile.jpg';

import integration from '../assets/images/integration.jpg';
import playas from '../assets/images/playas.jpg';
import informate from '../assets/images/informate.jpg';
import situame from '../assets/images/situame.jpg';

import logoUAL from '../assets/images/logo-ual.jpg';
import logoEDPS from '../assets/images/logo-edps.png';
import logoIBM from '../assets/images/logo-ibm.png';
import logoAyuntamiento from '../assets/images/logo-ayuntamiento.png';
import logoWroclaw from '../assets/images/logo-wroclaw.png';

import flagEnglish from '../assets/images/english.png';
import flagFrench from '../assets/images/french.png';
import flagSpanish from '../assets/images/spanish.png';
import flagJapanese from '../assets/images/japanese.png';

import {
  IntlProvider,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl';
import messages_en from '../translations/en.json';
import messages_es from '../translations/es.json';
const messages = {
  en: messages_en,
  es: messages_es,
};
let language =
  typeof window !== 'undefined' && navigator.language.split(/[-_]/)[0] === 'es'
    ? 'es'
    : 'en';

const IndexPage = () => (
  <IntlProvider key={language} locale={language} messages={messages[language]}>
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fa-laptop"></span>
          </div>
          <h2>
            <FormattedMessage id="heading" />
          </h2>
          <p>
            <FormattedMessage id="subHeading" />
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="footer">
                <a href="#footer" className="button primary">
                  <FormattedMessage id="contact" />
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major">
                <FormattedMessage id="education" />
              </h2>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="degree" />
                  </h3>
                  <img
                    src={logoUAL}
                    className="flag"
                    alt="logo university Almeria"
                  />
                  <p>
                    <FormattedMessage id="almeriaUni" />
                  </p>
                  <img
                    src={logoWroclaw}
                    className="flag"
                    alt="logo university Wroclaw"
                  />
                  <p>
                    <FormattedMessage id="wroclawUni" />
                  </p>
                  <div>
                    <h3>
                      <FormattedMessage id="experience" />
                    </h3>

                    <img src={logoIBM} className="flag" alt="logo IBM" />
                    <p>
                      <FormattedMessage id="infoIBM" />
                    </p>
                  </div>
                  <div>
                    <img src={logoEDPS} className="flag" alt="logo EDPS" />
                    <p>
                      <FormattedMessage id="infoEDPS" />
                    </p>
                  </div>
                  <div>
                    <img
                      src={logoAyuntamiento}
                      className="flag"
                      alt="logo Ayuntamiento El Ejido"
                    />
                    <p>
                      <FormattedMessage id="infoEjido" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/#" className="image">
              <img src={profile} alt="My face" />
            </a>
            <div className="content">
              <h2 className="major">
                <FormattedMessage id="about" />
              </h2>
              <p>
                <FormattedMessage id="presentation" />
              </p>

              <div>
                <h3>
                  <FormattedMessage id="languages" />
                </h3>
                <p>
                  <img src={flagSpanish} className="flag" alt="flag Spain" />
                  <FormattedHTMLMessage id="spanish" />
                </p>

                <p>
                  <img src={flagEnglish} className="flag" alt="flag UK" />
                  <FormattedHTMLMessage id="english" />
                </p>

                <p>
                  <img src={flagFrench} className="flag" alt="flag France" />
                  <FormattedHTMLMessage id="french" />
                </p>

                <p>
                  <img src={flagJapanese} className="flag" alt="flag Japan" />
                  <FormattedHTMLMessage id="japanese" />
                </p>
              </div>
              {/* <a href="/#" className="special">
              Learn more
            </a> */}
            </div>
          </div>
        </section>

        <section id="four" className="wrapper  style1">
          <div className="inner">
            <h2 className="major">
              <FormattedMessage id="projects" />
            </h2>
            <p>
              <FormattedMessage id="infoProjects" />
            </p>
            <section className="features">
              <article>
                <a
                  href="https://github.com/carlosparreno/IntegrationOnTheGlass"
                  target="_blank"
                  className="image"
                  rel="noopener noreferrer"
                >
                  <img src={integration} alt="Project" />
                </a>
                <h3 className="major">Integration on the glass</h3>
                <p>
                  <FormattedMessage id="infoIntegration" />
                </p>
                <a
                  href="https://github.com/carlosparreno/IntegrationOnTheGlass"
                  target="_blank"
                  className="special"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="more" />
                </a>
              </article>
              <article>
                <a
                  href="https://play.google.com/store/apps/details?id=es.aytoelejido.playas"
                  target="_blank"
                  className="image"
                  rel="noopener noreferrer"
                >
                  <img src={playas} alt="Project" />
                </a>
                <h3 className="major">Playas El Ejido</h3>
                <p>
                  <FormattedMessage id="infoPlayas" />
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=es.aytoelejido.playas"
                  target="_blank"
                  className="special"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="more" />
                </a>
              </article>
              <article>
                <a
                  href="https://play.google.com/store/apps/details?id=com.elejido.eventos"
                  target="_blank"
                  className="image"
                  rel="noopener noreferrer"
                >
                  <img src={informate} alt="Project" />
                </a>
                <h3 className="major">Informate El Ejido</h3>
                <p>
                  <FormattedMessage id="infoInformate" />
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.elejido.eventos"
                  target="_blank"
                  className="special"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="more" />
                </a>
              </article>
              <article>
                <a
                  href="https://play.google.com/store/apps/details?id=com.situame.autobuses"
                  target="_blank"
                  className="image"
                  rel="noopener noreferrer"
                >
                  <img src={situame} alt="Project" />
                </a>
                <h3 className="major">Sitúame El Ejido</h3>
                <p>
                  <FormattedMessage id="infoSituame" />
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.situame.autobuses"
                  target="_blank"
                  className="special"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="more" />
                </a>
              </article>
            </section>
            {/*             <ul className="actions">
              <li>
                <a href="/#" className="button">
                  Browse All
                </a>
              </li>
            </ul> */}
          </div>
        </section>
      </section>
      <section id="footer">
        <div className="inner">
          <h2 className="major">
            <FormattedMessage id="touch" />
          </h2>
          <p>
            <FormattedMessage id="touchInfo" />
          </p>
          {/*  <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form> */}
          <ul className="contact">
            {config.socialLinks.map(social => {
              const { icon, url, info } = social;
              return (
                <li className={`${icon}`} key={url}>
                  <a target="_blank" href={url} rel="noopener noreferrer">
                    {info}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="copyright">
            <li>Template: &copy; Solid State. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
            <li>
              Template url:{' '}
              <a href="https://github.com/anubhavsrivastava/gatsby-starter-solidstate/">
                github.com/anubhavsrivastava/gatsby-starter-solidstate
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  </IntlProvider>
);

export default IndexPage;
