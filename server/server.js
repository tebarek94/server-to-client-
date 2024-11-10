import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

// Get a rendom joke
app.get("/random", (req, res) => {
  const randomJoke = Math.floor(Math.random() * jokes.length);
  res.send(jokes[randomJoke]);
});
// get jokes in specific id
app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.send(foundJoke);
});

// get jokes in type
app.get("/filtter", (req, res) => {
  const type = req.query.type;
  const filltterdActivities = jokes.filter((joke) => joke.jokeType === type);
  res.send(filltterdActivities);
});

// post put patch method request

app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  jokes.push(newJoke);
  res.json(newJoke);
});

// get put update request
app.put("jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  res.send(replacementJoke);
});

// Patch the jokes
app.patch("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingjoke = jokes.find((joke) => joke.id === id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text || existingjoke.jokeText,
    jokeType: req.body.type || existingjoke.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  console.log(jokes[searchIndex]);
  res.send(replacementJoke);
});

// Delete jokes
app.delete("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  if (searchIndex > -1) {
    jokes.splice(searchIndex, 1);
    res.statusCode(200);
  } else {
    res
      .status(404)
      .json({ error: `Joke wit id ${id} not found . no jokes were deleted` });
  }
});

app.listen(port, () => {
  console.log(`server is running on the ${port}`);
});

