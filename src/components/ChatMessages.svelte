<script>
  export let messages;
  export let isTyping;
  export let chatContainer;

  import { fade } from 'svelte/transition';
</script>

<div class="flex-1 p-4 overflow-y-auto" bind:this={chatContainer}>
  <div class="space-y-4">
    {#each messages as message (message.timestamp)}
      <div
        class="flex {message.isUser ? 'justify-end' : 'justify-start'}"
        transition:fade
      >
        <div
          class="max-w-[80%] rounded-2xl px-4 py-2 {message.isUser
            ? 'bg-[#0b4d44] text-white'
            : 'bg-gray-100 text-gray-900'}"
        >
          {message.text}
        </div>
      </div>
    {/each}

    {#if isTyping}
      <TypingIndicator />
    {/if}
  </div>
</div>
