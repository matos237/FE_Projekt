// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    showOption: "current",
    motorcycles: [
      {
        id: 0,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000,
        image: "https://c4.wallpaperflare.com/wallpaper/212/696/907/red-ducati-monster-beach-wallpaper-preview.jpg",
        description:"The Ducati Monster 696 of 2009 epitomizes a harmonious synthesis of aesthetic allure and dynamic prowess. This iconic motorcycle emanates an aura of distinctiveness, marrying style and performance seamlessly. Its engine, a formidable powerplant, unleashes a thrilling symphony as riders navigate varied landscapes. The Monster 696's design, marked by exposed components and a streamlined frame, emanates an understated elegance that captivates onlookers. An embodiment of versatility, this bike effortlessly adapts to the demands of city streets and winding roads alike, making it a versatile companion for diverse riding scenarios. Imbued with technological sophistication, the Monster 696 integrates modern features, ensuring an immersive and responsive riding experience. The attention to detail and quality craftsmanship underscore its enduring appeal, positioning the Monster 696 as a timeless icon within the realm of motorcycles, beckoning riders to embark on journeys where style meets performance with remarkable finesse."
      },
      {
        id: 1,
        brand: "Kawasaki",
        model: "Ninja 400",
        year: 2023,
        engine: "Inline-2 399cc",
        topSpeed: 180,
        price: 6995,
        image: "https://imotorcarsearch.s3.amazonaws.com/vehicles/large/2447462-E17749-c4f00899-f6e2-58b1-8618-1f8ad5d04229.jpg",
        description:"The Kawasaki Ninja 400 2023 is a dynamic and visually striking motorcycle, known for its spirited performance and cutting-edge design. Equipped with a powerful engine, this bike delivers an exhilarating ride, balancing speed and control seamlessly. The aerodynamic silhouette enhances its sporty appeal, while the carefully crafted chassis ensures stability and precision on the road. With advanced engineering, the Ninja 400 2023 achieves a harmonious blend of form and function. Riders will appreciate the intuitive handling and responsive nature of this motorcycle, making it suitable for both urban rides and open-road adventures. The sleek lines and modern aesthetics contribute to its overall allure, capturing the essence of Kawasaki's commitment to innovation and excellence in the world of sport bikes."
      },
      {
        id: 2,
        brand: "Kawasaki",
        model: "Ninja ZX-6R",
        year: 2013,
        engine: "Inline-4 636cc",
        topSpeed: 260,
        price: 12000,
        image: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/ZX-6R-636-2013-3-4-front-SE-lime-white_007.png",
        description:"The Kawasaki Ninja ZX-6R 2013 stands as a testament to performance and design synergy, offering riders a thrilling and visually captivating experience. Renowned for its dynamic capabilities, this motorcycle harnesses an energetic engine to deliver an exhilarating ride. The distinctive bodywork, characterized by aerodynamic lines, not only enhances its sporty aesthetics but also contributes to optimal airflow and efficiency. Crafted with precision, the chassis ensures a seamless fusion of agility and stability, providing riders with confident control on diverse terrains. The ZX-6R's responsive handling is complemented by advanced suspension technology, enhancing rider confidence in various riding conditions. Striking a balance between form and function, the ZX-6R 2013 encapsulates Kawasaki's commitment to pushing the boundaries of sportbike innovation. This motorcycle beckons enthusiasts with its dynamic performance and captivating design, inviting them to embark on thrilling journeys with a machine that embodies the spirit of speed and precision."
      },
      {
        id: 3,
        brand: "KTM",
        model: "Super Duke 1290 R",
        year: 2019,
        engine: "V-Twin 1301cc",
        topSpeed: 290,
        price: 17999,
        image: "https://c4.wallpaperflare.com/wallpaper/950/183/595/ktm-1290-super-duke-r-wallpaper-preview.jpg",
        description:"The KTM Super Duke 1290 R exudes an aura of unmatched power and unrivaled style, standing as a paragon of performance in the motorcycle realm. This dynamic two-wheeled marvel boasts an incredibly potent engine that propels riders into a realm of adrenaline-infused experiences. Distinguished by its aggressive design, the Super Duke 1290 R commands attention with its muscular silhouette and edgy contours. Its frame, a testament to engineering prowess, marries robustness with agility, ensuring riders a harmonious blend of stability and responsiveness. The motorcycle's cutting-edge suspension system, meticulously tuned, elevates the riding experience to unprecedented heights, delivering unparalleled comfort and control. Striking a perfect equilibrium between aesthetics and functionality, the Super Duke 1290 R captivates not only with its dominating presence but also with its ability to conquer roads with unbridled authority, inviting enthusiasts to revel in the exhilarating realm of high-performance motorcycling."
      },
      {
        id: 4,
        brand: "Honda",
        model: "CB500F",
        year: 2018,
        engine: "Inline-2 471cc",
        topSpeed: 180,
        price: 4000,
        image: "https://i.pinimg.com/1200x/af/58/70/af5870f0a6d52bb5f383914fa19ec1c6.jpg",
        description:"In the motorcycling realm, the Honda CB500F of 2018 emerges as a compelling testament to design ingenuity and dynamic capability. This motorcycle, with its distinctive profile, signifies a union of aesthetic finesse and functional prowess. Powered by an engine that embodies spirited performance, the CB500F commands the road with a captivating blend of efficiency and agility. Its sleek frame and contemporary lines contribute to an overall aesthetic that is both modern and timeless, appealing to riders seeking a balance of style and substance. The CB500F seamlessly integrates rider-friendly features, ensuring a smooth and responsive journey. With a focus on versatility, this bike effortlessly navigates urban landscapes and open highways, offering riders a dynamic experience that transcends conventional boundaries. In the realm of two-wheeled excellence, the Honda CB500F 2018 stands as an embodiment of innovation, inviting enthusiasts to embrace the exhilaration of the open road."
      },
      {
        id: 5,
        brand: "Aprilia",
        model: "RSV4 1100 Factory",
        year: 2022,
        engine: "V4 1099cc",
        topSpeed: 299,
        price: 21999,
        image: "https://imgcdn.zigwheels.my/large/gallery/exterior/52/1639/aprilia-rsv4-1100-factory-slant-rear-view-full-image-709240.jpg",
        description:"The Aprilia RSV4 1100 Factory of 2022 is an epitome of performance engineering and visual sophistication. This motorcycle, a culmination of cutting-edge design and advanced technology, commands attention with its authoritative presence on the road. Driven by a high-performance engine, the RSV4 1100 Factory offers riders an exhilarating journey marked by robust power delivery and precise control. Its aerodynamic silhouette, characterized by sleek lines and angular contours, not only enhances its visual appeal but also optimizes airflow for superior performance. The chassis, an engineering marvel, harmonizes strength and agility, delivering a ride that balances stability and responsiveness. Equipped with top-tier suspension and braking systems, this bike ensures riders experience uncompromised control and confidence in every maneuver. Meticulous attention to detail and superior craftsmanship further elevate the RSV4 1100 Factory's status, making it a coveted choice for riders seeking a seamless fusion of style and high-performance capability."
      },
    ],
    contacts: [
      {
        id: 1,
        name: "Matej Svrček",
        email: "matovmail@gmail.com",
        message: "Stranka o motorkach a su tu udaje o 6 motorkach, si normalny?",
        status: true
      },
      {
        id: 2,
        name: "Satej Mvrček",
        email: "satovmail@gmail.com",
        message: "?normalny si, motorkach 6 o udaje tu su a motorkach o Stranka",
        status: true
      }
    ]
  }),
  actions: {
    addMotorcycle(motorcycle) {
      this.motorcycles.push({id:this.motorcycles.length+1,...motorcycle});
      console.log(this.motorcycles);
    },
    addContact(contact) {
      this.contacts.push({id:this.contacts.length+1,...contact});
      console.log(this.contacts);
    },
    changeState(id){
      this.contacts[id-1].status = false;
      console.log(this.contacts.status);
      console.log(this.contacts);
    },
    changeDisplay(){
      if(this.showOption == "current"){
        this.showOption = "solved";
      }else{
        this.showOption="current"
      }
    }
  },
});
