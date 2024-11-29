import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormValues from "@/types/form.types";
import { UploadCloud } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function Step3() {
  const { control } = useFormContext<FormValues>();
  return (
    <>
      <h1 className="my-3 md:mt-8">File Upload</h1>
      <p className="mb-5 md:mb-10">
        Please upload related photographs and documents.
      </p>
      <div className="space-y-8">
        <FormField
          control={control}
          name="media"
          render={({ field }) => (
            <FormItem className="grid gap-4 py-4">
              <FormLabel className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className=" text-center">
                  <div className=" border p-2 rounded-md max-w-min mx-auto">
                    <UploadCloud size={20} />
                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">Drag files</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Click to upload files &#40;files should be under 5 MB &#41;
                  </p>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  accept=".pdf, .doc, .docx, .png, .jpeg, .mp4"
                  type="file"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              {field.value && (
                <p className="text-sm text-gray-600">{field.value.name}</p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
