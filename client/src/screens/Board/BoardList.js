import React, {useState, useHistory} from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import {Box, ItemWrapper} from './BoardStyles/BoardStyles';
import Page from '../../components/util/Pagination'
import _slice from 'lodash/slice'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function BoardList(props) {
  const { items, quantity } = props;
  const [page, setPage] = useState(1);
  const firstItemNumber = 0 + ((page - 1) * quantity);
  const lastItemNumber = quantity + ((page - 1) * quantity);
  const boardListPage = _slice(items,firstItemNumber,lastItemNumber );
  const [ selectId, setSelectId ]= useState(0)
  const jwtToken = localStorage.getItem('jwt-token')

  const deleteBoard = (id) => {
     fetch(`http://localhost:3030/boards/${id}`,{
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + jwtToken },
        }).then(window.location.replace('/Board'))
  }

  const boardList = boardListPage?.map((value, index) => {
    const listIndex = (index + 1) + ((page - 1) * quantity)
    const { title, description, createDate, editDate, id, status} = value
    return (
    <>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-center"
        onClick={() =>{
          if(selectId === id) {
            setSelectId(0)
          }
          setSelectId(id)
        }}
      >{listIndex}
      <ItemWrapper className="ms-4 me-auto" >
        <div  style={{marginRight: "10px", fontWeight: "bold", cursor: "pointer"}}>{title}</div>
        <div>{value?.status === 'PUBLIC' ? <LockOpenIcon /> : <LockIcon />}</div>
      </ItemWrapper>
      <Badge bg="primary" pill>
        14
      </Badge>
      </ListGroup.Item>
      {
      selectId === id && status === "PUBLIC" ? 
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0px 5px'}}>
              <Form.Label style={{marginTop: '10px'}}>
                작성일시: {createDate} // 마지막 수정일자: {editDate}
              </Form.Label>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{deleteBoard(id)}}>
                Delete
              </Button>
            </div>
            <Form.Control as="textarea" rows={15} value={description} />
      </Form.Group> 
      : null
      }
      </>
  )
  }) ?? []

  return (
    <Box>
    <ListGroup as="ol" numbered>
      {boardList}
      <Page total={items.length} quantity={quantity} page={page} setPage={setPage} />
    </ListGroup>
    </Box>
  );
}

export default BoardList;