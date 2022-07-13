import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Board = () => {
  return (
    <div>
      <FontAwesomeIcon icon={'fa-house-user'} />
      <div className='App'>
        <div>자유게시판</div>
        <input className='title-input1' type='text' placeholder='제목을 입력하세요' />
        <p></p>
        <input className='title-input2' type='text' placeholder='내용을 입력하세요' />
      </div>
    </div>
  )
}


export default Board