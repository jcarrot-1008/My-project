import { createContext, useState } from 'react';

const itemValues = {
   isOpen: false,
   offModal: () => {},
   onModal: () => {},
}

export const ModalContext = createContext(itemValues);


export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onModal = () => {
    setIsOpen(true)
  }
  const offModal = () => {
    setIsOpen(false)
  }
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onModal,
        offModal
      }}>
      {children}
    </ModalContext.Provider>
  )
}