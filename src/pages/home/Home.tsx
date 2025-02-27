import ListaCorridas from '../../components/corrida/listacorrida/ListaCorridas';
import ModalCorrida from '../../components/modalcorridas/ModalCorridas';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images: string[] = [
    "/images/foto_01_cl.png",
    "/images/foto_02_cl.png",
    "/images/foto_03_cl.png",
    "/images/foto_04_cl.png",
];

const ImageCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegação personalizada (setas) */}
      <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 text-[#325c28] z-10"></div>
      <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 text-[#325c28] z-10"></div>
    </div>
  );
};

function Home() {
  return (
    <>
      <div className="bg-[#FFFFFF] min-h-screen flex flex-col justify-center">
        <div className='container grid grid-cols-2 text-[#111f0d]'>
          <div className="flex flex-col gap-4 items-center justify-center py-6">
            <h2 className='text-5xl font-bold'>
              Seja Bem-Vindo!
            </h2>
            <p className='text-xl text-center'>
              Conectamos pessoas e destinos<br></br>Pegue uma carona hoje!
            </p>
            <div className="flex justify-around gap-4">
              <ModalCorrida />
            </div>
          </div>
          <ImageCarousel />
        </div>
      </div>
      
      <h2 className='text-5xl font-bold text-left text-[#111f0d] px-20'>
        Corridas
      </h2>
      <ListaCorridas />
    </>
  );
}

export default Home;