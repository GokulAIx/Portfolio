'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { evaluateMySkillsAction, type SkillEvaluationState } from '@/app/actions/skills';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Evaluate My Skills
    </Button>
  );
}

const SkillEvaluatorForm = () => {
  const initialState: SkillEvaluationState = {};
  const [state, formAction] = useFormState(evaluateMySkillsAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error && !state.fieldErrors) {
      toast({
        variant: "destructive",
        title: "Evaluation Error",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card className="mt-12 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-headline flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Skill Evaluator
        </CardTitle>
        <CardDescription>
          Enter some skills (comma-separated) and let AI provide feedback.
          Powered by Genkit and Google AI.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="skills-input" className="mb-2 block font-medium">Skills to Evaluate</Label>
            <Input
              id="skills-input"
              name="skills"
              placeholder="e.g., Python, PyTorch, NLP"
              aria-describedby="skills-error"
            />
            {state?.fieldErrors?.skills && (
              <p id="skills-error" className="text-sm text-destructive mt-1">
                {state.fieldErrors.skills.join(', ')}
              </p>
            )}
          </div>

          {state?.feedback && (
            <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-md">
              <h4 className="font-semibold text-primary mb-2">AI Feedback:</h4>
              <p className="text-sm whitespace-pre-wrap">{state.feedback}</p>
            </div>
          )}
          {state?.error && !state.fieldErrors && (
             <p className="text-sm text-destructive mt-1">
                Error: {state.error}
              </p>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
};

export default SkillEvaluatorForm;
