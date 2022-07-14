import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { MainContext } from '../context/mainContext'
import {ModalBackground, ModalBox, ItemWrapper, ModalTitle, ButtonWrapper, Modaldescription} from '../../components/Styles/Header/Modal.styled'

function CheckModal(props) {

const title = props.title || 'Title';	
const description = props.description || 'description';
const url = props.url || null
const goHome = url ? url : localStorage.getItem('jwt-token') ? '/home' : false
console.log(url)
console.log(goHome)
const { isOpenModal, offModal } = useContext(MainContext);

  return isOpenModal ? (
    <ModalBackground>
		<ModalBox>
			<ItemWrapper>
				<ModalTitle>
				<strong>{title}</strong>
				</ModalTitle>
				<Modaldescription>
				{description}
				</Modaldescription>
				<ButtonWrapper>
				<Button href={goHome} variant="primary" onClick={offModal}>확인</Button>
				</ButtonWrapper>
			</ItemWrapper>
	  </ModalBox>
    </ModalBackground>
  ) : null;
}

export default CheckModal;
