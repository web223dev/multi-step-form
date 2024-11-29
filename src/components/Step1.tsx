import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { Input } from "./ui/input";
import FormValues from "@/types/form.types";

export default function Step1() {
  const { control } = useFormContext<FormValues>();

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center justify-between">
            Name
            <FormMessage />
          </FormLabel>
          <FormControl>
            <Input placeholder="e.g Stephen King" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
