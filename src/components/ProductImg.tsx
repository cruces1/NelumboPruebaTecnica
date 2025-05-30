import { Image } from 'antd';

interface Props {
	src: string;
}
const PhoneImg = ({ src }: Props) => {
	return <Image src={src} width={120} height={120} preview={false} />;
};

export default PhoneImg;
