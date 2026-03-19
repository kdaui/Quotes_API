import quotesData from '../db.json';

export default function handler(req, res) {
  const { character } = req.query;
  let quotes = quotesData.quotes;

  if (character) {
    quotes = quotes.filter(q => q.character.toLowerCase().includes(character.toLowerCase()));
  }

  res.status(200).json({ quotes });
}
