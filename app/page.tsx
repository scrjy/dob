import Image from 'next/image'

const Main = () => {
  return (
    <div>
      <div className="space-y-20 pl-80">
        <Image
          src="/img/hjzm4.png"
          alt="Your image description"
          width={700}
          height={300}
          priority={true} // 중요도를 높여서 더 빠르게 로드되도록 함
        />
      </div>
    </div>
  )
}

export default Main
