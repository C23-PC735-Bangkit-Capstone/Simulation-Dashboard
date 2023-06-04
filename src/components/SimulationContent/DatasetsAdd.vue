<template>
  <!-- Add Datasets -->
  <div class="h-24 col-span-1 bg-gray-700 h-auto">
    <div class="p-6 flex flex-row">
      <div class="flex flex-col flex-grow">
        <h1 class="text-xl font-bold mb-4">Add Single Datapoint</h1>
        <input
          class="w-full px-4 py-2 mb-2 border rounded"
          type="datetime-local"
          id="startTimestamp"
          name="startTimestamp"
          required
        />
        <select id="device-input" class="rounded-md py-2 px-4 mt-4 mb-2 border border-gray-400">
          <option value="J01">J01</option>
          <option value="J02">J02</option>
          <option value="J03">J03</option>
          <option value="J04">J04</option>
        </select>
        <input
          type="number"
          id="rpm-input"
          placeholder="RPM"
          class="rounded-md py-2 px-4 mt-4 mb-2 border border-gray-400"
        />
        <button
          id="add-button"
          class="rounded-md py-2 px-4 mt-4 text-white bg-blue-500 hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
