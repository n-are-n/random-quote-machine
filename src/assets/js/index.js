import GET from './API.js'
let data
const author = document.getElementById('author')
const quote = document.getElementById('quote')
const tweet = document.getElementById('tweet-quote')
const tumblr = document.getElementById('tumblr-quote')
const tweetURL = 'https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'
const tumblrURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='
const color = ['red', 'blue', 'green', 'yellow', 'pink']
const generateRandomNumber = (num) => Math.floor(Math.random() * num)
const applyAnimation = (...elements) => elements.forEach(element => element.classList.toggle('animate'))
function updateElementContent (elements, contents) {
  elements.forEach((element, index) => {
    element.innerText = contents[index]
  })
}
function getData () {
  try {
    GET().then(Response => {
      data = Response
      applyAnimation(quote, author)
      updateElementContent([author, quote], ['- '.concat(data.quotes[0].author), '" '.concat(data.quotes[0].quote)])
      tweet.setAttribute('href', tweetURL.concat(data.quotes[0].quote).concat('" ').concat(data.quotes[0].author))
      tumblr.setAttribute('href', tumblrURL.concat(data.quotes[0].author.concat('&content=').concat(data.quotes[0].quote.concat('&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button'))))
      document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById('new-quote').style.backgroundColor = tweet.style.backgroundColor = tumblr.style.backgroundColor = author.style.color = quote.style.color = color[0]
    })
  } catch (error) {
    console.log(error)
  }
}

function getQuote () {
  let randomQuote = generateRandomNumber(101)
  let randomColor = generateRandomNumber(5)
  try {
    applyAnimation(quote, author)
    quote.offsetWidth
    author.offsetWidth
    applyAnimation(quote, author)
    updateElementContent([author, quote], ['- '.concat(data.quotes[randomQuote].author), '" '.concat(data.quotes[randomQuote].quote)])
    tweet.href = tweetURL.concat(data.quotes[randomQuote].quote).concat(data.quotes[randomQuote].author)
    tumblr.href = tumblrURL.concat(data.quotes[randomQuote].author.concat('&content=').concat(data.quotes[randomQuote].quote.concat('&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button')))
    document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById('new-quote').style.backgroundColor = tweet.style.backgroundColor = tumblr.style.backgroundColor = author.style.color = quote.style.color = color[randomColor]
  } catch (error) {
    console.log(error)
  } finally {
    randomQuote = undefined
    randomColor = undefined
  }
}

window.addEventListener('DOMContentLoaded', getData)
document.getElementsByTagName('button')[0].addEventListener('click', getQuote)
