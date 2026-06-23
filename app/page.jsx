import './home.css';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export const metadata = {
  title: 'mywedding.events — Your wedding, beautifully organized',
};

export default function HomePage() {
  return (
    <div className="home" data-screen-label="Home">
      <Header centered withBrand={false} />
      <Slider />
    </div>
  );
}
