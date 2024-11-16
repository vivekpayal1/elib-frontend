import DownloadButton from "@/components/DownloadButton";
import { Book } from "@/types";
import Image from "next/image";

const SingleBookPage = async ({ params }: { params: { bookid: string } }) => {
  let book: Book | null = null;
  try {
    const reponse = await fetch(
      `${process.env.BASE_URL}/books/${params.bookid}`
    );
    if (!reponse.ok) {
      throw new Error("Error Fetching Book");
    }
    book = await reponse.json();
    console.log(book);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    throw new Error("Book Not Found");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
