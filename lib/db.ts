// DBへの接続をするファイル
// SQLiteのDBに接続するクライアントを作る道具
import { createClient } from "@libsql/client";
// クライアントをDrizzleから使えるようにする道具
import { drizzle } from "drizzle-orm/libsql";
// DBにアクセスするためのクライアントを作り、他のファイルへ公開する
export const db =createClient({
    // ローカルの読書記録用DBファイルを指定する
    url:"file:reading_log.db",
});
// 同じクライアントを使い、DrizzleでDB操作できるようにする
export const drizzleDb = drizzle(db);