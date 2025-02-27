
import carro1 from "../../assets/images/Carpool.png";
import carro2 from "../../assets/images/Ord.png";
import fundo from '../../assets/images/yung.png'
import CardSobre from "../../components/sobrecard/SobreCard";

function Sobre() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="text-center  py-40 bg-cover bg-center" style={{ backgroundImage: `url(${fundo})` }}>
          <h2 className="text-5xl font-bold text-white mb-4 brightness-70">CONHEÇA O CARONA LEGAL</h2>
          <div className="mx-auto brightness-80">
            <p className="text-xl text-white mb-8 lg:pl-32 lg:pr-32  brightness-10">
              Conectamos pessoas e transformamos vidas! Nossa plataforma revoluciona a mobilidade no Brasil, facilitando caronas e corridas compartilhadas de forma segura, acessível e sustentável.
            </p>
          </div>
          {/* <button className="bg-green-900 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold">GET PLANTED DOWN</button> */}
        </section>

        {/* Welcome Section */}
        <section className="p-10" >
          <h2 className="text-3xl font-bold text-center mb-6 mt-20">HISTÓRIA DO CARONA LEGAL</h2>
          <p className="text-center text-gray-700 lg:pl-32 lg:pr-32 text-justify">
            Em 2025, nasceu nossa empresa com um propósito claro: transformar a mobilidade urbana por meio da tecnologia. Fundada por uma equipe dedicada de cinco desenvolvedores, nossa jornada começou no setor de aplicativos de carona, sempre com o compromisso de oferecer soluções inovadoras e acessíveis.

            Acreditamos que a mobilidade vai além do deslocamento; ela está diretamente ligada à qualidade de vida. Por isso, nossa missão é criar um ambiente onde tanto motoristas quanto passageiros possam se beneficiar de um serviço seguro, eficiente e justo.

            Com tecnologia, comprometimento e foco no usuário, seguimos evoluindo para conectar pessoas e facilitar o dia a dia de milhões de brasileiros.
          </p>
        </section>

        
        {/* Fitness Center Section */}
        <div className=" lg:pt-20">
        <h2 className="text-3xl font-bold text-center mb-6 pt-9 ">NOSSOS SERVIÇOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 " >
          {/* Coluna da Imagem */}
          <div className="flex justify-center  ">
            <img
              src={carro2} // Substitua pelo caminho da sua imagem
              alt="Descrição da imagem"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>

          {/* Coluna do Título e Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Solicite viagens particulares de onde estiver</h2>
            <p className="text-gray-600 text-xl text-justify">
              Precisa de mais privacidade e conforto? Com nosso serviço de Viagem Particular, você tem um carro só para você! Sem paradas extras, sem compartilhar o trajeto com outros passageiros – o motorista te leva direto ao destino com mais rapidez e comodidade. 🚗💨        </p>
          </div>
          {/* Coluna do Título e Texto */}
          <div className="text-center md:text-left lg:pl-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Aumente sua renda com viagens particulares</h2>
            <p className="text-gray-600 text-xl text-justify">
              Quer mais autonomia e ganhos? Com as Viagens Particulares, você atende passageiros que preferem um trajeto exclusivo, sem paradas no caminho. Isso significa corridas mais diretas, maior previsibilidade nos ganhos e uma experiência mais confortável para você e seu passageiro. 🚗💰        </p>
          </div>
          <div className="flex justify-center">
            <img
              src={carro1} // Substitua pelo caminho da sua imagem
              alt="Descrição da imagem"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
        </div>
        {/* Fitness Experience Section */}
        <section className="lg:pt-32 lg:p-20">
          <h2 className="text-3xl font-bold text-center mb-6">DESENVOLVEDORES</h2>
          <CardSobre />
        </section>
      </div>
    </>
  );
}

export default Sobre;