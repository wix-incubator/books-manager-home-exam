const getApiSearchUrl = (searchTerm) =>
  `http://openlibrary.org/search.json?q=${searchTerm}`;

export const getBookCoverByOLID = (olid) =>
  `http://covers.openlibrary.org/b/olid/${olid}-M.jpg`;

export const searchBooks = (searchTerm = "") => {
  return fetch(getApiSearchUrl(searchTerm)).then((r) => r.json());
};
