import quotesData from '../db.json';

export default function handler(req, res) {
  const quotes = quotesData.quotes;
  
  if (!quotes || quotes.length === 0) {
    return res.status(404).json({ error: "No quotes found." });
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  res.status(200).json(randomQuote);
}
