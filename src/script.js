const myButton = document.querySelector("#myButton")
const content = document.querySelector("#content")
const person = document.querySelector("#person")
const quotes = [
    {
        quote:` "The greatest danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark."`,
        person:`  Michelangelo`
    },
    {
        quote:` "Live Happily ❤️🌟!`,
        person:`   Chonde`
    },
    {
        quote:` "When something is important enough, you do it even if the odds are not in your favor."`,
        person:`  Elon Musk`
    },
    {
        quote:` "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts."`,
        person:`  Bertrand Russell`
    },
    {
        quote:`"We do not see things as they are, we see them as we are."`,
        person: ` Anais Nin `
    },
    {
        quote: `"All that we are is the result of what we have thought."`,
        person : ' Buddha',
    },
    {
        quote : `"If you judge people, you have no time to love them`,
        person :' Mother Teresa'
    },
    {
        quote: `"The most courageous act is still to think for yourself. Aloud.`,
        person:` Coco Chanel`
    },
    {
        quote:`“The greatest wealth is to live content with little.”`,
        person:` Plato`
    },
    {
        quote: `“Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.”`,
        person:`  John Wesley`
    },
    {
        quote:` “Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.”`,
        person:`  Helen Keller`
    },
    {
        quote:`The value of life is not in its duration, but in its donation. You are not important because of how long you live, you are important because of how effective you live.”`,
        person:`  Myles Munroe`
    },
    {
        quote:`"Love is like the wind, you can't see it but you can feel it ❤️🌟"`,
        person:` Nicholas Sparks`
    },
    {
        quote:`“Whatever our souls are made of, his and mine are the same.”`,
        person:`  Emily Brontë  `
    },
    {
        quote:`"Be the change that you wish to see in the world."`,
        person: `   Mahatma Gandhi`
    },
    {
        quote: `"Learning never exhausts the mind."`,
        person:` Leonardo da Vinci`
    },
    {
        quote:`"The only source of knowledge is experience."`,
        person:`   Albert Einstein`
    },
    {
        quote:` "It does not matter how slowly you go as long as you do not stop."`,
        person:` Confucius`
    },
    {
        quote:` "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."`,
        person:`  Steve Jobs`
    },
    {
        quote:` "However difficult life may seem, there is always something you can do and succeed at."`,
        person:`  Stephen Hawking`
    },
    {
        quote:` "Failure is impossible."`,
        person:` Susan B. Anthony`
    },
    {
        quote:` "Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person:`  Winston Churchill`
    },
    {
        quote: `"The two most important days in your life are the day you are born and the day you find out why."`,
        person:`  Mark Twain`
    },
    {
        quote: ` "Somewhere, something incredible is waiting to be known."`,
        person:`   Carl Sagan`
    },
    {
        quote : `“To live is to suffer, to survive is to find some meaning in the suffering.”`,
        person : ` Friedrich Nietzsche`
    },
    {
        quote: ` “Non-violence is a weapon of the strong.”`,
        person : `Mahatma Gandhi`
    },
    {
        quote :`“Wisdom is always an overmatch for strength.”`,
        person : `Phil Jackson`
    },
    {
        quote: ` “Hardship often prepares an ordinary person for an extraordinary destiny.”`,
        person : `Christopher Markus`
    },
    {
        quote: `“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”`,
        person : `Mark Twain`
    },
    {
        quote :`“I have no special talent. I am only passionately curious.”`,
        person: `Albert Einstein`
    },
    {
        quote :`“The future belongs to those who prepare for it today.”`,
        person : `Malcolm X`
    },
    {
        quote : `“To be, or not to be, that is the question.”`,
        person : `William Shakespeare`
    },
    {
        quote : `“All I was doing was trying to get home from work.”`,
        person: `Rosa Parks`
    },
    {
        quote :` “I came, I saw, I conquered.”`,
        person : `Julius Caesar`
    },
    {
        quote :` “I think, therefore I am.”`,
        person : `René Descartes`
    },
    {
        quote : `“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”`,
        person : `Mark Twain`
    },
    {
        quote : `“Be yourself, everyone else is already taken.”`,
        person : `Oscar Wilde`

    },
    {
        quote : `“The journey of a thousand miles begins with one step.”`,
        person : `Lao Tzu`
    }
];
myButton.addEventListener("click", () => {
    const  randomNumber =  Math.floor(Math.random() * quotes.length);
    content.innerText = quotes[randomNumber].quote;
    person.innerText =  "~ " + quotes[randomNumber].person;
})
