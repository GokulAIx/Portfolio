'use server';

import { skillCheckEvaluateSkills, type SkillCheckEvaluateSkillsInput } from '@/ai/flows/skill-check-evaluate-skills';
import { z } from 'zod';

const EvaluateSkillsSchema = z.object({
  skills: z.string().min(3, "Please enter some skills to evaluate."),
});

export interface SkillEvaluationState {
  feedback?: string;
  error?: string;
  fieldErrors?: {
    skills?: string[];
  };
}

export async function evaluateMySkillsAction(
  prevState: SkillEvaluationState | undefined,
  formData: FormData
): Promise<SkillEvaluationState> {
  const rawFormData = {
    skills: formData.get('skills') as string,
  };

  const validatedFields = EvaluateSkillsSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Validation failed.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: SkillCheckEvaluateSkillsInput = { skills: validatedFields.data.skills };
    const result = await skillCheckEvaluateSkills(input);
    if (result.feedback) {
      return { feedback: result.feedback };
    } else {
      return { error: "AI evaluation failed to provide feedback." };
    }
  } catch (e) {
    console.error("Error evaluating skills:", e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during skill evaluation.";
    return { error: `Skill evaluation failed: ${errorMessage}` };
  }
}
