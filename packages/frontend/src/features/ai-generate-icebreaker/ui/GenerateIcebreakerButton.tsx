import React from 'react';
import { Button } from '@/shared/ui/Button';

export const GenerateIcebreakerButton: React.FC = () => {
  const handleClick = () => {
    // TODO: Implement AI icebreaker generation
    alert('Generating icebreaker...');
  };

  return (
    <Button onClick={handleClick}>
      Generate Icebreaker
    </Button>
  );
}; 