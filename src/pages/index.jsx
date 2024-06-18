import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { Hero, ImageAndText, CtaCards, TextCards, ShowcaseCard, IconLinkCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';
import { EsOpenSource } from '../theme/sections/os-projects';
import { EsOsFreebies } from '../theme/sections/os-freebies';
import Chatbot from '../components/Chatbot';
import '../styles/responsive.css';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const gridItemStyle = {
    width: '100%',
  };

  const imageStyle = {
    width: '100%', // Adjust image width to fit the container
    height: 'auto', // Maintain aspect ratio
    marginTop: '16px', // Space between the image and the text
    borderRadius: '20px'
  };

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName='es-footer-white'
    >
      <div
        className='responsive-container'
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '80vh',
          background: `url(${useBaseUrl('img/homepage/meh.jpg')}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: to add a background overlay for better text readability
          }}
        >
          <div className="content-width">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Transform Your Business with Expert SEO Solutions</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              SPM drives growth for middle-market manufacturing, logistics, and processing companies.
            </p>
            <a
              href="#get-started"
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                backgroundColor: '#9e8352',
                border: 'none',
                borderRadius: '5px',
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Get a FREE Consultation
            </a>
          </div>
        </div>
      </div>

      {/* blue: #5B77AF */}
      {/* green: #345541 */}
      <div style={{ paddingTop: "120px", backgroundColor: '#F5F9FF', color: '#5B77AF' }}>
        <ImageAndText
          title='SEO that CONVERTS'
          imageUrl='/img/homepage/meh2.jpg'
          gray
        >
          SPM Solutions makes SEO that CONVERTS painless.
          <br /> <br />
          At SPM Small Business Solutions, our mission is to empower middle-market manufacturing,
          logistics, and processing companies by enhancing their online visibility and driving
          sustainable growth. We are committed to delivering tailored SEO services and
          innovative digital solutions that meet the unique needs of our clients.
          By leveraging our industry expertise and cutting-edge technology,
          we strive to create lasting partnerships that foster growth and success for every business we serve.
          <br /> <br />
          You&apos;ll never want to go back!
        </ImageAndText>
      </div>
      <div id='get-started' style={{ color: '#345541' }}>
        <CtaCards
          title='Guaranteed results, or your money back'
          subtitle="Choose SPM Small Business Solutions and experience the difference our structured process and comprehensive features can make for your business. Let us help you achieve your digital marketing goals and drive sustainable growth in the competitive online landscape."
          cards={[
            {
              icon: icons.frontendDevelopment2,
              text: 'Advanced SEO Tools',
            },
            {
              icon: icons.marketing,
              text: 'Industry Expertise',
            },
            {
              icon: icons.chartAnaytics1,
              text: 'Data-driven Approaches',
            },
            {
              icon: icons.marketingSpecialist,
              text: 'Customized Solutions',
            }
          ]}
        />
      </div>
      <div id='get-started' style={{ color: '#5B77AF', backgroundColor: '#F5F9FF' }}>
        <TextCards
          title='SEO Services'
          subtitle="Our goal is to drive your online growth and ensure your business stands out in the competitive digital landscape."
          cards={[
            {
              title: 'On-Page SEO',
              subtitle: "We enhance your website's content to ensure it is relevant, engaging, and optimized for targeted keywords. We ensure your URLs are clean, descriptive, and SEO-friendly to improve your site's visibility and user experience. Our team creates a strategic internal linking structure to help search engines understand the hierarchy of your content and improve site navigation for users.",
            },
            {
              title: 'Off-Page SEO',
              subtitle: "Link Building: We develop high-quality backlinks from reputable websites in your industry to boost your domain authority and search engine rankings. By leveraging social media platforms, we enhance your online presence and drive traffic to your website. Our experts create and publish valuable content on authoritative websites to increase your brand's exposure and generate quality backlinks.",
            },
            {
              title: 'Technical SEO',
              subtitle: "We optimize your website's loading speed to improve user experience and search engine rankings. Our team ensures your website is fully responsive and optimized for mobile devices, enhancing usability and search performance. We make sure search engines can efficiently crawl and index your site by optimizing your XML sitemap, robots.txt file, and site architecture.",
            },
            {
              title: 'Keyword Research',
              subtitle: "We analyze your competitors' keyword strategies to identify opportunities for your business. Our team identifies and targets long-tail keywords that are highly relevant to your niche, driving more qualified traffic to your site. We map targeted keywords to specific pages on your website to ensure optimal relevancy and SEO performance."
            },
          ]}
        />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', color: '#345541', marginTop: '60px' }}>
          <h2>Our Process</h2>
        </div>
        <div className="grid-container">
          <div style={gridItemStyle}>
            <h3>1. Discovery</h3>
            <h5>Understanding Client Needs and Goals</h5>
            <img src="/img/spm/discovery.jpg" alt="Discovery" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3>2. Strategize</h3>
            <h5>Crafting Customized SEO Plans</h5>
            <img src="/img/spm/developstrategy.jpg" alt="Strategy Development" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3>3. Implementation</h3>
            <h5>Executing the Custom SEO Strategy</h5>
            <img src="/img/spm/implementation.jpg" alt="Implementation" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3>4. Monitor & Report</h3>
            <h5>Regular Updates & Performance Tracking</h5>
            <img src="/img/spm/reportmonitor.jpg" alt="Monitoring & Reporting" style={imageStyle} />
          </div>
        </div>
      </div>
      <Chatbot />
    </Layout>
  );
}
