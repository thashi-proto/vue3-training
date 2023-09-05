import { reactive, toRefs } from 'vue';

const state = reactive({
    chartData: null
});

// export default function useChartData() {
//     const setChartData = (data) => {
//         const labels = data.data[0].data.map(d => d.year);
//         const datasets = data.data.map(labelData => ({
//             label: labelData.label,
//             data: labelData.data.map(d => d.value)
//         }));
//         state.chartData = {
//             labels,
//             datasets
//         };
//     };

//     return {
//         ...toRefs(state),
//         setChartData
//     };
// }
