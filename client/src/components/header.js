import React from "react"
import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"
import { LightningBoltIcon } from "@heroicons/react/solid"
import StartButton from "./common/StartButton"

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a
              className="flex title-font font-medium items-center 
                        text-gray-900 mb-4 md:mb-0"
            >
              <span>
                <LightningBoltIcon className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
              </span>
              <span className="ml-3 text-xl">JuneProject</span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>

            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>

            <a
              href="https://open.kakao.com/o/gO9QnGte"
              className="mr-5 hover:text-gray-900"
            >
              연락하기
            </a>
          </nav>

          <DarkModeToggleButton />
          <StartButton destination="/register" text="회원가입" />
        </div>
      </header>
    </>
  )
}
