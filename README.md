# Quotes_API

Small database to fetch quotes from various anime / people / songs to put in the footer for my main site (Kanye West quotes were taken from https://github.com/ajzbc/kanye.rest).

Quotes without a reference imply that I have no idea who said it or it is shown from a show / game itself rather than said by a character.

(I know damn well some of these are going to be wrong)

(REMINDER FOR FUTURE KDAUI, MAKE SURE THAT THE SECOND TO LAST ONE HAS A COMMA AND THE LAST ONE DONT)

---

## API Usage

### Base URL

```
https://quotes-api-pink.vercel.app/api
```

### Get All Quotes

```
GET /quotes
```

Returns all quotes. Optionally filter by character.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `character` | string | Filter by character name (case-insensitive) |

**Example:**
```bash
curl https://quotes-api-pink.vercel.app/api/quotes
```

**Filter by character:**
```bash
curl "https://quotes-api-pink.vercel.app/api/quotes?character=rei"
```

### Get Random Quote

```
GET /random
```

Returns a single random quote.

**Example:**
```bash
curl https://quotes-api-pink.vercel.app/api/random
```

### Response Format

```json
{
  "id": 1,
  "text": "Man fears the darkness, and so he scrapes away at the edges of it with fire.",
  "character": "Rei Ayanami"
}
```

### Available Characters

- Rei Ayanami (Evangelion)
- Yui Ikari (Evangelion)
- Kaworu Nagisa (Evangelion)
- Gendo Ikari (Evangelion)
- Misato Katsuragi (Evangelion)
- Lain Iwakura (Serial Experiments Lain)
- Miho Iwakura (Serial Experiments Lain)
- NERV (Evangelion)
- Elster (Signalis)
- Adler (Signalis)
- Eule (Signalis)
- Ariane Yeong (Signalis)
- Falke (Signalis)
- Isolde 'Isa' Itou (Arknights)
- Kanye West
- Frank Ocean
- Tupac Shakur
- Kendrick Lamar
- 50 Cent
- Tyler the Creator
- Terry A Davis
- Milo
- Lovecraft

### Adding Quotes

To add new quotes, edit `db.json` following this format:

```json
{
  "quotes": [
    { "id": 1, "text": "Your quote here", "character": "Character Name" }
  ]
}
```

## License

MIT
