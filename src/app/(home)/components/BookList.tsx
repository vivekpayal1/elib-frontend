import { Book } from "@/types";
import BookCard from "./BookCard";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-auto max-w-7xl">
      {books?.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
