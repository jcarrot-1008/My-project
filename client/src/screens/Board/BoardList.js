import React, {useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import {Box, ItemWrapper} from './BoardStyles/BoardStyles';
import Page from '../../components/util/Pagination'
import _slice from 'lodash/slice'

function BoardList(props) {
const { items, quantity } = props
const [page, setPage] = useState(1);
const firstItemNumber = 0 + ((page - 1) * quantity)
const lastItemNumber = quantity + ((page - 1) * quantity)
const boardListPage = _slice(items,firstItemNumber,lastItemNumber )
const boardList = boardListPage?.map((value) => {
  return (<ListGroup.Item
  as="li"
  className="d-flex justify-content-between align-items-center"
>
  <ItemWrapper className="ms-4 me-auto" >
    <div className="fw-bold" style={{marginRight: "10px"}}>{value?.title}</div>
    <div>{value?.status === 'PUBLIC' ? <LockOpenIcon /> : <LockIcon />}</div>
  </ItemWrapper>
  <Badge bg="primary" pill>
    14
  </Badge>
</ListGroup.Item>)
}) ?? []

console.log(firstItemNumber, lastItemNumber, boardListPage)
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