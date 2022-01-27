import React from 'react';
import styles from './Search.module.css';

function Search({formTitle, inputTitle, handleSubmit, searchInput, setSearchInput}) {
  return <div className={styles.Search}>
      <form className={styles.SearchInputForm} title={formTitle} onSubmit={handleSubmit}>
          <svg className={styles.SearchIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input className={styles.SearchInputField}
          title={inputTitle}
          id='search-input'
          name='search-input'
          type='text'
          placeholder='Input search query here.'
          value={searchInput}
          onChange={setSearchInput}>
          </input>
      </form>
  </div>;
}

export default Search;
