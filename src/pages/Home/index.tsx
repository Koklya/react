import { useState } from "react";
import Book from "../../components/Book";
import { books as initialState } from "../../utils";
// @ts-ignore
import styles from "./Home.module.scss";

const Home = () => {
  const [books, setBooks] = useState(initialState);

  const handleDelete = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const handelAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "123",
      descr: "312",
      price: 1000,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h2>Список прочитанных книг</h2>
      <div className={styles.books}>
        {books.map((book) => (
          <Book key={book.id} data={book} handleDelete={handleDelete} />
        ))}
        <button onClick={handelAddBook}>Добавить книгу</button>
      </div>
    </div>
  );
};

export default Home;
