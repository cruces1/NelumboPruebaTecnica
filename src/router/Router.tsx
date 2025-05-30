import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Index from '../screen/Index';
import SelectProduct from '../screen/SelectProduc'
import Menu from '../components/Menu';

const Router = () => {
	return (
		<BrowserRouter>
			<Menu>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/select-product" element={<SelectProduct />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Menu>
		</BrowserRouter>
	);
};

export default Router;
