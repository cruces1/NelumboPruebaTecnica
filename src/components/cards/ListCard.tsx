import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import { useEffect } from 'react';
import useProductStore from '../../hooks/useProduct';
import PhoneCard from '../cards/cards';
import { response } from '../../models/utils/constant';

interface Props {
	handleOpen: (data: boolean) => void;
}

const ListCard = ({ handleOpen }: Props) => {
	const { products, valueChecked, filterProductsByMark, filterInfoProduct, setProducts } = useProductStore();

	useEffect(() => {
		if (valueChecked.length > 0) {
			filterProductsByMark(valueChecked);
		} else {
			setProducts(response);
		}
	}, [valueChecked]);

	return (
			<Row gutter={[16,18]}>
				<Col span={24}>
					<Row style={{ width:'90%'}} >
						<Input
							onChange={(e) => filterInfoProduct(e.target.value)}
							placeholder='Encuentra el producto que necesitas'
							prefix={<SearchOutlined />}
						/>
					</Row>
				</Col>
				{products.map((product, index) => (
					<Col key={index} style={{width:'33%'}}>
						<PhoneCard product={product} openModal={handleOpen} />
					</Col>
				))}
			</Row>
	);
};

export default ListCard;
