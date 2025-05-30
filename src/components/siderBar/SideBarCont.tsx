import type { ReactNode } from 'react';

const SiderBarCont = ({ text, children }: { text: any | string; children: any }) => {
	return (
		<div>
			<span>{text}</span>
			{children &&
				children.map((child: { key: Number; label: ReactNode }, childIndex: Number) => (
					<div key={`sub${childIndex}`}>{child.label}</div>
				))}
		</div>
	);
};

export default SiderBarCont;
