// @ts-ignore
import styles from "./Book.module.scss";

export interface BookI {
  id: number;
  title: string;
  descr: string;
  price: number;
}

interface Props {
  data: BookI;
  handleDelete: (id: number) => void;
}

const Book = ({ data, handleDelete }: Props) => {
  const { title, descr, price, id } = data;
  return (
    <div className={styles.container}>
      <div onClick={() => handleDelete(id)} className={styles.close}>
        x
      </div>
      <img
        src="https://www.litres.ru/pub/c/cover/69495367.jpg"
        alt=""
        className={styles.iimg}
      />
      <h2>{title}</h2>
      <p>{descr}</p>
      <p>Цена - {price}р</p>
    </div>
  );
};

export default Book;
