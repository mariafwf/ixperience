const url = 'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json';

async function fetchBooks() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}

function printBooks(book) {
    console.log(book.title);
    let html = '<ul>';
    html += '<li>' + book.title + '</li>';
    html += '</ul>';
    document.body.innerHTML = html;
}

async function fetchAndPrintBooks() {
  try {
    const book = await fetchBooks();

    printBooks(book);
  } catch (err) {
    console.log(err);
  }
}