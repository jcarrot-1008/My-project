import React, { useEffect, useContext, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BoardList from './BoardList'
import { MainContext } from '../../components/context/mainContext'

import BlueLine from '../../components/NavBar/BlueLine'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CreateBoard from './BoardCreate'
import SelectBox from '../../components/util/SelectBox'
const Board = () => {
  
  const jwtToken = localStorage.getItem('jwt-token')
  const { boradData, pushBoard } = useContext(MainContext);
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    fetch('http://localhost:3030/boards',{
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + jwtToken },
        }).then(res => res.json()).then(res => {
          return pushBoard(res)
        })
  },[])
const valueOption = [1,2,3]
  return (
    <div>
      <BlueLine title={'자유게시판'} icon={InsertCommentIcon} />
      <div className='App'>
        <SelectBox valueOption={valueOption} quantity={quantity} setQuantity={setQuantity} />
        <BoardList items={boradData} quantity={quantity} />
        <CreateBoard />
      </div>
      
    </div>
  )
}


export default Board