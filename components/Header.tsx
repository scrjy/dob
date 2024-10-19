import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav
        className="py-4 px-8"
        style={{
          background: 'linear-gradient(90deg, #C467CE, #D5BED3, #CEB4C2)',
        }}
      >
        <div className="flex items-center font-bold">
          <Link href="/">
            <div className="text-4xl text-white">胡蝶之夢</div>
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-8 font-bold">
          <Link
            href="/profile"
            className="text-[#FFFACD] hover:text-white mr-4"
          >
            Profile
          </Link>

          <Link
            href="/project"
            className="text-[#FFFACD] hover:text-white mr-4"
          >
            Project
          </Link>
        </div>
      </nav>
    </div>
  )
}
