// Example JavaScript that could populate book data dynamically in the future

document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
            title: 'Book Title 1',
            author: 'Author Name',
            date: 'January 1, 2025',
            summary: 'This is a brief summary of the book...',
            image: 'book1.jpg',
            description: 'This book explores themes of mystery and adventure...'
        },
        {
            title: 'Book Title 2',
            author: 'Author Name',
            date: 'February 1, 2025',
            summary: 'This is a brief summary of the book...',
            image: 'book2.jpg',
            description: 'This book delves into the world of fantasy and magic...'
        }
    ];

    const articlesContainer = document.querySelector('.articles');

    books.forEach(book => {
        const article = document.createElement('article');
        article.innerHTML = `
            <div class="article-details">
                <h2>${book.title}</h2>
                <p class="author">by ${book.author}</p>
                <p class="publish-date">Published: ${book.date}</p>
                <p class="summary">${book.summary}</p>
            </div>
            <div class="article-content">
                <img src="${book.image}" alt="${book.title} cover image">
                <p class="description">${book.description}</p>
            </div>
        `;
        articlesContainer.appendChild(article);
    });
});
