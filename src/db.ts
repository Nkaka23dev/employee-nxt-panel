export const db = {
  games: [
    { id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
    { id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
    { id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
    { id: "4", title: "Mario Kart", platform: ["Switch"] },
    { id: "5", title: "Pokemon Scarlet", platform: ["PS5", "Xbox", "PC"] },
  ],

  authors: [
    { id: "1", name: "Nkaka", verified: true },
    { id: "2", name: "Doe", verified: false },
    { id: "3", name: "Rwabugiri", verified: true },
  ],

  reviews: [
    {
      id: "1",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "1",
      game_id: "1",
    },
    {
      id: "2",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "3",
      game_id: "5",
    },
    {
      id: "3",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "2",
      game_id: "1",
    },
    {
      id: "4",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "1",
      game_id: "3",
    },
    {
      id: "5",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "3",
      game_id: "2",
    },
    {
      id: "6",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "2",
      game_id: "4",
    },
    {
      id: "7",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "2",
      game_id: "5",
    },
    {
      id: "8",
      rating: 8,
      content: "Lorem ipsum sit amet, ",
      author_id: "1",
      game_id: "2",
    },
  ],
};
