import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {getArticles} from './utils/getArticles';
import {articles} from './utils/articles';

jest.mock('./utils/getArticles');

test('search bar rendering', () => {
  render(<App />);
  const searchBar = screen.getByTitle('Search');
  expect(searchBar).toBeInTheDocument();
});

test('search bar input update', () => {
  render(<App />);
  const searchBarInput = screen.getByTitle('SearchInput');
  fireEvent.change(searchBarInput, {
    target: {value: 'Philippines'},
  });
  expect(searchBarInput.value).toBe('Philippines')
});

test('articles container rendering', () => {
  render(<App />);
  const artContainer = screen.getByTitle('ArticleContainer');
  expect(artContainer).toBeInTheDocument();
});

test('render articles after API fetch', async () => {
  getArticles.mockImplementation(() => {
    return articles
  });
  render(<App/>);
  expect(getArticles).toHaveBeenCalledTimes(1);
})