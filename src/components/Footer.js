import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>Send me an e-mail or get in contact with me through social media.</p>
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
          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url, info } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{info}</a>
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
  );
}
