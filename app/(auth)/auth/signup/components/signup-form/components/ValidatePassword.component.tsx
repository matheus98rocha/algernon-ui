import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { ValidationProps } from "./ValidatePassword.types";
import { useValidationPassword } from "./hooks/useValidationPassword";

const ValidationItem = ({
  condition,
  text,
}: {
  condition: boolean;
  text: string;
}) => (
  <div className="flex gap-2">
    {condition ? (
      <DoneIcon fontSize={"small"} color={"success"} />
    ) : (
      <CloseIcon fontSize={"small"} color={"error"} />
    )}
    <span
      className={`text-xs ${condition ? "text-green-500" : "text-red-500"} font-bold`}
    >
      {text}
    </span>
  </div>
);

export const ValidatePassword = ({
  password,
}: ValidationProps): JSX.Element => {
  const { validationItems } = useValidationPassword({ password });

  return (
    <div className="flex flex-col gap-2">
      {validationItems.map((validation) => {
        return (
          <ValidationItem
            key={validation.text}
            condition={validation.condition}
            text={validation.text}
          />
        );
      })}
    </div>
  );
};
