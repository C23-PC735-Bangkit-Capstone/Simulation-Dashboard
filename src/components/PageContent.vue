<script setup>
import SimulationChart from './SimulationContent/SimulationChart.vue'
import DatasetsSimulateUpload from './SimulationContent/DatasetsSimulateUpload.vue'
import DatasetsSimulateFailure from './SimulationContent/DatasetsSimulateFailure.vue'
</script>

<template>
  <!-- Page Content -->
  <div class="flex-grow p-6 overflow-auto bg-gray-800">
    <div class="grid grid-cols-6 gap-6">
      <!-- Data Chart -->
      <SimulationChart></SimulationChart>
      <!-- Upload Data Simulation -->
      <DatasetsSimulateUpload></DatasetsSimulateUpload>
      <!-- Paddlewheel Failure Simulation -->
      <DatasetsSimulateFailure></DatasetsSimulateFailure>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
