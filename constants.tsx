import React from 'react';
import type { Innovation, InnovationSectionData } from './types';

export const Logo: React.FC<any> = (props) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M232.49,88.37,149.37,42.05a24,24,0,0,0-21.24,0L42.51,88.37A24,24,0,0,0,28,109.2V200a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V109.2A24,24,0,0,0,232.49,88.37Z" opacity=".2"/>
    <path fill="currentColor" d="M242.33,101.45,153.8,49.81a15.91,15.91,0,0,0-14.06,0L51.67,101.45A16,16,0,0,0,40,115.77V200a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V115.77A16,16,0,0,0,242.33,101.45ZM146.74,62.17l88.54,51.64-44.27,25.83-88.54-51.64Zm-32,0,44.27,25.83L70.47,139.64,26.2,113.81ZM56,121l88.53,51.64v50.4L56,171.41Zm144,102.44V172.64L200,171.41V121l-35.47,20.69v50.4Z"/>
  </svg>
);

export const ChevronDown: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const HamburgerIcon: React.FC<any> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const CloseIcon: React.FC<any> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Investors', path: '/investors' },
  {
    name: 'Our Innovations',
    path: '/innovations',
    sublinks: [
      { name: 'Agriculture', path: '/innovations/agriculture' },
      { name: 'Spirulina', path: '/innovations/spirulina' },
      { name: 'PrakritiVriksha', path: '/innovations/prakritivriksha' },
      { name: 'Nutraceuticals', path: '/innovations/nutraceuticals' },
      { name: 'VitalAir', path: '/innovations/vitalair' },
    ],
  },
];

export const innovationsData: Innovation[] = [
  {
    id: 'agriculture',
    name: 'Precision Hydroponic Farming',
    shortName: 'Agriculture',
    tagline: 'Cultivating Purity, Harvesting Trust.',
    description: 'Our state-of-the-art hydroponic and aeroponic farms use AI, IoT, and robotics to grow produce with unparalleled purity and traceability, free from pesticides and contaminants.',
    imageUrl: 'https://source.unsplash.com/1024x768/?hydroponics,lab,futuristic',
    heroImage: 'https://source.unsplash.com/1920x1080/?hydroponics,farm,futuristic',
    cardImage: 'https://source.unsplash.com/500x500/?hydroponics,glowing,plant,futuristic',
  },
  {
    id: 'spirulina',
    name: 'Spirulina Superfood',
    shortName: 'Spirulina',
    tagline: 'The Future of Nutrition, Cultivated.',
    description: 'We cultivate high-purity spirulina in AI-monitored photobioreactors, creating a sustainable superfood packed with protein and nutrients for a healthier world.',
    imageUrl: 'https://source.unsplash.com/1024x768/?spirulina,powder,green',
    heroImage: 'https://source.unsplash.com/1920x1080/?bioreactor,science,lab',
    cardImage: 'https://source.unsplash.com/500x500/?spirulina,petri,dish,glowing',
  },
  {
    id: 'prakritivriksha',
    name: 'PrakritiVriksha',
    shortName: 'PrakritiVriksha',
    tagline: 'The Tree of Nature, Reimagined.',
    description: 'PrakritiVriksha is our revolutionary photobioreactor that purifies air with the efficiency of hundreds of trees, combating urban pollution and creating healthier cities.',
    imageUrl: 'https://source.unsplash.com/1024x768/?air,purifier,city,futuristic',
    heroImage: 'https://source.unsplash.com/1920x1080/?city,clean,energy,future',
    cardImage: 'https://source.unsplash.com/500x500/?bioreactor,urban,futuristic,glowing',
  },
  {
    id: 'nutraceuticals',
    name: 'Advanced Nutraceuticals',
    shortName: 'Nutraceuticals',
    tagline: 'Seed-to-Supplement Purity.',
    description: 'We create high-potency nutraceuticals with complete traceability, from our SKY-Ponics harvest to QR-coded final products, ensuring what you consume is pure and effective.',
    imageUrl: 'https://source.unsplash.com/1024x768/?supplements,capsules,lab',
    heroImage: 'https://source.unsplash.com/1920x1080/?laboratory,science,research',
  },
  {
    id: 'vitalair',
    name: 'VitalAir Oxygen',
    shortName: 'VitalAir',
    tagline: 'Breathe the Future.',
    description: 'Experience pure, revitalizing oxygen with VitalAir. Sourced from our PrakritiVriksha systems, it offers a boost in energy, performance, and well-being.',
    imageUrl: 'https://source.unsplash.com/1024x768/?oxygen,mask,clean,air',
    heroImage: 'https://source.unsplash.com/1920x1080/?mountain,air,clean,nature',
  },
];

