import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css';


function BlogPageIntro({}) {
  return (
<div style={{margin: '0 20px', width: '100%'}}>
<div className='blog-ebook-image-div'>
<img
                src="img/checklist/searches-to-sales.png"
                alt="Searches to Sales"
                className='blog-ebook-image'
              />
							     <div className="email-container">
            <h2 style={{color: '#345541'}}>Get Your Free SEO Checklists</h2>
            <p style={{margin: '12px 0'}}>Enter your email to get instant access to our SEO checklists and stay updated with our latest SEO tips.</p>
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
                    placeholder="Name"
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
                      className="blog-submitButton"
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
							</div>
							<hr style={{height: '4px', margin: '48px', backgroundColor: '#345541'}}/>
{/* <CircularImage src="img/monabicon.png" alt="Monab Logo" size={150} /> */}
     <h1 style={{ margin: '20px auto', textAlign: 'center', color: '#345541'}}>Searches into Sales: SEO that Converts!</h1> 
</div>
  )
}

function BlogPostCard({ post }) {
  const { metadata, frontMatter } = post;
  const { permalink, title, formattedDate, description } = metadata;
  const { image } = frontMatter;

  return (
    <div className={clsx('card', styles.blogPostCard)}>
            {image && (
        <div className="card__image">
          <img src={image} alt={title} className={styles.blogPostCardImage} />
        </div>
      )}
      <div className="card__body">
        <h3>
          <Link to={permalink}>{title}</Link>
        </h3>
        <small>{formattedDate}</small>
        <p style={{padding: '8px 0px 20px'}}>{description}</p>
      </div>
      <div className="card__footer">
        <Link to={permalink} className="button button--primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

function BlogListPage(props) {
  const { items } = props;
  return (
    <Layout title="Blog" description="Blog page description">

      <div className="container margin-vert--lg">
        <div className="row">
        <BlogPageIntro />
          {items.map(({ content: BlogPostContent }) => (
            <div key={BlogPostContent.metadata.permalink} className="col col--4 margin-bottom--lg">
              <BlogPostCard post={BlogPostContent} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;

