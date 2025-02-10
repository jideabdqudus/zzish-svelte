<script>
  export let currentStep;
  export let steps;
  export let selectedLanguage;
  export let handleSelect;
  export let answers;
</script>

<div class="mb-8 flex-grow">
  {#key currentStep}
    <div>
      {#if steps[currentStep].type === 'language-select'}
        <div class="grid grid-cols-6 gap-4 mb-8">
          {#each steps[currentStep].options as language}
            <button
              class="flex flex-col items-center p-4 rounded-2xl hover:bg-gray-50 transition-colors custom-cursor"
              style="background-color: {selectedLanguage === language.name
                ? 'rgba(8, 198, 145, 0.2)'
                : 'transparent'}"
              on:click={() => handleSelect(language.name)}
            >
              <img
                src={`https://flagcdn.com/w80/${language.code}.png`}
                alt={`${language.name} flag`}
                class="w-12 h-12 rounded-full object-cover border border-gray-100"
              />
              <span class="mt-2 text-sm text-gray-800">{language.name}</span>
            </button>
          {/each}
        </div>
      {/if}

      {#if steps[currentStep].type === 'level-select' || steps[currentStep].type === 'goal-select' || steps[currentStep].type === 'reason-select' || steps[currentStep].type === 'age-select' || steps[currentStep].type === 'time-select'}
        <div class="space-y-3">
          {#each steps[currentStep].options as option}
            <button
              class="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100 custom-cursor"
              style="background-color: {answers[steps[currentStep].id] ===
              option.id
                ? 'rgba(8, 198, 145, 0.2)'
                : 'transparent'}"
              on:click={() => handleSelect(option.id)}
            >
              <div class="flex items-center gap-3">
                {#if option.icon}
                  <span class="text-xl">{option.icon}</span>
                {/if}
                <span>{option.label}</span>
              </div>
              {#if option.level}
                <span class="text-gray-500">{option.level}</span>
              {/if}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/key}
</div>
