// 本の検索条件を受け取り、検索結果の内容を表示するコンポーネント

import getBook from "@/lib/getBooks"

// 本の検索条件「書名・著名・読書状態」を受け取る型を作る
type BookSearchContentProps = {
    bookTitle?: string | string[],
    author?: string | string[],
    readingStatus?: string | string[],
}

export default async function BookSearchContent(
    props: BookSearchContentProps) {
    // 引数propsから各検索条件を取り出して定数に代入する
    const bookTitle = props.bookTitle //書名
    const author = props.author //著者
    const readingStatus = props.readingStatus //読書状態
    // 別ファイルよりgetBook関数を呼び出しを待つ
    const { bookList, error } = await getBook(
        bookTitle, 
        author, 
        readingStatus
    );

    // エラーがあればエラー内容を表示する
    if (error) {
        return <div>Error: {error}</div>;
    }

    // 取得した本の一覧を表示する
    if (bookList.length === 0) {
        return <div>検索結果はありません</div>;
    }    

    return (
        <ul>
            {bookList.map((book) => (
                <li key={book.id}>
                    {book.bookTitle}/
                    {book.author}/
                    {book.readingStatus ? "読了" : "未読"}
                </li>
            ))}
        </ul>
    )

}