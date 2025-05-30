import { Breadcrumb, Button, Col, Image, Rate, Row, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../hooks/useProduct';
import ProductImg from '../components/ProductImg';

const SelectedPhone = () => {
	const navigate = useNavigate();
	const { prodSelected } = useProductStore();

	const items = [
		{
			key: "1",
			label: "Otras Especificaciones",
			children: (
				<div>
					<table
						cellPadding={10}
						style={{ width: "100%", borderCollapse: "collapse", borderRadius: '65px 150px 15px 150px' }}
					>
						<tbody>
							<tr>
								<td>Fabricante</td>
								<td>{prodSelected.mark}</td>
							</tr>
							<tr>
								<td>Peso del Producto</td>
								<td>{prodSelected.weightProd}</td>
							</tr>
							<tr>
								<td>Dimensiones</td>
								<td >{prodSelected.dimensions}</td>
							</tr>
							<tr>
								<td>País de Origen</td>
								<td >
									{prodSelected.countryOrigin ?? "N/A"}
								</td>
							</tr>
							<tr>
								<td>Número de Modelo</td>
								<td >{prodSelected.modelNumber}</td>
							</tr>
							<tr>
								<td>Color</td>
								<td >{prodSelected.color}</td>
							</tr>
							<tr>
								<td>Material</td>
								<td >{prodSelected.material}</td>
							</tr>
							<tr>
								<td>Cantidad de Partes</td>
								<td >{prodSelected.cantParts}</td>
							</tr>
							<tr>
								<td>Características Especiales</td>
								<td >
									{prodSelected.specialFeatures}
								</td>
							</tr>
							<tr>
								<td>Componentes Incluidos</td>
								<td >
									{prodSelected.componentsIncluded ?? "N/A"}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			),
		},
		{
			key: "2",
			label: "Reviews",
			children: (
				<>
				</>
			)
		}
	]

	return (
		<Row gutter={[16, 24]} style={{ width: '100%', marginLeft: '80px' }}>
			<Row style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
				<Col>

					<Button color="default" variant="outlined" style={{ background: 'transparent', color: 'grey', marginRight: '20px' }} onClick={() => navigate(-1)}>
						Volver a resultados
					</Button>
				</Col>
				<Col >
					<Breadcrumb
						style={{ color: '#0149BE' }}
						items={[
							{
								title: 'Celulares',
							},
							{
								title: prodSelected.mark,
							},
							{
								title: prodSelected.name,
							},
						]}
					/>
				</Col>
			</Row>

			<Row gutter={16} >

				<Col span={3}>
					{Array.from({ length: 4 }).map((_, index) => (
						<Row key={index}>
							<ProductImg src={prodSelected.urlImg} />
						</Row>
					))}
				</Col>
				<Col span={8} >
					<Image src={prodSelected.urlImg} width={'auto'} height={'100%'} style={{ borderRadius: '2%' }} />
				</Col>

				<Col span={12}>
					<Row >
						<Col span={18}>
							<h1>{prodSelected.name}</h1>
						</Col>
						<Col span={6}>
							<h1 style={{ color: '#0149BE' }}>
								${prodSelected.price}
							</h1>
						</Col>

						<Rate value={prodSelected.score} />

					</Row>
					<Row>
						<p style={{ textAlign: 'justify', marginRight: '90px' }}>
							Samsung incluyó en los Galaxy A10 Fan Edition una amplia gama de colores, que se adaptan a estilos y
							personalidades diferentes. Sea el usuario una persona optimista, elegante, tranquilo, extrovertido,
							los colores Azul, Blanco, Rojo, Violeta, Verde Menta y Naranja no pasarán desapercibidos. Además,
							presenta elementos de diseño elegantes, delgados y ergonómicos de la familia Galaxy S20,
							así como un efecto de niebla texturizado premium que reduce las huellas dactilares y las manchas.
						</p>
						<p style={{ color: '#0149BE' }}>Ver mas</p>
					</Row>
					<Row style={{ right: 0 }}>

					</Row>
					<Row></Row>
				</Col>
			</Row>



			<Row gutter={[16, 24]} style={{ display: 'contents' }}>
				<Col span={12} >
				<h5>Información Detallada Del Producto</h5>
					<Image
						src={prodSelected.urlImg}
						alt='imagen de prueba'
						height={400}
						width={200}
						style={{ padding: '5%' }}
						preview={false}
					/>
					<Image
						src={prodSelected.urlImg}
						alt='imagen de prueba'
						height={400}
						width={200}
						style={{ padding: '5%' }}
						preview={false}
					/>
				</Col>
				<Col span={12}>
					<Row>
						<Tabs defaultActiveKey="1" items={items} />
					</Row>
				</Col>
			</Row>


		</Row>
	);
};

export default SelectedPhone;