<template>
  <!-- Dropdown sidebar -->
  <button class="relative text-sm focus:outline-none group">
    <div
      class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800"
    >
      <span class="font-medium"> Dropdown </span>
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div
      class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-800 shadow-lg group-focus:flex"
    >
      <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
    </div>
  </button>
</template>

<script>
export default {}
</script>

<style scoped></style>
