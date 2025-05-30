import { Button, Col, Divider, Image, Modal, Row } from 'antd';

import user from '../assets/images/cliente.jpg';
import phone from '../assets/images/imagen3.jpg';
import check from '../assets/images/check.webp';
import useProductStore from '../hooks/useProduct';
import { useNavigate } from 'react-router-dom';

interface Props {
	isOpen: boolean;
	handleOpen: (data: boolean) => void;
}

const PhoneModal = ({ isOpen, handleOpen }: Props) => {
	const navigate = useNavigate();
	const { prodSelected, showDetailsInfoProduct } = useProductStore();

	const openProductView = (id: number) => {
		handleOpen(false);
		showDetailsInfoProduct(id);
		navigate(`/phones/${id}`);
	};

	const goToSelectProduct = () => {
		handleOpen(false);
		showDetailsInfoProduct(prodSelected.id);
		navigate('/select-product');
	};

	return (
		<Modal open={isOpen} onCancel={() => handleOpen(false)} closable={false} footer={null}>
			<Row gutter={[0, 15]}>
				<Col span={24}>
					<Image
						src={user}
						alt='imagen de prueba'
						preview={false}
						width={'100%'}
						height={200}
						onClick={() => openProductView(prodSelected.id)}
						style={{ cursor: 'pointer' }}
					/>
				</Col>
			</Row>
			<Row >
				<Col xs={8}>
				<Image src={phone} width={150} height={150} preview={false} alt='imagen telefono' />
				</Col>
				<Col xs={10} style={{display:'flex',fontWeight:'700',flexDirection:'column',marginTop:'20px' }}>
					<p>{prodSelected.name}</p>
					<p style={{ color: 'grey'}}>Color seleccionado : {prodSelected.color}</p>
					</Col>
					<Col xs={6} style={{ fontWeight:'600' }}>
						<p style={{ color: '#0149BE' }}>${prodSelected.price}</p>
						
					</Col>
				
			</Row>

			<Divider style={{ margin:'0'}}/>

			<Row  >
				<Col span={12} style={{display:'flex', justifyContent:'center'}}>
					<p>1 Item en tu carrito</p>
				</Col>
				<Col span={12} style={{display:'flex', justifyContent:'center'}}>
					<p style={{ color: '#0149BE' }}>Subtotal ${prodSelected.price}</p>
				</Col>
			</Row>

					<Divider style={{ margin:'0'}}/>

			<Row style={{display:'flex', flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
				<Col>
				<Image
					src={check}
					width={70}
					height={60}
					preview={false}
					alt='imagen de prueba telefono'
					style={{ borderRadius: '50%', boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}
				/>
				</Col>
				<Col>
				<p style={{fontWeight:'500'}}>Te vas a llevar este celular por solo</p>
				<p style={{ fontSize: 20, fontWeight:'700',justifyContent:'center',display:'flex' }}>$120 p/semana!</p>
				</Col>
				<Col>
				<Button
					style={{
							backgroundColor: '#ffd300',
							height: 50,
							width: 'auto',
							color: 'blue',
							justifyContent: 'end',
							borderStyle: 'none'
						}} 
					onClick={goToSelectProduct}
				>
					COMPRAR A CREDITO
				</Button>
				</Col>
				<Col>
				<p style={{ color: 'grey'}} >---------- o puedes ------------</p>
				<p style={{ color: '#0149BE' ,display:'flex',justifyContent:'center' }}>Comprar de contado</p>
				</Col>
			</Row>
		</Modal>
	);
};

export default PhoneModal ;