let btn = document.querySelector(".Quote-Button");
let quote = document.querySelector(".Quote-text ")
let person = document.querySelector(".Quote-author")

const quotes = [{
    quote: '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahatma Gandhi'
}, 

{
    quote: '" If you want to live a happy life, tie it to a goal, not to people or things."',
    person: 'Albert Einstein'
}, 

{
    quote: '" At his best, man is the noblest of all animals; separated from law and justice he is the worst"', 
    person: 'Aristotle'
}, 

{
    quote: '" Your time is limited, so dont waste it living someone elses life"',
    person: 'Steve Jobs'
}, 

{
    quote: '" Tell me and I forget, Teach me and I remember. Involve me and I learn"',
    person: 'Benjamin Franklin'
},  

{
    quote: '"If you look at what you have in life, you will always have more. If you look at what you dont have to live, you will never have enough."',
    person: 'Oprah Winfrey'
},    

{quote: '"It does not matter how slowly you go. As long as you do not stop."',
    person: 'Confucius'},

{quote: '"Our lives begin to end the day we become slient about things that matter."',
    person: 'Martin Luther King, Jr'},

{quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lana'},

    {quote: '"The journey of a thousand miles begins with one step."',
    person: 'Lao Tzu'},

    {
        quote: '"The price it takes to be fake is the same price it takes to be real!"',
        person: 'Apostle Joshua Selman'
    },

    {
        quote: '"There is no self-made man, we are all products of God’s grace."',
        person: 'Bishop David Oyedepo'
    },

    {
        quote: '"To be rewarded well is to trade well with Life"',
        person: 'Mary Gideon'
    }

]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}) 