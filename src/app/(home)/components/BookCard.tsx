import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-3 rounded-md shadow-sm ">
      <div className="h-[10rem] w-[10rem]">
        <Image
          src={book.coverImage}
          className="w-full h-full rounded-md object-cover"
          width={0}
          height={0}
          alt={book.title}
          sizes="100vw"
        />
      </div>
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="font-bold text-primary-900 mt-1">{book.author.name}</p>
        <Link
          href={`/book/${book._id}`}
          className="border border-primary-500 text-md rounded-sm inline-block text-md text-primary-500 mt-4 px-2 py-1 hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
