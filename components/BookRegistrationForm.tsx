
"use client";

// 本の登録フォームと登録結果を表示する
import createBook from "@/actions/createBook";
import { useActionState } from "react";

export default function BookRegistrationForm() {
    const [state, formAction, isPending] =
        useActionState(createBook, { error: null, success: false });

    return (
        <form
            action={formAction}
            className="mx-auto my-8 w-full max-w-xl space-y-6 rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm sm:p-8"
        >
            <div>
                <h1 className="text-2xl font-bold">
                    本を登録する
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                    読みたい本や、読み終えた本を記録しましょう。
                </p>
            </div>

            {state.error && (
                <p
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </p>
            )}

            {state.success && (
                <p
                    role="status"
                    className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                >
                    登録完了しました。
                </p>
            )}

            <div className="space-y-2">
                <label
                    htmlFor="bookTitle"
                    className="block text-sm font-semibold"
                >
                    書名
                    <span className="ml-2 text-xs font-normal text-slate-500">
                        必須
                    </span>
                </label>
                <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    required
                    placeholder="例：吾輩は猫である"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="author"
                    className="block text-sm font-semibold"
                >
                    著者
                    <span className="ml-2 text-xs font-normal text-slate-500">
                        必須
                    </span>
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    required
                    placeholder="例：夏目漱石"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="readingStatus"
                    className="block text-sm font-semibold"
                >
                    読書状態
                </label>
                <select
                    id="readingStatus"
                    name="readingStatus"
                    defaultValue="未読"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                >
                    <option value="未読">未読</option>
                    <option value="読了">読了</option>
                </select>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="memo"
                    className="block text-sm font-semibold"
                >
                    メモ
                    <span className="ml-2 text-xs font-normal text-slate-500">
                        任意
                    </span>
                </label>
                <textarea
                    id="memo"
                    name="memo"
                    rows={4}
                    placeholder="気になったことなどを自由に記入"
                    className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-60"
            >
                {isPending ? "登録中…" : "本を登録する"}
            </button>
        </form>
    );
}