import { createContext, useState } from 'react';

const itemValues = {
   isOpenModal: false,
   offModal: () => {},
   onModal: () => {},
   BoradData: [],
   pushBoard: () => {},
}

export const MainContext = createContext(itemValues);


export const MainProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [boradData, setBoradData] = useState([])

  const onModal = () => {
    setIsOpenModal(true)
  }
  const offModal = () => {
    setIsOpenModal(false)
  }
  const pushBoard = (data) => {
    setBoradData(data)
  }

  return (
    <MainContext.Provider
      value={{
        isOpenModal,
        onModal,
        offModal,
        pushBoard,
        boradData,
      }}>
      {children}
    </MainContext.Provider>
  )
}