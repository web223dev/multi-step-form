import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import FormValues from "@/types/form.types";
import { useFormContext } from "react-hook-form";

export default function Step2() {
  const { control } = useFormContext<FormValues>();
  return (
    <>
      <h1 className="my-3 md:mt-8">Address Details</h1>
      <p className="mb-5 md:mb-10">
        Please provide your name, email address, and phone number.
      </p>
      <div className="space-y-8">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Address
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g Your Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Country
                <FormMessage />
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USA">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="AUS">Australia</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Phone Number
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g +1 234 567 890" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
