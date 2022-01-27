import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { getArticles } from "./utils/getArticles";
import { articles } from "./utils/articles";

jest.mock("./utils/getArticles");
test("render articles after API fetch", async () => {
  getArticles.mockImplementation(() => {
    return Promise.resolve(articles);
  });
  render(<App />);
  expect(getArticles).toHaveBeenCalledTimes(1);
});

test("search bar rendering", async () => {
  getArticles.mockImplementation(() => {
    return Promise.resolve(articles);
  });
  render(<App />);
  const searchBar = screen.getByTitle("Search");
  expect(searchBar).toBeInTheDocument();
});

test("search bar input update", async () => {
  getArticles.mockImplementation(() => {
    return Promise.resolve(articles);
  });
  render(<App />);
  const searchBarInput = screen.getByTitle("SearchInput");
  await act(async () => {
    fireEvent.change(searchBarInput, {
      target: { value: "Philippines" },
    });
  });
  expect(searchBarInput.value).toBe("Philippines");
});

test("articles container rendering", async () => {
  getArticles.mockImplementation(() => {
    return Promise.resolve(articles);
  });
  render(<App />);
  const artContainer = screen.getByTitle("ArticleContainer");
  expect(artContainer).toBeInTheDocument();
});