const jokes = [
  {
    id: 1,
    jokeText: "Why don't skeletons fight each other? They don't have the guts.",
    jokeType: "pun",
  },
  {
    id: 2,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 3,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 4,
    jokeText:
      "I’m reading a book on anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 5,
    jokeText: "What’s orange and sounds like a parrot? A carrot.",
    jokeType: "pun",
  },
  {
    id: 6,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 7,
    jokeText:
      "I tried to start a band called 1023MB. We haven't got a gig yet.",
    jokeType: "tech",
  },
  {
    id: 8,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "tech",
  },
  {
    id: 9,
    jokeText: "I don’t trust stairs. They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 10,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 11,
    jokeText:
      "Why don’t oysters donate to charity? Because they are shellfish.",
    jokeType: "pun",
  },
  {
    id: 12,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 13,
    jokeText: "I don't trust people who do acupuncture. They're back stabbers.",
    jokeType: "pun",
  },
  {
    id: 14,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "tech",
  },
  {
    id: 15,
    jokeText: "How does a penguin build its house? Igloos it together.",
    jokeType: "pun",
  },
  {
    id: 16,
    jokeText:
      "Why can’t you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
    jokeType: "pun",
  },
  {
    id: 17,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "pun",
  },
  {
    id: 18,
    jokeText:
      "Why don’t skeletons ever use cell phones? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 19,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 20,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 21,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 22,
    jokeText: "I don’t trust stairs. They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 23,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 24,
    jokeText: "What’s orange and sounds like a parrot? A carrot.",
    jokeType: "pun",
  },
  {
    id: 25,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "pun",
  },
  {
    id: 26,
    jokeText: "Why don’t skeletons fight each other? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 27,
    jokeText: "What do you call fake spaghetti? An impasta.",
    jokeType: "pun",
  },
  {
    id: 28,
    jokeText: "Why don’t eggs tell jokes? Because they might crack up.",
    jokeType: "pun",
  },
  {
    id: 29,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 30,
    jokeText: "How do you organize a space party? You planet.",
    jokeType: "pun",
  },
  {
    id: 31,
    jokeText:
      "I’m reading a book on anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 32,
    jokeText: "What do you call a pile of cats? A meow-tain.",
    jokeType: "pun",
  },
  {
    id: 33,
    jokeText: "Why don't skeletons fight each other? They don't have the guts.",
    jokeType: "pun",
  },
  {
    id: 34,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 35,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 36,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "tech",
  },
  {
    id: 37,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "pun",
  },
  {
    id: 38,
    jokeText: "I don’t trust stairs. They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 39,
    jokeText: "What do you call fake spaghetti? An impasta.",
    jokeType: "pun",
  },
  {
    id: 40,
    jokeText:
      "Why don’t oysters donate to charity? Because they are shellfish.",
    jokeType: "pun",
  },
  {
    id: 41,
    jokeText: "I’m on a whiskey diet. I’ve lost three days already.",
    jokeType: "one-liner",
  },
  {
    id: 42,
    jokeText: "I used to be a baker, but I couldn't make enough dough.",
    jokeType: "pun",
  },
  {
    id: 43,
    jokeText:
      "Why did the math book look sad? Because it had too many problems.",
    jokeType: "pun",
  },
  {
    id: 44,
    jokeText: "What do you call an alligator in a vest? An investigator.",
    jokeType: "pun",
  },
  {
    id: 45,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 46,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 47,
    jokeText: "Why can’t you trust an atom? Because they make up everything.",
    jokeType: "pun",
  },
  {
    id: 48,
    jokeText:
      "What do you get when you cross a snowman with a vampire? Frostbite.",
    jokeType: "pun",
  },
  {
    id: 49,
    jokeText: "How do you organize a space party? You planet.",
    jokeType: "pun",
  },
  {
    id: 50,
    jokeText:
      "Why don’t skeletons ever use cell phones? They don’t have the guts.",
    jokeType: "pun",
  },
  { id: 51, jokeText: "What’s brown and sticky? A stick.", jokeType: "pun" },
  {
    id: 52,
    jokeText: "What do you call an alligator in a vest? An investigator.",
    jokeType: "pun",
  },
  {
    id: 53,
    jokeText: "Why can’t you trust stairs? They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 54,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 55,
    jokeText: "Why don't skeletons fight each other? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 56,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 57,
    jokeText: "What’s orange and sounds like a parrot? A carrot.",
    jokeType: "pun",
  },
  {
    id: 58,
    jokeText:
      "I tried to start a band called 1023MB. We haven’t got a gig yet.",
    jokeType: "tech",
  },
  {
    id: 59,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "tech",
  },
  {
    id: 60,
    jokeText:
      "I’m reading a book on anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 61,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "pun",
  },
  {
    id: 62,
    jokeText: "I don’t trust stairs. They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 63,
    jokeText: "What’s a skeleton’s least favorite room? The living room.",
    jokeType: "pun",
  },
  {
    id: 64,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 65,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "pun",
  },
  {
    id: 66,
    jokeText: "Why don't eggs tell jokes? They might crack up.",
    jokeType: "pun",
  },
  {
    id: 67,
    jokeText: "I’m on a whiskey diet. I’ve lost three days already.",
    jokeType: "one-liner",
  },
  {
    id: 68,
    jokeText: "I used to be a baker, but I couldn't make enough dough.",
    jokeType: "pun",
  },
  {
    id: 69,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 70,
    jokeText: "I don’t trust people who do acupuncture. They're back stabbers.",
    jokeType: "pun",
  },
  {
    id: 71,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 72,
    jokeText: "I don’t trust stairs. They’re always up to something.",
    jokeType: "pun",
  },
  {
    id: 73,
    jokeText: "What do you call a pile of cats? A meow-tain.",
    jokeType: "pun",
  },
  {
    id: 74,
    jokeText:
      "Why don’t skeletons ever use cell phones? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 75,
    jokeText:
      "Why don’t oysters donate to charity? Because they are shellfish.",
    jokeType: "pun",
  },
  {
    id: 76,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 77,
    jokeText: "How do you organize a space party? You planet.",
    jokeType: "pun",
  },
  {
    id: 78,
    jokeText:
      "I’m reading a book on anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 79,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 80,
    jokeText: "Why don’t skeletons fight each other? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 81,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 82,
    jokeText: "What do you call fake spaghetti? An impasta.",
    jokeType: "pun",
  },
  {
    id: 83,
    jokeText: "Why don’t eggs tell jokes? Because they might crack up.",
    jokeType: "pun",
  },
  {
    id: 84,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "pun",
  },
  {
    id: 85,
    jokeText: "What do you call an alligator in a vest? An investigator.",
    jokeType: "pun",
  },
  {
    id: 86,
    jokeText: "I’m on a whiskey diet. I’ve lost three days already.",
    jokeType: "one-liner",
  },
  {
    id: 87,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 88,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "tech",
  },
  {
    id: 89,
    jokeText:
      "Why did the math book look sad? Because it had too many problems.",
    jokeType: "pun",
  },
  {
    id: 90,
    jokeText: "What’s orange and sounds like a parrot? A carrot.",
    jokeType: "pun",
  },
  {
    id: 91,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "pun",
  },
  {
    id: 92,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down.",
    jokeType: "pun",
  },
  {
    id: 93,
    jokeText: "Why don’t skeletons fight each other? They don’t have the guts.",
    jokeType: "pun",
  },
  {
    id: 94,
    jokeText: "I don’t trust people who do acupuncture. They're back stabbers.",
    jokeType: "pun",
  },
  {
    id: 95,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "pun",
  },
  {
    id: 96,
    jokeText: "What do you call fake spaghetti? An impasta.",
    jokeType: "pun",
  },
  {
    id: 97,
    jokeText:
      "Why don’t oysters donate to charity? Because they are shellfish.",
    jokeType: "pun",
  },
  {
    id: 98,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "one-liner",
  },
  {
    id: 99,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "one-liner",
  },
  {
    id: 100,
    jokeText:
      "What do you get when you cross a snowman with a vampire? Frostbite.",
    jokeType: "pun",
  },
];
