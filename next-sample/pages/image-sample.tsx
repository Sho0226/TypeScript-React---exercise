import { NextPage } from "next";
import Image from "next/image";
import BibleImage from '@/public/image/bible.jpeg';

const ImageSample: NextPage = () => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/image/bible.jpeg" alt="Bible" />
            <p>Imageコンポーネントを使用して表示</p>
            <Image src={BibleImage} alt="Bible" />
            <p>Imageで表示した場合は描画エリアが確保されます</p>
        </div>
    )
}

export default ImageSample;
