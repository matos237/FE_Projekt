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
        price: 5000
      },
      {
        id: 1,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000
      },
      {
        id: 2,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000
      },
      {
        id: 3,
        brand: "Ducati",
        model: "Monster 696",
        year: 2009,
        engine: "L-Twin 696cc",
        topSpeed: 230,
        price: 5000
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
  }),
  actions: {
    addMotorcycle(motorcycle) {
      this.motorcycles.push({id:this.motorcycles.length+1,...motorcycle});
      console.log(this.motorcycles);
    },
  },
});
