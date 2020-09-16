export default {
  state: {
    books: [
      {
        id: "wf1",
        title: "White Fang",
        description: "Story about strong and brave wolf",
        image: "https://bookprose.ru/pictures/1019595590.jpg",
        parts: 1,
        level: ["C1", "C2"],
        rating: 5,
        ratingsCount: 100,
        out_id: ""
      },
      {
        id: "h1",
        title: "The Hobbit",
        description: "Huge fantasy epic",
        image: "h1img",
        parts: 3,
        level: ["B2", "C1"],
        rating: 4.2,
        ratingsCount: 92,
        out_id: ""
      },
      {
        id: "wp1",
        title: "War and Peace",
        description: "World literature classic",
        image: "wp1img",
        parts: 3,
        level: ["C1"],
        rating: 5,
        ratingsCount: 65,
        out_id: ""
      }
    ]
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    }
  },
  getters: {
    getBooks: (state) => state.books
  }
};
