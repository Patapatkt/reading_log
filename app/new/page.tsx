// 本を登録する親ページ

import BookRegistrationForm from '@/components/BookRegistrationForm'
import Link from 'next/link'

// このページは引数を受け取らないので引数不要
export default function NewBookPage() {
    return (
        // 子コンポーネントを呼び出す
        <BookRegistrationForm />
    )
}

<Link href="/" className="mt-8 text-blue-500 hover:underline">
  戻る
</Link>