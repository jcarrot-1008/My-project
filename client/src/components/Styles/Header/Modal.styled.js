import styled from 'styled-components'

/* 모달창의 배경을 만든다 */
export const ModalBackground = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
`
 
/* 모달창 영역을 꾸민다 */
export const ModalBox = styled.div`
  position: absolute;
  top: calc(50vh - 100px); 
  left: calc(50vw - 200px);
  background-color: white;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 200px;
`
export const ItemWrapper = styled.div`
    display: flex;
    width: 400px;
    height: 200px;
    flex-direction: column;
    align-items: center;
`
export const ModalTitle = styled.div`
    display: flex;
    width: 400px;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
`

export const Modaldescription = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 400px;
    flex: 1;
`

export const ButtonWrapper = styled.div`
    display: flex;
    width: 360px;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    margin-bottom: 20px;
`