<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { usePrefecturesStore } from '../store/PrefecturesStore';

// なんかtypesがimportできない
// import { Prefecture } from '../types/Prefecture/Prefecture'; 
export interface Prefecture {
  prefCode: number;
  prefName: string;
}
export interface PopulationData {
  year: number;
  totalPopulation: number;
  youngPopulation: number;
  productivePopulation: number;
  elderlyPopulation: number;
}

const prefecturesStore = usePrefecturesStore();
const selectedPrefectures = ref<number[]>([]);
const error = ref<string | null>(null);



const prefectures = ref<Prefecture[]>([]);
const populationData = ref<Record<number, PopulationData[]>>({});

onMounted(async () => {
  try {
    await prefecturesStore.fetchPrefectures();
    prefectures.value = prefecturesStore.prefectures;
  } catch (e) {
    error.value = "都道府県のデータを取得できませんでした。";
  }
});

watch(selectedPrefectures, async (newSelected) => {
  try {
    for (const prefCode of newSelected) {
      await prefecturesStore.fetchPopulationData(prefCode);
    }
    populationData.value = prefecturesStore.populationData;
  } catch (e) {
    error.value = "人口構成データを取得できませんでした。";
  }
});


</script>

<template>
  <div>
    <h1 class="title">都道府県</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <div class="container">
        <div class="prefecture-item" v-for="prefecture in prefectures" :key="prefecture.prefCode">
          <input type="checkbox" :value="prefecture.prefCode" v-model="selectedPrefectures">
          <label>{{ prefecture.prefName }}</label>
        </div>
      </div>
    </div>
    <!-- 人口構成データの表示 -->
    <div v-if="selectedPrefectures.length > 0">
      <h2>選択された都道府県の人口構成</h2>
      <div v-for="prefCode in selectedPrefectures" :key="'population-' + prefCode">
        <h3>{{ prefectures.find(p => p.prefCode === prefCode)?.prefName }}</h3>
        {{ populationData[prefCode] }}
      </div>
    </div>
    <!-- エラーメッセージ -->
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>


<style>
.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.prefecture-item {
  margin-right: 10px;
}
</style>