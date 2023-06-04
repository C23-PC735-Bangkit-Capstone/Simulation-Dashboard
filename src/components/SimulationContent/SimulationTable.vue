<template>
  <!-- Data Table -->
  <div class="h-24 col-span-3 bg-gray-700 h-60 overflow-y-scroll">
    <div class="p-6 flex flex-row">
      <table id="rpm-data-table" class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 border">Timestamp</th>
            <th class="px-4 py-2 border">Device ID</th>
            <th class="px-4 py-2 border">RPM</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
