import styles from './Articles.module.css';

function Articles({title, link, source, body, date}) {
  // Format Article Body Summary
  const truncate = (string, n) => {
    return (string.length > n) ? string.substr(0, n-1) + `...` : string
  }
  
  return (
    <>
      <a href={link} target='_blank'>
        <div title={title}
        className={styles.Articles}>
            <p className={styles.articleUser}>
                {source}
            </p>
            <p className={styles.articleBody}>
                {truncate(body, 245)}
            </p>
            <span className={styles.articleDate}>
                Published on: {date}
            </span>
        </div>
      </a>
    </>
  )
}

export default Articles;
