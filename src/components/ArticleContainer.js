import React from 'react';
import styles from './ArticleContainer.module.css';

function ArticleContainer({children, title}) {
  return <div className={styles.ArticleContainer} title={title}>
      {children}
  </div>;
}

export default ArticleContainer;
