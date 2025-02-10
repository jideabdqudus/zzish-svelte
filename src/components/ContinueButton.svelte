<script>
  export let nextStep;
  export let isDisabled;
</script>

<button
  class="w-full bg-[#0b4d44] text-white py-4 rounded-xl font-medium hover:bg-[#032b26] transition-colors disabled:opacity-50 custom-cursor"
  on:click={nextStep}
  disabled={isDisabled}
>
  Continue
</button>
