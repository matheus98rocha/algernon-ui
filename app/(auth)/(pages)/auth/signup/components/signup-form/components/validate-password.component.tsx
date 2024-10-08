import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

import { RenderList } from "@/app/common/components";

import { useValidationPassword } from "./hooks/useValidationPassword";
import {
  TextValidation,
  ValidatePasswordContainer,
  WrapperValidatePassword,
} from "./validate-password.styles";
import { ValidationProps } from "./validate-password.types";

const ValidationItem = ({
  condition,
  text,
}: {
  condition: boolean;
  text: string;
}) => (
  <WrapperValidatePassword>
    {condition ? (
      <DoneIcon fontSize={"small"} color={"success"} />
    ) : (
      <CloseIcon fontSize={"small"} color={"error"} />
    )}
    <TextValidation condition={condition}>{text}</TextValidation>
  </WrapperValidatePassword>
);

export const ValidatePassword = ({
  password,
}: ValidationProps): JSX.Element => {
  const { validationItems } = useValidationPassword({ password });

  return (
    <ValidatePasswordContainer>
      <RenderList
        items={validationItems}
        renderItem={(validation) => (
          <ValidationItem
            condition={validation.condition}
            text={validation.text}
          />
        )}
        getKey={(validation) => validation.text}
      />
    </ValidatePasswordContainer>
  );
};
