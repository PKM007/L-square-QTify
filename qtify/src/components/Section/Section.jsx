import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';

function Section({ title, dataSource }) {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataSource);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataSource]); // 'dataSource' is the only external dependency required now

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!isCollapsed ? 'Collapse' : 'Show All'}
        </h4>
      </div>
      {!isCollapsed ? (
        <div className={styles.gridContainer}>
          {data.map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      ) : (
        <div className={styles.gridContainer}>
          {data.slice(0, 7).map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;