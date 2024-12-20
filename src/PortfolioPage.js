import React from "react";
import './PortfolioPage.css';

function PortfolioPage() {
    const images = [
        '/images/covidapp_banner.png',
        '/images/covidapp1.jpg',
        '/images/covidapp2.jpg',
        '/images/covidapp3.jpg',
        '/images/nbaapp1.png',
        '/images/nbaapp2.png',
        '/images/nbaapp3.png',
        '/images/nbaapp4.png',
        '/images/nbaapp5.png',
        '/images/steamwidget1.jpg',
        '/images/steamwidget2.jpg',
        '/images/steamwidget3.jpg',
        '/images/steamwidget4.png',
        '/images/steamwidget5.png',
        '/images/pagenumber2.jpg',
        '/images/pagenumber3.jpg',
        '/images/pagenumber4.jpg',
        '/images/pagenumber5.jpg',
    ];

    return (
        <div>
            {/* Previous content: Portfolio Section and "What I Do?" Section */}
            <div className="portfolio-container">
                <div className="portfolio-text">
                    <h1 className="small-text">Hi, I am Hongwei</h1>
                    <h2 className="big-text">I build value through tech and design.</h2>
                    <p className="description">
                        I am from Beijing, China. I live in Sydney, Australia now. <br />
                        I am a tech and design lover. I love helping people build digital products.
                    </p>
                    <a href="#learn-more" className="learn-more-btn">Learn More</a>
                </div>
                <div className="portfolio-image">
                    <img src="/images/hero.jpg" alt="Hongwei" />
                </div>
            </div>

            <div className="what-i-do-container">
                <div className="what-i-do-text">
                    <h2 className="section-title">What I do?</h2>
                    <p className="section-description">
                        I specialize in building tech products and bringing creative designs to life.
                        I work on creating intuitive and user-friendly applications. I also love exploring
                        new design trends and technologies.
                    </p>
                    <a href="#learn-more" className="learn-more-btn">Learn More</a>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery-container">
                <h2 className="gallery-title">My Work</h2>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`App ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
