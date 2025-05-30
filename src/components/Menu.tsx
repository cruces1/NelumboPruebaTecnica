import React, { ReactNode } from 'react';
import { Layout, Image, Button, Row, Col } from 'antd';
import logo from '../assets/icons/Logo5.png';
import footer from '../assets/images/footer_tapa.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Footer } from 'antd/es/layout/layout';

const { Header } = Layout;
const itemsSubMenu = [
    {
        text: 'Home',
    },
    {
        text: 'Celulares',
    },
    {
        text: 'Motocicletas',
    },
    {
        text: 'Tus préstamos',
    },
    {
        text: 'Tiendas',
    },
    {
        text: 'Tracking',
    },
    {
        text: 'Club Macropay',
    },
];

interface MenuProps {
    children?: ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {

	return (
		<>
			<Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
				<Header style={{ display: 'flex', alignItems: 'center', backgroundColor: "#0047b9", height: '100px',width:'100%', paddingLeft:'90px', paddingRight:'0px' }}>
					<Row style={{width:'100%'}} >
						<Col xs={14}>
							<Image src={logo} width={250} height={50} preview={false} alt='logo MacroPay' />
						</Col>
						<Col xs={5} style={{width:'100%', alignItems: 'center',justifyContent:'center',display:'flex'}} >
							<Button style={{
								backgroundColor: '#ffd300',
								height: 50,
								width: 140,
								color: 'blue',
								borderStyle: 'none'
							}}  >
								Crear Tu Cuenta
							</Button>
						</Col>
						<Col xs={5}>
							<Button style={{
								backgroundColor: 'transparent',
								height: 50,
								width: 140,
								color: '#ffd300',
								justifyContent: 'end',
								borderStyle: 'none',
							}}  >
								Iniciar sesion
								<ShoppingCartOutlined style={{ color: 'black', borderRadius: '15px', backgroundColor: 'white', padding: '6px' }} />
							</Button>
						</Col>

					</Row>
					
				</Header>
				<Row
				style={{background:'white',boxShadow: '2px 2px 10px rgba(52, 49, 49, 0.5)', paddingLeft:'5%'}}>
					{itemsSubMenu.map((item, index) => (
						<div style={{ background: '#fff', padding: '20px' }} key={index} >
							{item.text}
						</div>
					))}

				</Row>
				
				<Col style={{ flex: '1 0 auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
					{children}
				</Col>
				
				<Footer style={{ 
					textAlign: 'center', 
					padding: 0, 
					marginTop: 'auto', 
					width: '100%'
				}}>
					<Image src={footer} preview={false} width="100%" />
				</Footer>
			</Layout>
		</>
	);
};

export default Menu;