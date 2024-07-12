import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { ValidationProps } from './ValidatePassword.types';

const ValidationItem = ({ condition, text }: { condition: boolean, text: string }) => (
  <div className='flex gap-2'>
    {condition ? (
      <DoneIcon fontSize={'small'} color={"success"} />
    ) : (
      <CloseIcon fontSize={'small'} color={"error"} />
    )}
    <span className={`text-xs ${condition ? 'text-green-500' : 'text-red-500'}`}>{text}</span>
  </div>
);

export const ValidatePassword = ({ password }: ValidationProps): JSX.Element => {
  const hasMinimumLength = password.length >= 8;
  const hasMinimumLowercase = /[a-z]/.test(password);
  const hasMinimumUppercase = /[A-Z]/.test(password);
  const hasMinimumNumbers = /[0-9]/.test(password);
  const hasMinimumSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className='flex flex-col gap-2'>
      <ValidationItem condition={hasMinimumLength} text="Minimum of 8 characters" />
      <ValidationItem condition={hasMinimumLowercase} text="At least 1 lowercase letter" />
      <ValidationItem condition={hasMinimumUppercase} text="At least 1 uppercase letter" />
      <ValidationItem condition={hasMinimumNumbers} text="At least 1 number" />
      <ValidationItem condition={hasMinimumSymbols} text="At least 1 special symbol" />
    </div>
  );
};
