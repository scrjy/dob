import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold ms-5">Team. 胡蝶之夢</h1>

      <br />
      <br />

      <div className="space-y-2 pl-8">
        <h2 className="text-xl font-bold">[팀장]</h2>
        <h3>
          <p>이름 : 정예빈</p>
          <p>학번 : 92313635</p>
          <p>
            github :
            <Link href="https://github.com/cogi1475/portfolio-page">
              https://github.com/cogi1475/portfolio-page
            </Link>
          </p>
          <p>
            포트폴리오 :
            <Link href="https://portfolio-page-lime-nine.vercel.app/">
              https://portfolio-page-lime-nine.vercel.app/
            </Link>
          </p>
        </h3>

        <br />

        <h2 className="text-xl font-bold">[팀원]</h2>
        <h3>
          <p>이름 : 서지영</p>
          <p>학번 : 92313398</p>
          <p>
            github :
            <Link href="https://github.com/scrjy/portfolio">
              https://github.com/scrjy/portfolio
            </Link>
          </p>
          <p>
            포트폴리오 :
            <Link href="https://portfolio-beryl-six-36.vercel.app/">
              https://portfolio-beryl-six-36.vercel.app/
            </Link>
          </p>
        </h3>

        <br />

        <h3>
          <p>이름 : 오시은</p>
          <p>학번 : 92313439</p>
          <p>
            github :
            <Link href="https://github.com/kkangchi?tab=repositories">
              https://github.com/kkangchi?tab=repositories
            </Link>
          </p>
          <p>
            포트폴리오 :
            <Link href="https://portfolio-lac-nine-16.vercel.app/">
              https://portfolio-lac-nine-16.vercel.app/
            </Link>
          </p>
        </h3>

        <br />

        <h3>
          <p>이름 : 이서진</p>
          <p>학번 : 92313506</p>
          <p>
            github :
            <Link href="https://github.com/TATA-777">
              https://github.com/TATA-777
            </Link>
          </p>
          <p>
            포트폴리오 :
            <Link href="https://portfolio-tau-sandy-80.vercel.app/">
              https://portfolio-tau-sandy-80.vercel.app/
            </Link>
          </p>
        </h3>

        <br />

        <h3>
          <p>이름 : 장수정</p>
          <p>학번 : 92313570</p>
          <p>
            github :
            <Link href="https://github.com/ueeze">
              https://github.com/ueeze
            </Link>
          </p>
          <p>
            포트폴리오 :
            <Link href="https://portfolio-project-eight-hazel.vercel.app/">
              https://portfolio-project-eight-hazel.vercel.app/
            </Link>
          </p>
        </h3>
      </div>
    </div>
  )
}
