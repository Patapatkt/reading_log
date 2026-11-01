
import {z} from "zod";

// 本を検索する時の検証ルールを定義
export const bookSearchSchema =z.object({
    // zodで書名・著者の入力ルールを定義(文字列・前後の空白を取り除く)
    bookTitle:z
        .string()
        .trim(),
    author:z
        .string()
        .trim(),
    // 読書状態を「読了or未読or空文字」で入力
    readingStatus:z
        .enum(["読了","未読",""])
})
// 検証ルールから型式を定義
export type BookSearch =z.infer<typeof bookSearchSchema>

// 本を登録させる時の検証ルールを
export const bookRegistrationSchema = z.object({
    // zodで書名・著者の入力ルールを定義(文字列・前後の空白を取り除く・1文字以上)
    bookTitle:z
        .string()
        .trim()
        .min(1,"書名を入力してください"),
    author:z
        .string()
        .trim()
        .min(1,"著者を入力してください"),
    // 読書状態を「読了or未読」で入力
    readingStatus:z
        .enum(["読了","未読"])
        .transform((value)=>value==="読了"),//読了であればtrue
    // 任意のメモ(未入力の場合は空文字)
    memo:z
        .string()
        .trim()
        .default("")
})
// 検証ルールから型式を定義
export type BookRegistration =z.infer<typeof bookRegistrationSchema>