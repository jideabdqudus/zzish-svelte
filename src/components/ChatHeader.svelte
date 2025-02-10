<script>
  export let selectedLanguage;
  export let languageCode;
  export let answers;
</script>

<header class="bg-white border-b border-gray-200 p-4">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img
        src={`https://flagcdn.com/${languageCode}.svg`}
        alt={`${selectedLanguage} flag`}
        class="w-6 h-6 rounded-full"
      />
      <h1 class="text-xl font-semibold">
        {selectedLanguage} Learning Assistant
      </h1>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-500"
        >Level: <span class="capitalize">{answers.level}</span></span
      >
      <span class="text-sm text-gray-500">•</span>
      <span class="text-sm text-gray-500"
        >Goal: <span class="capitalize">{answers.goals}</span></span
      >
    </div>
  </div>
</header>
