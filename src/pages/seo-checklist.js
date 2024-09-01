import React from 'react';
import Layout from '@theme/Layout';
import '../theme/checklist.css';

const imageStyle = {
  width: '100%', // Adjust image width to fit the container
  height: 'auto', // Maintain aspect ratio
  marginTop: '16px', // Space between the image and the text
  borderRadius: '20px'
};

const SEOChecklist = () => {
  return (
    <Layout
      title="Download Your Free SEO Checklist"
      description="Get our free SEO checklist to boost your website's rankings. Perfect for WordPress, React, and other platforms."
    >
      <header className="hero">
        <div className="container">
          <h1>Free SEO Checklists</h1>
          <h3>Start optimizing your website today with our free SEO Checklists</h3>
        </div>
      </header>
      <main>
        <section className="benefitsSection">
          <div className="benefits-container">
            <div className='ebook-image-div'>
              <img
                src="img/checklist/searches-to-sales.png"
                alt="Searches to Sales"
                className='ebook-image'
              />
            </div>
            <div className='benefits-div'>
              <h2>
                Unlock the Secrets to Higher SEO Rankings!
              </h2>
              <p style={{fontSize: '1.3rem', textAlign: 'left'}}>Our expert guide covers everything you need to crush your SEO goals:</p>
              <ul class="custom-list">
                <li>Optimize your website for higher search rankings.</li>
                <li>Tailored tips for WordPress, React, and other popular platforms.</li>
                <li>Improve site speed, mobile-friendliness, and content quality.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="download" className="emailCapture">
          <div className="email-container">
            <h2>Get Your Free SEO Checklists</h2>
            <p style={{margin: '12px 0'}}>Enter your email to get instant access to the SEO checklists and stay updated with our latest SEO tips.</p>
            <div id="mc_embed_signup">
              <form
                action="https://yourdomain.us1.list-manage.com/subscribe/post?u=uniqueid&amp;id=audienceid"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <input
                    type="name"
                    name="NAME"
                    className="nameInput"
                    id="mce-NAME"
                    placeholder="Firstname"
                    required
                  />
                  <input
                    type="email"
                    name="EMAIL"
                    className="emailInput"
                    id="mce-EMAIL"
                    placeholder="Email"
                    required
                  />
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_uniqueid_audienceid"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="submitButton"
                    >
                      Download Now
                    </button>
                  </div>
                </div>
                <div className="tos-checkbox">
                <p>
                  All emails include an unsubscribe link. You may opt-out at any time. 
                  See our&nbsp;<a href="your-privacy-policy-link" target="_blank">Privacy Policy</a>
                  &nbsp;and&nbsp;<a href="your-tos-link" target="_blank">Terms & Conditions</a>
                  &nbsp;for your rights under GDPR.
                </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Need help with SEO? <a href="/contact">Contact us</a> for a consultation!</p>
        </div>
      </footer> */}
    </Layout>
  );
};

export default SEOChecklist;
