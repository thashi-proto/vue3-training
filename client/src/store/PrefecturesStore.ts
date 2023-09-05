// store/index.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { Prefecture, PopulationData } from '../types/Prefecture/Prefecture';

export const usePrefecturesStore = defineStore({
  id: 'prefectures',
  state: (): {
    prefectures: Prefecture[];
    populationData: Record<number, PopulationData[]>;
  } => ({
    prefectures: [],
    populationData: {},
  }),
  actions: {
    async fetchPrefectures() {
      try {
        const apiKey = 'oZtBtRCljaen6uAxQGlrDaV7hZfxH4s4HW41lMeQ';
        const response = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
          headers: { 'X-API-KEY': apiKey },
        });
        this.prefectures = response.data.result;
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    },
    async fetchPopulationData(prefCode: number) {
      try {
        const apiKey = 'oZtBtRCljaen6uAxQGlrDaV7hZfxH4s4HW41lMeQ';
        const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear`, {
          params: { prefCode },
          headers: { 'X-API-KEY': apiKey },
        });
        this.populationData[prefCode] = response.data.result;
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    },
  },
});
