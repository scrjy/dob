import React from 'react'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold ms-5">[개요]</h1>

      <br />

      <h3 className="space-y-2 pl-8">
        <p>
          저희가 계획한 프로젝트는 영화 리뷰 플랫폼입니다. 회원분들이 영화들의
          평점과 리뷰들을 기록하는 서버에 방문하셔서 영화 고르시기 더 편하게
          만들어드리는게 저희 목표입니다.
        </p>
      </h3>

      <br />
      <br />

      <hr className="ml-4"></hr>

      <br />
      <br />

      <h1 className="text-3xl font-bold ms-5">[팀원들 프로젝트 소개 동영상]</h1>

      <br />

      <a
        href="https://youtu.be/aunCv1IB0Kw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 ml-8 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-500 transition-colors"
      >
        <button>Youtube</button>
      </a>
    </div>
  )
}
