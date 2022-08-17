import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          환영합니다.
          <br className="hidden lg:inline-block" />
          여기서 무엇을 해볼까요?
        </h1>
        <p className="mb-8 leading-relaxed">
          이 프로젝트는 토이프로젝트입니다.
          <br />
          무엇이든지 만들수 있습니다.
          <br />
          아래의 프로젝트 보러가기를 눌러보세요
          <br />
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
