<template>
  <!-- Configure Datasets -->
  <div class="h-24 col-span-2 bg-gray-700 h-auto">
    <div class="p-6">
      <div class="flex flex-row">
        <h1 class="text-xl font-bold mb-4">Generate Datapoints</h1>
      </div>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col flex-1">
          <label class="block mb-2" for="startTimestamp">Timestamp start:</label>
          <input
            class="w-full px-4 py-2 border rounded"
            type="datetime-local"
            id="startTimestamp"
            name="startTimestamp"
            required
          />
          <label class="block mt-4 mb-2" for="interval">Timestamp interval:</label>
          <input
            class="w-full px-4 py-2 border rounded"
            type="number"
            id="interval"
            name="interval"
            required
          />
        </div>
        <div class="flex flex-col flex-1">
          <label class="block mb-2" for="deviceId">Device ID:</label>
          <select class="w-full px-4 py-2 border rounded" id="deviceId" name="deviceId" required>
            <option value="device1">Device 1</option>
            <option value="device2">Device 2</option>
            <option value="device3">Device 3</option>
          </select>
          <label class="block mt-4 mb-2" for="numberOfDatapoints"># of Datapoints:</label>
          <input
            class="w-full px-4 py-2 border rounded"
            type="number"
            id="numberOfDatapoints"
            name="numberOfDatapoints"
            required
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col flex-1 mt-6">
          <input
            class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            type="submit"
            value="Generate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
