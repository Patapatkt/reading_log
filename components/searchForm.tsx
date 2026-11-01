"use client";
// 入力フォーム・検索ボタンのコンポーネント

export default function SearchForm(){
    return (
    <form
        action=""
        method="get" // 入力値をURLの検索パラメーターとして送信する
        className="w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
    >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* htmlForとidでラベルと入力欄を結びつける */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="bookTitle"
                    className="text-sm font-semibold text-zinc-700 dark:text-zinc-200"
                >
                    書名
                </label>
                <input
                    id="bookTitle"
                    type="text"
                    name="bookTitle"
                    placeholder="例：吾輩は猫である"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="author"
                    className="text-sm font-semibold text-zinc-700 dark:text-zinc-200"
                >
                    著者
                </label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    placeholder="例：夏目漱石"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                    htmlFor="readingStatus"
                    className="text-sm font-semibold text-zinc-700 dark:text-zinc-200"
                >
                    読書状態
                </label>
                <select
                    id="readingStatus"
                    name="readingStatus"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                >
                    <option value="">全て</option>
                    <option value="読了">読了</option>
                    <option value="未読">未読</option>
                </select>
            </div>
        </div>

        <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
        >
            検索
        </button>
    </form>
);
}