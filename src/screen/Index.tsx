import { useState } from 'react';
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import PhoneModal from '../components/PhoneModal';
import ListCard from '../components/cards/ListCard';
import SiderBar from '../components/siderBar/SiderBar';

const Index = () => {
	
	const [isOpenBuyProductModal, setIsOpenBuyProductModal] = useState<boolean>(false);

	const productModalOpen = (data: boolean) => {
		setIsOpenBuyProductModal(data);
	};
	return (
		<Layout style={{flexDirection:'column'}}>
			<Row  >
				<Col xs={8}>
					<SiderBar />
				</Col>
				<Col xs={16} style={{ marginTop: '15px' }}>
					<Content>
						<ListCard handleOpen={productModalOpen} />
					</Content>
				</Col>
				<PhoneModal isOpen={isOpenBuyProductModal} handleOpen={productModalOpen} />
			</Row>
		</Layout>
	);
};

export default Index;
