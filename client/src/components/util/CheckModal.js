import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalContext } from '../context/modalContext'
import {ModalBackground, ModalBox, ItemWrapper, ModalTitle, ButtonWrapper, Modaldiscription} from '../../components/Styles/Header/Modal.styled'

function CheckModal(props) {

const title = props.title || 'Title';	
const discription = props.discription || 'discription';
const goHome = localStorage.getItem('jwt-token') ? '/home' : false
console.log(goHome)

const { isOpen, offModal } = useContext(ModalContext);

  return isOpen ? (
    <ModalBackground>
		<ModalBox>
			<ItemWrapper>
				<ModalTitle>
				<strong>{title}</strong>
				</ModalTitle>
				<Modaldiscription>
				{discription}
				</Modaldiscription>
				<ButtonWrapper>
				<Button href={goHome} variant="primary" onClick={offModal}>확인</Button>
				</ButtonWrapper>
			</ItemWrapper>
	  </ModalBox>
    </ModalBackground>
  ) : null;
}

export default CheckModal;
