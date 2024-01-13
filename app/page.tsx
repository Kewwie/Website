import Image from 'next/image';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';

export default function Home() {
    return (
        <div className="bg-white">
            <Header/>
            <Introduction/>
        </div>
    )
}
