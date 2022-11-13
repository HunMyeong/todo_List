
const quotes = [
    {
        quote: "이",
        author: "일",
    },
    {
        quote: "이",
        author: "일",
    },
    {
        quote: "이",
        author: "일",
    },
    {
        quote: "이",
        author: "2",
    },
    {
        quote: "일",
        author: "1",
    },
    {
        quote: "이",
        author: "2",
    },
    {
        quote: "일",
        author: "1",
    },
    {
        quote: "이",
        author: "2",
    },
    {
        quote: "일",
        author: "1",
    },
    {
        quote: "이",
        author: "2",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;