import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';

function Section({ title, data, type, filterSource }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== 'song' && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? 'Collapse' : 'Show All'}
          </h4>
        )}
      </div>

      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.gridContainer}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(dataItem) => (
                <Card data={dataItem} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;