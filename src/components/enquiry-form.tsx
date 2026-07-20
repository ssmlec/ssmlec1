import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseOptions } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwTwVJVBcCaMz37140Sk1sJTmnvOze1pUQgj9iSqgXuGynUvWwK59RNRctBgNPVhoud/exec";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),

  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid mobile number"),

  email: z.string().trim().email("Enter a valid email").max(255),

  course: z.string().min(1, "Please select a course"),

  qualification: z
    .string()
    .trim()
    .min(2, "Please enter your qualification")
    .max(120),

  city: z
    .string()
    .trim()
    .min(2, "Please enter your city")
    .max(80),

  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm({
  defaultCourse,
  compact = false,
  onDone,
}: {
  defaultCourse?: string;
  compact?: boolean;
  onDone?: () => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      course: defaultCourse ?? "",
    },
  });

  const course = watch("course");

  const onSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("mobile", values.mobile);
      formData.append("email", values.email);
      formData.append("city", values.city);
      formData.append("qualification", values.qualification);
      formData.append("course", values.course);
      formData.append("message", values.message || "");

      // await fetch(GOOGLE_SCRIPT_URL, {
      //   method: "POST",
      //   body: formData,
      // });
await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  body: formData,
});
      toast.success("Enquiry Submitted!", {
        description: "Our counselor will contact you shortly.",
      });

      reset({
        course: defaultCourse ?? "",
      });

      onDone?.();
    } catch (error) {
      console.error(error);

      toast.error("Submission Failed", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      <div
        className={cn(
          "grid gap-4",
          compact ? "grid-cols-1" : "sm:grid-cols-2"
        )}
      >
        <Field
          label="Full Name"
          id="name"
          error={errors.name?.message}
        >
          <Input
            id="name"
            placeholder="Your name"
            autoComplete="name"
            {...register("name")}
          />
        </Field>

        <Field
          label="Mobile"
          id="mobile"
          error={errors.mobile?.message}
        >
          <Input
            id="mobile"
            placeholder="+91 XXXXX XXXXX"
            inputMode="tel"
            autoComplete="tel"
            {...register("mobile")}
          />
        </Field>

        <Field
          label="Email"
          id="email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            {...register("email")}
          />
        </Field>

        <Field
          label="City"
          id="city"
          error={errors.city?.message}
        >
          <Input
            id="city"
            placeholder="Your City"
            autoComplete="address-level2"
            {...register("city")}
          />
        </Field>

        <Field
          label="Qualification"
          id="qualification"
          error={errors.qualification?.message}
        >
          <Input
            id="qualification"
            placeholder="e.g. B.E Mechanical"
            {...register("qualification")}
          />
        </Field>

        <Field
          label="Course Interested"
          id="course"
          error={errors.course?.message}
        >
          <Select
            value={course}
            onValueChange={(value) =>
              setValue("course", value, {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="course">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>

            <SelectContent>
              {courseOptions.map((course) => (
                <SelectItem
                  key={course}
                  value={course}
                >
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field
        label="Message (Optional)"
        id="message"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us how we can help..."
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Enquiry
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>

      {children}

      {error && (
        <p className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}