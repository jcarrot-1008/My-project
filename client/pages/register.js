import React from 'react'
import Layout from "/src/components/layout";
import Head from "next/head";
import { inject, observer } from 'mobx-react';
import InputLayer from '/src/components/common/inpuLayer';

const Register = (props) => {

    const {loginModel} = props.store
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const createUser = () => {
      const {name, email, password, checkPassword} = loginModel
      console.log(name, email, password, checkPassword)
      console.log(password === checkPassword)
      if(name === "" || email === "" || password === "" || checkPassword === "") {
        throw alert("아래항목 다 적어주세요")
      }
      if(password !== checkPassword) {
        throw alert("패스워드는 동일해야 합니다.")
      }
      if(password.lengh <= 3){
        throw alert("패스워드는 3글자이상 적어야 합니다.")
      }
      if (email.match(regExp) == null) {
        throw alert("이메일형식이 다릅니다.")
      }
      console.log('성공')
      loginModel.setInit()
      createQuery()
    }

    const createQuery = async() => {
      const {name, email, password} = loginModel
      const res = await fetch('http://localhost:3000/api/user',{
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "password": password,
          "age": 0,
          "isAdmin": false
        }) 
      })
      console.log(res.json)
      // document.location.href = "/register"
      return res.json
    }

    return (
      <Layout >
      <Head>
          <title>ONEJUNE</title>
          <meta name="description" content="회원가입" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
          <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">간편하게 가입합시다.</h1>
              <p className="leading-relaxed mt-4">이름, 이메일, 비밀번호</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
              <InputLayer type={'full-name'} text={'Full Name'} saveType={"name"} />
              <InputLayer type={'email'} text={'Email'} saveType={"email"} />
              <InputLayer type={'password'} text={'Password'} saveType={"password"} />
              <InputLayer type={'password'} text={'Type Your Password again'} saveType={"checkPassword"} />
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 
              focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={createUser}>회원가입</button>
              <p className="text-xs text-gray-500 mt-3">회원가입 고고싱</p>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default inject(({ store }) => ({
  store: store.mainModel,
}))(observer(Register));
