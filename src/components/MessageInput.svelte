<script>
  export let newMessage;
  export let sendMessage;
  export let isTyping;
</script>

<div class="bg-white border-t border-gray-200 p-4">
  <form class="flex gap-2" on:submit|preventDefault={sendMessage}>
    <input
      type="text"
      bind:value={newMessage}
      placeholder={`Type your message...`}
      class="flex-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#0b4d44] focus:ring-1 focus:ring-[#0b4d44]"
    />
    <button
      type="submit"
      class="bg-[#0b4d44] text-white px-4 py-2 rounded-xl hover:bg-[#032b26] transition-colors disabled:opacity-50"
      disabled={!newMessage.trim() || isTyping}
    >
      Send
    </button>
  </form>
</div>
