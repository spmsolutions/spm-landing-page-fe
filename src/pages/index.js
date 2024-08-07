import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { Hero, ImageAndText, CtaCards, TextCards, ShowcaseCard, IconLinkCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';
import Chatbot from '../components/Chatbot';
import '../theme/responsive.css';

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
          background: `url(${useBaseUrl('img/homepage/hero-image.jpg')}) no-repeat center center`,
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Searches into Sales</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            SPM Solutions drives new customers for manufacturing and processing companies.
            </p>
            <a
              href="#get-started"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: '#9e8352',
                border: 'none',
                borderRadius: '5px',
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Get a FREE website analysis
            </a>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "120px", backgroundColor: '#F5F9FF', color: '#5B77AF' }}>
        <ImageAndText
          title='Dominate Online Presence'
          imageUrl='/spm-landing-page-fe/img/homepage/seo-image.jpg'
alt="SPM SEO"
          gray
        >
          SPM Solutions is an all-encompassing online marketing company. With our roots in Search Engine Optimization,
           we have expanded to ensure we provide a comprehensive SEO approach allowing our customers a more comprehensive 
           and impactful experience. 
          <br /> <br />
          We work with companies with deep partnerships in their industry. Too often online presence gets overlooked 
          when operating in an industry such as ours. We have deeply researched business-to-business buying 
          trends within the manufacturing and processing industries. Through this, we identified that online 
          presence is a key metric to determine organic lead generation and overall close rate. Your partners 
          are your partners because of mutual respect in each other's authority within your area of expertise. 
          We bring your earned and deserved authority to the front lines of the online marketplace.
          <br /> <br />
          You&apos;ll never look back!
        </ImageAndText>
      </div>
      <div id='get-started' style={{ color: '#345541' }}>
        <CtaCards
          title='Integrity in your product and authority online'
          subtitle="As your business takes pride in the product you produce, 
          we take pride in empowering your online presence. We take a technical 
          and data driven approach to online marketing, allowing you to solidify 
          the authority you deserve in the online marketplace."
          cards={[
            {
              icon: icons.frontendDevelopment2,
              text: 'More Organic Clients',
            },
            {
              icon: icons.marketing,
              text: 'Higher Close Rate',
            },
            {
              icon: icons.chartAnaytics1,
              text: 'Better Visibility',
            },
            {
              icon: icons.marketingSpecialist,
              text: 'Increased Predictability',
            }
          ]}
        />
      </div>
      <div id='get-started' style={{ color: '#5B77AF', backgroundColor: '#F5F9FF' }}>
        <TextCards
          title='Services'
          subtitle="We have standard programs to enhance our partner’s online marketing presence. 
          Using our research and data backed approach, we produce and execute custom strategies 
          for each individual business. We acknowledge no two businesses are the same, and that 
          uniqueness should be reflected in your strategy. With that said, our proprietary process 
          is standardized across the board and highly repeatable, given the positive results 
          yielded from it time after time."
          cards={[
            {
              title: 'Online Presence',
              subtitle: "We have comprehensive programs and consulting to bring your website and entire online presence to a dominant status. As shown through our process and values, we take an all-encompassing look at SEO, which influences other aspects of the online marketing strategy. Our programs address the entire picture and intends to massively effect online marketing efforts and results.",
            },
            {
              title: 'Lead Generation',
              subtitle: "We generate leads on your behalf in a number of ways tailored to your unique business needs, taking into account things like typical sales funnels used and your customer’s behavior. This is accomplished through SEO, social media channels, email, physical gifts or tokens, calls, etc. All of our standard programs include advisory expertise on lead generation.",
            },
            {
              title: 'SEO Advisory',
              subtitle: "SPM provides advisory services for those that have in-house website developers or are looking for an outside perspective. We effectively become your in-house SEO project managers, providing data backed recommendations to your team for you to make the ultimate decisions.",
            },
            {
              title: 'Website Development',
              subtitle: "With our in-house development team, we have a wide range of capabilities for web design. We have the ability to accommodate your needs and budget and provide exceptional products regardless. Our programs all include website development but do not encapsulate our full website build or redesign process."
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
            <h3 style={{marginBottom: '10px'}}>1. Discovery</h3>
            <h5>Customer, Competitor, and Brand Analysis</h5>
            <h5>Current SEO status and analysis</h5>
            <img src="/spm-landing-page-fe/img/spm/discovery.jpg" alt="Discovery" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3 style={{marginBottom: '10px'}}>2. Strategize</h3>
            <h5>SEO and Quality Content Generation Strategy</h5>
            <h5>Focus on Clear Communication Documentation</h5>
            <img src="/spm-landing-page-fe/img/spm/developstrategy.jpg" alt="Strategy Development" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3 style={{marginBottom: '10px'}}>3. Implement</h3>
            <h5>Website & Copy Development</h5>
            <h5>Content Generation Assistance </h5>
            <img src="/spm-landing-page-fe/img/spm/implementation.jpg" alt="Implementation" style={imageStyle} />
          </div>
          <div style={gridItemStyle}>
            <h3 style={{marginBottom: '10px'}}>4. Maintain</h3>
            <h5>Paid Advertisement</h5>
            <h5>Continuous SEO Data Analysis</h5>
            <img src="/spm-landing-page-fe/img/spm/reportmonitor.jpg" alt="Monitoring & Reporting" className='image-style' />
          </div>
        </div>
      </div>
      <Chatbot />
    </Layout>
  );
}
