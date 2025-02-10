<script>
  export let currentStep;
  export let prevStep;
  export let currentTitle;
  export let steps;
</script>

<div class="flex items-center mb-8">
  <button
    class="text-gray-600 hover:text-gray-800 cursor-pointer"
    on:click={() => {
      if (currentStep === 0) {
        window.location.href = '/';
      } else {
        prevStep();
      }
    }}
    aria-label="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </button>
  <div class="ml-4">
    <h1 class="text-2xl font-semibold">{currentTitle}</h1>
    {#if steps[currentStep].subtitle}
      <p class="text-gray-500 mt-1 text-sm">
        {steps[currentStep].subtitle}
      </p>
    {/if}
  </div>
</div>
