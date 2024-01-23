// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    motorcycles: [
      {
        id: 0,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000,
        description:""
      },
      {
        id: 1,
        brand: "Kawasaki",
        model: "Ninja 400",
        year: 2023,
        engine: "Inline-2 399cc",
        topSpeed: 180,
        price: 6995,
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
        description:"The KTM Super Duke 1290 R exudes an aura of unmatched power and unrivaled style, standing as a paragon of performance in the motorcycle realm. This dynamic two-wheeled marvel boasts an incredibly potent engine that propels riders into a realm of adrenaline-infused experiences. Distinguished by its aggressive design, the Super Duke 1290 R commands attention with its muscular silhouette and edgy contours. Its frame, a testament to engineering prowess, marries robustness with agility, ensuring riders a harmonious blend of stability and responsiveness. The motorcycle's cutting-edge suspension system, meticulously tuned, elevates the riding experience to unprecedented heights, delivering unparalleled comfort and control. Striking a perfect equilibrium between aesthetics and functionality, the Super Duke 1290 R captivates not only with its dominating presence but also with its ability to conquer roads with unbridled authority, inviting enthusiasts to revel in the exhilarating realm of high-performance motorcycling."
      },
      {
        id: 4,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000
      },
      {
        id: 5,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000
      },
    ],
    contacts: [
      {
        id: 1,
        name: "Matej Svrček",
        email: "matovmail@gmail.com",
        message: "Stranka o motorkach a su tu udaje o 6 motorkach, si normalny?"
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
  },
});
