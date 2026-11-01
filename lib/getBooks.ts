// DBから 必要情報を受け取るバックエンド
import { and, eq, like } from "drizzle-orm";
import { drizzleDb } from "./db"
import { books } from "./schema"
import { bookSearchSchema } from "@/model/product";

export default async function getBook(
    bookTitle: string | string[] | undefined,
    author: string | string[] | undefined,
    readingStatus: string | string[] | undefined,
) {// 引数の値を文字列なら取得しそれ以外は空文字にする
    const searchBookTitle =
        typeof bookTitle === "string" ? bookTitle : "";
    const searchAuthor =
        typeof author === "string" ? author : "";
    const searchReadingStatus =
        typeof readingStatus === "string" ? readingStatus : "";

    // 引数の値を検証する
    const result = bookSearchSchema.safeParse({
        bookTitle: searchBookTitle, 
        author: searchAuthor,
        readingStatus: searchReadingStatus
    });
    // 検証結果が失敗した場合はエラーを返す
    if (!result.success) {
        return { bookList: [], error: "読書状態を確認してください" };
    }

    // 検証済み・空白除去済みの値を取り出す
    const { 
        bookTitle: trimmedBookTitle, 
        author: trimmedAuthor, 
        readingStatus: trimmedReadingStatus 
    } = result.data;  

    // drizzleDbで取得命令を出す　取得場所はbooksテーブルから取得
    const bookList = await drizzleDb
        .select()
        .from(books)
        .where(
            and(
                trimmedBookTitle !== ""
                    ? like(books.bookTitle, `%${trimmedBookTitle}%`)
                    : undefined,
                trimmedAuthor !== ""
                     ? like(books.author, `%${trimmedAuthor}%`)
                     : undefined,
                 trimmedReadingStatus !== ""
                     ? eq(books.readingStatus, trimmedReadingStatus ==="読了")
                     : undefined
            ))
    // 返す結果へは取得した本の一覧全件
    return { bookList, error: null };
}