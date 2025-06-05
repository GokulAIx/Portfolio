// SkillCheck – AI Skill Evaluator
//
// Flask web app using Groq API to assess user skills and provide personalized feedback via LLM.

'use server';
/**
 * @fileOverview An AI agent that evaluates user skills and provides personalized feedback.
 *
 * - skillCheckEvaluateSkills - A function that handles the skill evaluation process.
 * - SkillCheckEvaluateSkillsInput - The input type for the skillCheckEvaluateSkills function.
 * - SkillCheckEvaluateSkillsOutput - The return type for the skillCheckEvaluateSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillCheckEvaluateSkillsInputSchema = z.object({
  skills: z.string().describe('The skills to evaluate, comma separated.'),
});
export type SkillCheckEvaluateSkillsInput = z.infer<typeof SkillCheckEvaluateSkillsInputSchema>;

const SkillCheckEvaluateSkillsOutputSchema = z.object({
  feedback: z.string().describe('Personalized feedback on the provided skills.'),
});
export type SkillCheckEvaluateSkillsOutput = z.infer<typeof SkillCheckEvaluateSkillsOutputSchema>;

export async function skillCheckEvaluateSkills(input: SkillCheckEvaluateSkillsInput): Promise<SkillCheckEvaluateSkillsOutput> {
  return skillCheckEvaluateSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillCheckEvaluateSkillsPrompt',
  input: {schema: SkillCheckEvaluateSkillsInputSchema},
  output: {schema: SkillCheckEvaluateSkillsOutputSchema},
  prompt: `You are an AI skill evaluator. Please provide personalized feedback on the following skills: {{{skills}}}. Focus on areas for improvement and potential learning resources.`,
});

const skillCheckEvaluateSkillsFlow = ai.defineFlow(
  {
    name: 'skillCheckEvaluateSkillsFlow',
    inputSchema: SkillCheckEvaluateSkillsInputSchema,
    outputSchema: SkillCheckEvaluateSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
