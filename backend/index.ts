import express from "express";
const app = express();

app.get("/api", ({ req, res }: any) => {
  res.send("Hello World!");
});
app.get("/api/jokes", (req: any, res: any) => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      author: "mukul",
    },
    {
      id: 2,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      author: "mukul",
    },
    {
      id: 3,
      joke: "Why did the bicycle fall over? Because it was two-tired!",
      author: "mukul",
    },
    {
      id: 4,
      joke: "What do you call fake spaghetti? An impasta!",
      author: "mukul",
    },
    {
      id: 5,
      joke: "Why did the math book look sad? Because it had too many problems.",
      author: "mukul",
    },
    {
      id: 6,
      joke: "Why can't your nose be 12 inches long? Because then it would be a foot!",
      author: "mukul",
    },
  ];
  res.json(jokes);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
