import { useCallback, useRef, useState } from 'react';
import { Checkbox, Col, InputNumber, Rate, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import useProductStore from '../../hooks/useProduct';
import { DownOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import SideBarCont from './SideBarCont'

const arrayChecks: string[] = ['Apple', 'Samsung', 'Huawei', 'Xiaomy', 'OPPp', 'Sony', 'Motorola'];

const SiderBar = () => {
	const { setValueChecked, filterByReviews, filterByPrice, setPriceRange } = useProductStore((state) => state);

	const [minPrice, setMinPrice] = useState<number>(100);
	const [maxPrice, setMaxPrice] = useState<number>(5000);

	const handleCheckboxChange = (checkedValues: string[]) => {
		setValueChecked(checkedValues);
	};

	const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
	const debounceFilterByPrice = useCallback(
		(min: number, max: number) => {
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}

			debounceTimeout.current = setTimeout(() => {
				filterByPrice({ min, max });
			}, 300); // 300ms de retraso
		},
		[filterByPrice],
	);

	const handlePriceChange = (min: number, max: number) => {
		setPriceRange({ min, max });
		debounceFilterByPrice(min, max);
	};
	

	const contenido = [
		{
			key: 1,
			text: <h4 >Marcas</h4>,
			icon: UserOutlined,
			children: [
				{
					key: 2,
					label: (
						<Checkbox.Group
							className='HHHHHH'
							style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', maxHeight: '90px', overflow: 'auto' }}
							onChange={handleCheckboxChange}
							options={arrayChecks}
						/>
					),
				},
			],
		},
		{
			text: <h4 >Precio</h4>,
			icon: LaptopOutlined,
			children: [
				{
					key: 3,
					label: (
						<div >
							<InputNumber
								min={0}
								value={minPrice}
								onChange={async (value) => {
									const numericValue = value ?? 0;
									await setMinPrice(numericValue);
									handlePriceChange(numericValue, maxPrice);
								}}
							/>
							-
							<InputNumber
								min={0}
								value={maxPrice}
								onChange={async (value) => {
									const numericValue = value ?? 0;
									await setMaxPrice(numericValue);
									handlePriceChange(minPrice, numericValue);
								}}
							/>
						</div>
					),
				},
			],
		},
		{
			text: <h4>Reviews</h4>,
			icon: NotificationOutlined,
			children: [{ key: 4, label: <Rate allowHalf defaultValue={4} onChange={filterByReviews} /> }],
		},
		{ text: <h4 >Memoria</h4>, icon: NotificationOutlined },
		{ text: <h4 >Rango</h4>, icon: NotificationOutlined },
		{ text: <h4 >Cámara</h4>, icon: NotificationOutlined },
	];




	return (
		<Row style={{ flexDirection: 'column', width: '300px', display: 'flex', marginLeft:'10%', marginTop:'5%' }}>
			<Col span={24}>
				<Row style={{ padding:'10px',width: '100%', alignItems: 'center', border: '1px solid grey', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }}>
					<Col xs={10} style={{ display: 'flex', justifyContent: 'center', borderRight: '1px solid grey' }}>Ordenar por:</Col>
					<Col xs={14} style={{ display: 'flex', justifyContent: 'center', fontWeight: '500' }}>
						Mejores reviews <DownOutlined style={{ marginLeft: '8px' }} />
						{/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Sider width={'100%'} theme='light'>
					<Col style={{ color: '#0047b9', boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', height: '100%', padding:'5px 25px' }}>
						{contenido.map(({ text, children }, index) => {
							return <SideBarCont key={index} text={text} children={children} />;
						})}
					</Col>
				</Sider>
			</Col>
		</Row>
	);
};

export default SiderBar;
