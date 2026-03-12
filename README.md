# Quotes_API
Small database to fetch quotes from various anime / people / songs to put in the footer for my main site (Kanye West quotes were taken from https://github.com/ajzbc/kanye.rest).
Quotes without a reference imply that I have no idea who said it or it is shown from a show / game itself rather than said by a character.
(I know damn well some of these are going to be wrong)
(REMINDER FOR FUTURE KDAUI, MAKE SURE THAT THE SECOND TO LAST ONE HAS A COMMA AND THE LAST ONE DONT)

## API Usage

I made this project to run on Vercel (because its free). It comes with two main endpoints:

* **Get a random quote:** `GET /api/random`
* **Get all quotes:** `GET /api/quotes`
* **Filter quotes by character:** `GET /api/quotes?character=Kanye`

### How to use it on your site
You can fetch these quotes dynamically using JavaScript. Heres an example of grabbing a random quote:

```javascript
fetch('https://(ill update this when i deploy it on vercel)/api/random')
  .then(response => response.json())
  .then(quote => {
    console.log(`"${quote.text}" - ${quote.character}`);
  })
  .catch(error => console.error("Could not fetch quote", error));
```
