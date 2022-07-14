import React, {useState, useContext} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Box} from './BoardStyles/BoardStyles'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import CheckModal from '../../components/util/CheckModal'
import { MainContext } from '../../components/context/mainContext'

function CreateBoard() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { onModal } = useContext(MainContext);
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(`${event.target.value}`)
  }

  const reset = () => {
    setTitle('')
    setDescription('')
  }
  const jwtToken = localStorage.getItem('jwt-token')
  const onSubmit = () => {

     fetch('http://localhost:3030/boards/',{
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jwtToken },
                body: JSON.stringify({
                  title: {title},
                  description: {description},
                })
        }).then(res => res.json()).then(res => {
          if(res.id) {
            onModal()
          }
        })
  }
  return (
    <Box>
      <FloatingLabel
        controlId="floatingTextarea"
        label="제목"
        className="mb-3"
      >
        <Form.Control 
        as="textarea" 
        placeholder="Leave a comment here"
        value={title}
        onChange={handleChangeTitle}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="내용">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '300px' }}
          value={description}
          onChange={handleChangeDescription}
        />
      </FloatingLabel>
      <div style={{ height: '30px' }} />
      <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary" onClick={onSubmit}>등록</Button>
      <Button variant="outline-secondary" onClick={reset}>취소하기</Button>
    </Stack>
    <CheckModal title={'게시물을 등록하였습니다.'} description={`제목: ${title}`} url={'/board'} />
    </Box>
  );
}

export default CreateBoard;