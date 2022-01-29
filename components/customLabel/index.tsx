import { FormLabel } from "@mui/material";
import clsx from "clsx";
interface Props {
  text: string;
  error?: boolean;
}
export const CustumLabel = ({ text, error }: Props) => {
  return (
    <FormLabel
      className={clsx(
        "text-left text-lg font-raleway mb-2 font-medium",
        !error ? "text-c-dark " : " text-red-500"
      )}
      component="legend"
    >
      {text}
    </FormLabel>
  );
};
