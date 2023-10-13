'use client'
// All of Tauri's JS APIs require access to browser-only APIs which means they can only be used in Client Components.
// If you don't need Server Components you can add 'use client' at the very top of the app/page.tsx file.
// Here, 'use client' is used only in this component so that we don't have to convert the whole app

import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

export default function Greet({ name = 'Next.js' }) {
    useEffect(() => {
        invoke<string>('greet', { name })
            .then(console.log)
            .catch(console.error)
    }, [])

    return <></>
}
