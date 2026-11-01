"use server";
import { drizzleDb } from "@/lib/db";
import { books } from "@/lib/schema";
// 本を登録させるバックエンド

import { bookRegistrationSchema } from "@/model/product";
import { and, eq } from "drizzle-orm";


// 登録結果を保持する型を定義
type BookRegistrationState = {
    error: string | null;
    success: boolean;
};
export default async function createBook(
    _prevState:BookRegistrationState,
    formData: FormData    
) {
    // 受け取ったFormDataから入力値を取り出す
    const bookTitle = formData.get("bookTitle");
    const author = formData.get("author");
    const readingStatus = formData.get("readingStatus");
    const memo = formData.get("memo");
    // zodで定義した検証ルールを使って入力値を検証する
    const result = bookRegistrationSchema.safeParse({
        bookTitle: bookTitle,
        author: author,
        readingStatus: readingStatus,
        memo: memo
    });
    // 検証結果が失敗した場合は処理を止めてエラーを返す
    if (!result.success) {
        return {
            error: result.error.issues[0]?.message
                ?? "入力内容を確認してください",
            success: false
        };
    }
    // 検証済み・空白除去済みの値を取り出す
    const {
        bookTitle: validBookTitle,
        author: validAuthor,
        readingStatus: validReadingStatus,
        memo: validMemo
    } = result.data;
    // 書名と著者の両方が一致する本がDBにあるか確認する。
    const matchedBook = await drizzleDb
        .select()
        .from(books)
        .where(
            and(
                eq(books.bookTitle, validBookTitle),
                eq(books.author, validAuthor)
            )
        );
    // 登録済みならエラーを返し、なければ登録する。
    // 一致している本が１件以上あったらエラーを返し処理を中止
    if (matchedBook.length > 0) {
        return {
            error: "同じ本が既に登録されています",success: false
        };
    }
    // 検証済みの値をDBへ登録し、登録した行を取得する
    const insertedBook = await drizzleDb
        .insert(books)
        .values({
            bookTitle: validBookTitle,
            author: validAuthor,
            readingStatus: validReadingStatus,
            memo: validMemo
        })
        .returning();
    // 登録結果を呼び出し側へ返す
    return { error: null ,success: true};
}