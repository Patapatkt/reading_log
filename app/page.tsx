import BookSearchContent from "@/components/BookSearchContent";
import SearchForm from "@/components/searchForm";
import Link from "next/link";

// URLから受け取る検索条件の型を定義する
type HomeParams = {
  searchParams: Promise<{
    //? は省略される可能性、`string[]` は複数の値がある可能性を表す
    bookTitle?: string | string[],
    author?: string | string[],
    readingStatus?: string |string[],
  }>
}

export default async function Home(
  props:HomeParams){
  const params = await props.searchParams

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            読書記録
          </h1>
          {/* 検索フォームを呼び出し */}
          <SearchForm
          />
          {/*親がURLから受け取った値を子コンポーネントに定数を渡す*/}
          <BookSearchContent
            bookTitle ={params.bookTitle}
            author={params.author}
            readingStatus={params.readingStatus}
          />
        </div>
        <Link href="/new" className="mt-8 text-blue-500 hover:underline">
          本を登録する
        </Link>
      </main>
    </div>
  );
}