export const innovationSectionsData: InnovationSectionData[] = [
  {
    id: 'smart-green-pods',
    title: 'Smart Green Pods',
    description: 'Decentralized, automated, personal farms for your home or office. Experience the ultimate in food purity and convenience with our glowing 3D glass pods.',
    backgroundVideo: 'https://videos.pexels.com/video-files/8553229/8553229-hd_1920_1080_25fps.mp4',
    posterImage: 'https://source.unsplash.com/1920x1080/?greenhouse,futuristic,glowing',
    cards: [
      { id: 'pod-home', title: 'Aura Home Pod', tagline: 'Harvest at your Fingertips', imageUrl: 'https://source.unsplash.com/800x600/?pod,home,interior,plant', description: 'The Aura Pod brings the farm to your countertop. Its elegant, glowing design complements any modern home, providing a continuous supply of fresh herbs and greens. AI-driven environmental controls ensure perfect growth with zero effort.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Flower/glTF-Binary/Flower.glb', modelScale: 5 },
      { id: 'pod-office', title: 'Oasis Business Pod', tagline: 'Wellness in the Workplace', imageUrl: 'https://source.unsplash.com/800x600/?pod,office,tech,plant', description: 'Elevate your corporate environment with the Oasis Pod. This larger-scale system provides fresh produce for office canteens and promotes a culture of health and sustainability among employees.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Flower/glTF-Binary/Flower.glb', modelScale: 10 },
    ],
  },
  {
    id: 'wellness-boxes',
    title: 'Salad & Wellness Boxes',
    description: 'Curated selections of our finest produce, delivered to your door. Each box is a journey into peak nutrition and exotic flavors, backed by blockchain-verified purity.',
    backgroundVideo: 'https://videos.pexels.com/video-files/6980299/6980299-hd_1920_1080_25fps.mp4',
    posterImage: 'https://source.unsplash.com/1920x1080/?salad,fresh,food',
    cards: [
      { id: 'box-salad', title: 'Chroma Salad Box', tagline: 'Vibrancy in Every Bite', imageUrl: 'https://source.unsplash.com/800x600/?salad,box,delivery', description: 'A weekly subscription box featuring a rainbow of lettuces, microgreens, and edible flowers. Perfect for creating spectacular salads that are as beautiful as they are nutritious.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb', modelScale: 1 },
      { id: 'box-juice', title: 'Vitality Juice Box', tagline: 'Pure Energy, Cold-Pressed', imageUrl: 'https://source.unsplash.com/800x600/?juice,cleanse,health', description: 'Everything you need for a week of powerful, nutrient-dense juices. Our selection includes specialized greens and herbs known for their detoxifying and energizing properties.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb', modelScale: 1.2 },
      { id: 'box-exotic', title: 'Odyssey Exotic Box', tagline: 'Explore a World of Flavor', imageUrl: 'https://source.unsplash.com/800x600/?exotic,fruit,box', description: 'A curated adventure for the culinary artist. The Odyssey Box features rare and exotic greens and fruits grown in our precision farms, allowing you to explore tastes from around the world.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb', modelScale: 1.5 },
    ],
  },
  {
    id: 'installations',
    title: 'Corporate & Govt. Installations',
    description: 'Transforming urban landscapes into beacons of sustainability. Our large-scale installations integrate food production and air purification into the very fabric of the city.',
    backgroundVideo: 'https://videos.pexels.com/video-files/5495898/5495898-hd_1920_1080_25fps.mp4',
    posterImage: 'https://source.unsplash.com/1920x1080/?futuristic,city,architecture',
    cards: [
      { id: 'install-facade', title: 'Living Facades', tagline: 'Buildings that Breathe', imageUrl: 'https://source.unsplash.com/800x600/?green,facade,building', description: 'Retrofit existing skyscrapers with hydroponic vertical farms, turning them into carbon sinks that produce food for their inhabitants. A stunning fusion of architecture and agriculture.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SciFiHelmet/glTF-Binary/SciFiHelmet.glb', modelScale: 2 },
      { id: 'install-dome', title: 'Bio-Domes', tagline: 'Ecosystems under Glass', imageUrl: 'https://source.unsplash.com/800x600/?biodome,architecture', description: 'Large-scale, self-contained agricultural ecosystems for communities and research. These domes can be deployed in any climate, providing food security and a lush green space for urban dwellers.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SciFiHelmet/glTF-Binary/SciFiHelmet.glb', modelScale: 2.5 },
    ],
  },
  {
    id: 'research',
    title: 'AI & Hydroponics Research',
    description: 'The neural network behind our agricultural revolution. Our R&D division continuously pushes the boundaries of what\'s possible in controlled environment agriculture.',
    backgroundVideo: 'https://videos.pexels.com/video-files/8538743/8538743-hd_1920_1080_25fps.mp4',
    posterImage: 'https://source.unsplash.com/1920x1080/?data,server,network',
    cards: [
      { id: 'research-ai', title: 'Gaia AI Platform', tagline: 'The Mind of the Farm', imageUrl: 'https://source.unsplash.com/800x600/?ai,robot,brain', description: 'Our proprietary AI, Gaia, monitors millions of data points per second to optimize growth cycles, predict yields, and ensure the highest possible nutrient density in every plant.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF-Binary/BrainStem.glb', modelScale: 1 },
      { id: 'research-genetics', title: 'Seed Vault Program', tagline: 'Preserving for the Future', imageUrl: 'https://source.unsplash.com/800x600/?seed,vault,genetics', description: 'We are developing a library of climate-resilient and nutrient-optimized seeds, ensuring biodiversity and the future of food through advanced genetic research and cryo-preservation.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF-Binary/BrainStem.glb', modelScale: 1.2 },
    ],
  },
    {
    id: 'parent-brand',
    title: 'Sky Blix Agro Science',
    description: 'The parent brand and innovation hub powering a global ecosystem of food, wellness, and air purification technologies. We are the architects of a sustainable future.',
    backgroundVideo: 'https://videos.pexels.com/video-files/853507/853507-hd_1920_1080_30fps.mp4',
    posterImage: 'https://source.unsplash.com/1920x1080/?globe,network,connection',
    cards: [
      { id: 'brand-mission', title: 'Our Mission', tagline: 'Technology for Humanity', imageUrl: 'https://source.unsplash.com/800x600/?mission,earth,space', description: 'To create a world where advanced technology and nature coexist in perfect harmony, solving humanity\'s greatest challenges in food security, health, and environmental sustainability.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MetalRoughSpheres/glTF-Binary/MetalRoughSpheres.glb', modelScale: 1 },
      { id: 'brand-ecosystem', title: 'The Ecosystem', tagline: 'A Connected Future', imageUrl: 'https://source.unsplash.com/800x600/?ecosystem,network,abstract', description: 'Sky Blix is more than a company; it\'s a connected ecosystem. From our AI platform to our consumer products, every element works in synergy to create a healthier planet and a healthier you.', modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MetalRoughSpheres/glTF-Binary/MetalRoughSpheres.glb', modelScale: 1.2 },
    ],
  },
];