// DrizzleでSQLiteのテーブルを定義するための道具
//npm install drizzle-ormでインストール必要
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";


// bookテーブルの構造を定義
export const books = sqliteTable(
    "book",
    {
        id: integer("id").primaryKey(),
        bookTitle: text("bookTitle").notNull(),
        author: text("author").notNull(),
        readingStatus: integer("readingStatus",{mode:"boolean"})
        .notNull()
        .default(false),
        memo: text("memo").notNull().default(""),
    },
)

