"use client";
import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

export function StepTwo() {
  const { control } = useFormContext();
  return (
    <>
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
    </>
  );
}
