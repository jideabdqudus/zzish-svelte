import OpenAI from 'openai';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});

export async function POST({ request }) {
  try {
    const { messages, language, fluencyLevel, reason } = await request.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an expert ${language} language teacher.
            Your student is at a ${fluencyLevel} level and wants to learn
            because ${reason}. Provide clear, helpful responses and corrections.
            Keep explanations concise and focused on helping the student learn.`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return json(response.choices[0].message);
  } catch (error) {
    console.log(error, 'error');
    return json(
      { error: 'An error occurred during the conversation' },
      { status: 500 }
    );
  }
}
