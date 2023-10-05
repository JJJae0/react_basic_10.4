import './Modal.scss';

const Modal = ({ children, setIsModal }) => {
	return (
		<aside className='Modal'>
			<div className='con'></div>
			<span onClick={() => setIsModal(false)}>close</span>
		</aside>
	);
};

export default Modal;
