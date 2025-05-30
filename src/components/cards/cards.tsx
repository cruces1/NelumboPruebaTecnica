import { useEffect, useState, useRef } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Rate, Row } from 'antd';
import { type Product } from '../../models/Product';
import useProductStore from '../../hooks/useProduct';

interface Props {
	product: Product;
	openModal: (data: boolean) => void;
}

const PhoneCard = ({ product, openModal }: Props) => {
	const { setProduct } = useProductStore();
	const [shouldEnableOverflow, setShouldEnableOverflow] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		const checkCardSize = () => {
			if (cardRef.current) {
				// Activar overflow cuando el ancho de la card sea menor a 300px
				setShouldEnableOverflow(cardRef.current.offsetWidth < 300);
			}
		};
		
		// Verificar al inicio
		checkCardSize();
		
		// Verificar cuando cambie el tamaño de la ventana
		window.addEventListener('resize', checkCardSize);
		return () => {
			window.removeEventListener('resize', checkCardSize);
		};
	}, []);

	const openDetails = () => {
		openModal(true);
		setProduct(product);
	};

	return (
		<Card 
			ref={cardRef}
			style={{
				minWidth:'10%',
				maxWidth:'100%',	
				display:'flex',
				justifyContent:'center',
				overflow: shouldEnableOverflow ? 'auto' : 'hidden'
			}}
		>
			<Image
				onClick={openDetails}
				src={product.urlImg}
				alt='imagen de prueba'
				height={220}
				width={200}
				preview={false}
			/>
			<Divider />

			<Row >
				
				<Row style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
					
					<Col span={8} style={{ fontWeight: 600, whiteSpace:'nowrap',display:'flex',flexDirection:'column' }}>
						{product.name}
						<Rate allowHalf defaultValue={product.score} /></Col>

					<Col span={10}  style={{ color: '#0149BE', fontWeight: 700, fontSize: 30, display:'flex',flexDirection:'column',alignItems:'flex-end'}}>${product.price}
					<br/>
					<span style={{color:'grey',fontWeight:'normal',fontSize:15,textDecoration:'line-through'}}>4,100</span>
					</Col>


				</Row>
				<Row gutter={60} style={{ display: 'flex', flexDirection: 'row' }} >
					<Col xs={24} md={12}>
						<p style={{ fontSize: 10, color: 'gray' }}>$120 p/semana</p>
						<p style={{ fontSize: 10, color: 'gray' }}>o $520 p/mes</p>
					</Col>
					<Col xs={24} md={12}>

						<Button
							style={{
								backgroundColor: '#ffd300',
								height: 35,
								width: '100%',
								color: 'blue',
								justifyContent: 'center',
								borderStyle: 'none',
								minWidth: 'fit-content'
							}}
							onClick={openDetails}

						>
							Lo Quiero!
						</Button>
					</Col>
				</Row>
			</Row>

			<Col style={{ position: 'absolute', right: 0, top: 0, padding: 10 }}>
				<HeartOutlined style={{ fontSize: 'xx-large', color: 'gray', fontWeight: 100 }} />
			</Col>
		</Card>
	);
};

export default PhoneCard;
