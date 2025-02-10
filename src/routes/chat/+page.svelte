<script>
  import '../../app.css';
  import { onMount } from 'svelte';
  import { data } from '../../stores/data';
  import ChatHeader from '../../components/ChatHeader.svelte';
  import ChatMessages from '../../components/ChatMessages.svelte';
  import MessageInput from '../../components/MessageInput.svelte';
  import ChatFooter from '../../components/ChatFooter.svelte';

  let messages = [];
  let newMessage = '';
  let chatContainer;
  let isTyping = false;

  let answers = {};
  let selectedLanguage = '';
  let languageCode = '';

  $: {
    $data;
    answers = $data.answers;
    selectedLanguage = $data.selectedLanguage;
    languageCode = $data.languageCode;
  }

  const generateInitialMessage = () => {
    return `Welcome! I'll be your ${selectedLanguage} language virtual AI assistant.
    How can I help you today?`;
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = newMessage;
    newMessage = '';

    const userMessageObject = {
      role: 'user',
      content: userMessage,
    };

    messages = [
      ...messages,
      {
        text: userMessage,
        isUser: true,
        timestamp: new Date(),
      },
    ];

    isTyping = true;
    scrollToBottom();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const messagesToSend = [
        {
          role: 'system',
          content: `You are an expert ${selectedLanguage} language teacher.
          Your student is at a ${answers.level} level and wants to learn
          because ${answers.reason}. Provide clear, helpful responses and corrections.
          Keep explanations concise and focused on helping the student learn.`,
        },
        ...messages.map((msg) => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text,
        })),
        userMessageObject,
      ];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messagesToSend,
          language: selectedLanguage,
          fluencyLevel: answers.level,
          reason: answers.reason,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch response: ${errorData.error}`);
      }

      const data = await response.json();

      messages = [
        ...messages,
        {
          text: data.content,
          isUser: false,
          timestamp: new Date(),
        },
      ];
    } catch (error) {
      console.error('Error:', error);
    } finally {
      isTyping = false;
      scrollToBottom();
    }
  };

  const generateResponse = async (userMessage) => {
    return `Here's a response in ${selectedLanguage}.`;
  };

  onMount(() => {
    messages = [
      {
        text: generateInitialMessage(),
        isUser: false,
        timestamp: new Date(),
      },
    ];
  });
</script>

<svelte:head>
  <title>Chat - Zzish (by Jide)</title>
</svelte:head>

<div
  class="min-h-screen bg-[#0b4d44] flex items-center justify-center p-4 flex-col"
>
  <div
    class="bg-white rounded-3xl w-full max-w-[760px] h-[700px] flex flex-col overflow-hidden"
  >
    <ChatHeader {selectedLanguage} {languageCode} {answers} />
    <ChatMessages {messages} {isTyping} bind:this={chatContainer} />
    <MessageInput {newMessage} {sendMessage} {isTyping} />
    <ChatFooter />
  </div>
</div>

<style>
</style>
