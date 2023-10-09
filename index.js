// When the DOM is fully loaded, call the initialize function
document.addEventListener('DOMContentLoaded', initialize);

// Define an asynchronous function to fetch books from an API
async function fetchBooks() {
  try {
    // Make a fetch request to the API endpoint
    const response = await fetch('https://anapioficeandfire.com/api/books');
    
    // Check if the response is not okay (e.g., network error)
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    // Parse the response as JSON and return it
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error(error);
    return []; // Return an empty array if there was an error
  }
}

// Define a function to render the book names on the web page
function renderBooks(books) {
  const main = document.querySelector('main');
  
  // Iterate over the array of books and create an h2 element for each
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Set the inner HTML of the h2 element
    main.appendChild(h2); // Append the h2 element to the main element in the DOM
  });
}

// Define an asynchronous initialize function to orchestrate fetching and rendering
async function initialize() {
  try {
    // Fetch the list of books from the API using the fetchBooks function
    const books = await fetchBooks();
    
    // Render the fetched books on the web page
    renderBooks(books);
  } catch (error) {
    // Handle any errors that occur during initialization
    console.error(error);
  }
}
