import React, { useEffect } from 'react';

const SlideContainer = () => {
  useEffect(() => {
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.classList.add('slick-initialized');
    slideContainer.classList.add('slick-slider');
    const images = document.querySelectorAll('.clash-card__image img');
    images.forEach(image => image.style.display = 'none');
    document.querySelector('.slick-active .clash-card img').style.display = 'block';
  
    slideContainer.addEventListener('beforeChange', (event) => {
      const currentSlide = document.querySelector('.slick-active');
      const image = currentSlide.querySelector('.clash-card img');
      image.style.display = 'none';
    });
  
    slideContainer.addEventListener('afterChange', (event) => {
      const currentSlide = document.querySelector('.slick-active');
      const image = currentSlide.querySelector('.clash-card img');
      image.style.display = 'block';
    });
  }, []);

  return (
    <div className="slide-container" style={styles.slideContainer}>
      <div className="wrapper">
        <div className="clash-card barbarian" style={styles.clashCard}>
          <div className="clash-card__image clash-card__image--barbarian" style={styles.barbarianImage}>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
          </div>
          <div className="clash-card__level clash-card__level--barbarian" style={styles.barbarianLevel}>Level 4</div>
          <div className="clash-card__unit-name" style={styles.barbarianName}>The Barbarian</div>
          <div className="clash-card__unit-description" style={styles.barbarianDescription}>
            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has a killer yellow horseshoe mustache.
          </div>
          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix" style={styles.barbarianStats}>
            <div className="one-third" style={styles.barbarianStat}>
              <div className="stat">20<sup>S</sup></div>
              <div className="stat-value">Training</div>
            </div>
            <div className="one-third" style={styles.barbarianStat}>
              <div className="stat">16</div>
              <div className="stat-value">Speed</div>
            </div>
            <div className="one-third no-border" style={styles.barbarianStat}>
              <div className="stat">150</div>
              <div className="stat-value">Cost</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="clash-card archer" style={styles.clashCard}>
          <div className="clash-card__image clash-card__image--archer" style={styles.archerImage}>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" />
          </div>
          <div className="clash-card__level clash-card__level--archer" style={styles.archerLevel}>Level 5</div>
          <div className="clash-card__unit-name" style={styles.archerName}>The Archer</div>
          <div className="clash-card__unit-description" style={styles.archerDescription}>
            The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt, and an attached small pouch.
          </div>
          <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix" style={styles.archerStats}>
            <div className="one-third" style={styles.archerStat}>
              <div className="stat">25<sup>S</sup></div>
              <div className="stat-value">Training</div>
            </div>
            <div className="one-third" style={styles.archerStat}>
              <div className="stat">24</div>
              <div className="stat-value">Speed</div>
            </div>
            <div className="one-third no-border" style={styles.archerStat}>
              <div className="stat">300</div>
              <div className="stat-value">Cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  slideContainer: {
    margin: 'auto',
    width: '600px',
    textAlign: 'center',
  },
  wrapper: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  clashCard: {
    background: 'white',
    width: '300px',
    display: 'inline-block',
    margin: 'auto',
    borderRadius: '14px',
    position: 'relative',
    textAlign: 'center',
    boxShadow: '-1px 15px 30px -12px black',
    zIndex: '9999',
  },
  barbarianImage: {
    position: 'relative',
    height: '230px',
    marginBottom: '35px',
    borderTopLeftRadius: '19px',
    borderTopRightRadius: '19px',
    background: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg')",
  },
  archerImage: {
    position: 'relative',
    height: '230px',
    marginBottom: '35px',
    borderTopLeftRadius: '19px',
    borderTopRightRadius: '19px',
    background: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg')",
  },
  barbarianLevel: {
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '3px',
    color: '#EC9B3B',
  },
  archerLevel: {
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '3px',
    color: '#EE5487',
  },
  barbarianName: {
    fontSize: '26px',
    color: 'black',
    fontWeight: '900',
    marginBottom: '5px',
  },
  archerName: {
    fontSize: '26px',
    color: 'black',
    fontWeight: '900',
    marginBottom: '5px',
  },
  barbarianDescription: {
    padding: '20px',
    marginBottom: '10px',
  },
  archerDescription: {
    padding: '20px',
    marginBottom: '10px',
  },
  barbarianStats: {
    background: '#EC9B3B',
  },
  archerStats: {
    background: '#EE5487',
  },
  barbarianStat: {
    width: '33%',
    float: 'left',
    padding: '20px 15px',
    position: 'relative',
  },
  archerStat: {
    width: '33%',
    float: 'left',
    padding: '20px 15px',
    position: 'relative',
  },
};

export default SlideContainer;