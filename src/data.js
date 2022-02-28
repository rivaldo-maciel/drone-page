import firstImage from './assets/agriculture.jpg';
import secondImage from './assets/topography.jpg';
import thirdImage from './assets/flyImage.jpg';
import profile from './assets/profile.png';

const data = {
  cardsHome : [
    {
      id: 1,
      src: firstImage,
      title: 'Agricultura',
      text: 'Use nossa tecnologia e nossa plataforma de serviços para contribuir com uma Agricultura Sustentável e Proteção de Lavouras.',
    },
    {
      id: 2,
      src: secondImage,
      title: 'Topografia',
      text: 'Realize levantamentos topográficos. Através deles você irá obter resultados tão precisos quanto a topografia convencional e realizar o georreferenciamento de áreas maiores em uma menor quantidade de tempo.',
    },
    {
      id: 3,
      src: thirdImage,
      title: 'Imagens Aéreas',
      text: 'Nossos drones são equipados com câmeras de alta tecnologia, garantindo assim a captura de imagens com resolução HD em qualquer lugar!'
    }
  ],
  Team: [
    {
      id: 4,
      src: profile,
      title: 'Lorem ipsum',
      text: 'CEO',
    },
    {
      id: 5,
      src: profile,
      title: 'Lorem ipsum',
      text: 'CTO',
    },
    {
      id: 6,
      src: profile,
      title: 'Lorem ipsum',
      text: 'MANAGER',
    },
  ],
};

export default data;