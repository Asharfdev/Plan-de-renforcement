const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 80
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 120
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 95
    },
    {
        id: 4,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        price: 110
    },
    {
        id: 5,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 150
    }
];


const bookscontainer = document.querySelector("#books-container")
const totalBook = document.querySelector("#totalBooks")

let count = 0 ;
books.forEach(book => {
    count++
    totalBook.textContent = count;
});



books.forEach(book => {
    bookscontainer.innerHTML += `<div class="bg-success p-2 rounded-2" >
                <p>title : ${book.title}</p>
                <p>author : ${book.author}</p>
                <p>price : ${book.price}</p>
            </div>
        `
});