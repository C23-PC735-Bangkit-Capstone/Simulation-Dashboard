<script setup>
import DatasetsAdd from './SimulationContent/DatasetsAdd.vue'
import DatasetsConfigure from './SimulationContent/DatasetsConfigure.vue'
import SimulationChart from './SimulationContent/SimulationChart.vue'
import SimulationTable from './SimulationContent/SimulationTable.vue'
</script>

<template>
  <!-- Page Content -->
  <div class="flex-grow p-6 overflow-auto bg-gray-800">
    <div class="grid grid-cols-3 gap-6">
      <!-- Data Chart -->
      <SimulationChart></SimulationChart>
      <!-- Data Table -->
      <SimulationTable></SimulationTable>
      <!-- Add Datasets -->
      <DatasetsAdd></DatasetsAdd>
      <!-- Configure Datasets -->
      <DatasetsConfigure></DatasetsConfigure>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
