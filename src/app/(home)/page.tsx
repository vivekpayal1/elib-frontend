import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/books`);
  console.log(response);
  if (!response.ok) {
    throw new Error("An Error Occured");
  }
  const books = await response.json();
  return (
    <div>
      <Banner />
      <BookList books={books} />
    </div>
  );
}
