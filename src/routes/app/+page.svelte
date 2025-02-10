<script>
  import '../../app.css';
  import { data } from '../../stores/data';
  import { goto } from '$app/navigation';

  import ProgressBar from '../../components/ProgressBar.svelte';
  import StepHeader from '../../components/StepHeader.svelte';
  import StepContent from '../../components/StepContent.svelte';
  import ContinueButton from '../../components/ContinueButton.svelte';
  import Footer from '../../components/Footer.svelte';

  const steps = [
    {
      id: 'language',
      title: 'Which language do you want to learn?',
      type: 'language-select',
      options: [
        { name: 'English', code: 'gb' },
        { name: 'Spanish', code: 'es' },
        { name: 'French', code: 'fr' },
        { name: 'German', code: 'de' },
        { name: 'Italian', code: 'it' },
        { name: 'Portuguese', code: 'pt' },
        { name: 'Japanese', code: 'jp' },
        { name: 'Chinese', code: 'cn' },
        { name: 'Arabic', code: 'ae' },
        { name: 'Dutch', code: 'nl' },
        { name: 'Korean', code: 'kr' },
        { name: 'Swedish', code: 'se' },
        { name: 'Norwegian', code: 'no' },
        { name: 'Greek', code: 'gr' },
        { name: 'Hebrew', code: 'il' },
        { name: 'Finnish', code: 'fi' },
        { name: 'Ukrainian', code: 'ua' },
        { name: 'Russian', code: 'ru' },
      ],
    },
    {
      id: 'level',
      title: 'What is your {language} level?',
      subtitle:
        'We will personalize conversations based on your language level.',
      type: 'level-select',
      options: [
        { id: 'beginner', label: 'Beginner', level: 'A1-A2', icon: '📊' },
        {
          id: 'intermediate',
          label: 'Intermediate',
          level: 'B1-B2',
          icon: '📈',
        },
        { id: 'advanced', label: 'Advanced', level: 'C1-C2', icon: '📉' },
      ],
    },
    {
      id: 'goals',
      title: 'What are you looking to achieve?',
      type: 'goal-select',
      options: [
        { id: 'basics', label: 'I want to learn basics', icon: '📚' },
        { id: 'speaking', label: 'I want to improve speaking', icon: '🗣️' },
        { id: 'fluent', label: 'I want to become fluent', icon: '⭐' },
        { id: 'unsure', label: "I'm not sure yet", icon: '🤔' },
      ],
    },
    {
      id: 'reason',
      title: 'What is your primary reason for learning this language?',
      type: 'reason-select',
      options: [
        { id: 'work', label: 'For work', icon: '💼' },
        { id: 'travel', label: 'For travel', icon: '✈️' },
        { id: 'culture', label: 'Interest in culture', icon: '🎭' },
        { id: 'family', label: 'Family or friends', icon: '👨‍👩‍👧‍👦' },
        { id: 'other', label: 'Other', icon: '📝' },
      ],
    },
    {
      id: 'age',
      title: 'How old are you?',
      type: 'age-select',
      options: [
        { id: 'under18', label: 'Under 18', icon: '👶🏽' },
        { id: '18-24', label: '18-24', icon: '☺️' },
        { id: '25-34', label: '25-34', icon: '🤩' },
        { id: '35-44', label: '35-44', icon: '😎' },
        { id: '45plus', label: '45+', icon: '🧓🏽' },
      ],
    },
    {
      id: 'time',
      title: 'How often do you want to practice?',
      type: 'time-select',
      options: [
        { id: 'daily', label: 'A few minutes a day', icon: '🤘🏽' },
        { id: 'weekly', label: 'A few times each week', icon: '🫶🏽' },
        { id: 'monthly', label: 'A few times each month', icon: '👍🏽' },
        { id: 'other', label: 'I do not know right now', icon: '🤞🏽' },
      ],
    },
  ];

  let selectedLanguage = '';
  let languageCode = '';
  let currentStep = 0;
  let answers = {};

  $: progress = ((currentStep + 1) / steps.length) * 100;
  $: currentTitle = steps[currentStep].title.replace(
    '{language}',
    selectedLanguage
  );
  $: isLastStep = currentStep === steps.length - 1;

  function handleSelect(value) {
    answers[steps[currentStep].id] = value;
    if (steps[currentStep].id === 'language') {
      selectedLanguage = value;
      const selectedOption = steps[currentStep].options.find(
        (option) => option.name === selectedLanguage
      );
      languageCode = selectedOption ? selectedOption.code : '';
    }
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
    } else {
      data.set({ answers, selectedLanguage, languageCode });
      goto(`/chat`);
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }
</script>

<div
  class="min-h-screen bg-[#0b4d44] flex items-center justify-center p-4 custom-cursor"
>
  <div
    class="bg-white rounded-3xl w-full max-w-3xl p-8 min-h-[700px] flex flex-col"
  >
    <ProgressBar {progress} />
    <StepHeader {currentStep} {prevStep} {currentTitle} {steps} />
    <StepContent
      {currentStep}
      {steps}
      {selectedLanguage}
      {handleSelect}
      {answers}
    />
    <hr class="my-4 mx-12 text-gray-200" />
    <ContinueButton {nextStep} isDisabled={!answers[steps[currentStep].id]} />
    <Footer />
  </div>
</div>

<svelte:head>
  <title>Zzish - Virtual Language Tutor (by Jide)</title>
</svelte:head>

<style>
</style>
