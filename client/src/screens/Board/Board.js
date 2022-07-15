import React, { useEffect, useContext, useState } from 'react'
import BoardList from './BoardList'
import { MainContext } from '../../components/context/mainContext'

import BlueLine from '../../components/NavBar/BlueLine'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CreateBoard from './BoardCreate'
import SelectBox from '../../components/util/SelectBox'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const Board = () => {
  
  const jwtToken = localStorage.getItem('jwt-token')
  const { boradData, pushBoard } = useContext(MainContext);
  const [quantity, setQuantity] = useState(5)
  const [ createOpen, setCreateOpen ] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3030/boards',{
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + jwtToken },
        }).then(res => res.json()).then(res => {
          console.log(res)
          return pushBoard(res)
        })
  },[])
const valueOption = [5,10,20]
  return (
    <div>
      <BlueLine title={'자유게시판'} icon={InsertCommentIcon} />
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10px'}}>
          <Box style={{ marginTop: '20px', marginRight: '30px' }}>
            <Fab color="secondary" aria-label="edit" onClick={()=>{setCreateOpen(!createOpen)}}>
              <EditIcon />
            </Fab>
          </Box>
          <SelectBox valueOption={valueOption} quantity={quantity} setQuantity={setQuantity} />
        </div>
        <BoardList 
        items={boradData} 
        quantity={quantity}
        />
        <CreateBoard open={createOpen} setOpen={setCreateOpen} />
      </div>

    </div>
  )
}


export default Board