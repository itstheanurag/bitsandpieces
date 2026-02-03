"use client";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useCallback } from "react";
import { JSX } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "../lib/utils";

type FieldName =
  | "name"
  | "email"
  | "password"
  | "confirmPassword"
  | "phone"
  | "address"
  | "city"
  | "state"
  | "zip"
  | "country"
  | "dob"
  | "ssn"
  | "creditCard"
  | "cvv"
  | "expirationDate"
  | "billingAddress"
  | "shippingAddress";

export interface MultiStepFieldConfig {
  fieldName: FieldName;
  fieldLabel: string;
  fieldDescription?: string;
  fieldIcon?: React.ReactNode;
  validate?: (value: string, formData: Record<string, string>) => string | null;
}

export interface MultiStepFormProps {
  formTitle: string;
  formDescription?: string;
  steps: MultiStepFieldConfig[];
  onFinalSubmit: (data: Record<string, string>) => void;
}

type FieldRendererProps = {
  value: string;
  onChange: (val: string) => void;
  error?: string | null;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

type FieldRenderer = (props: FieldRendererProps) => JSX.Element;

function FormInput({
  value,
  onChange,
  placeholder,
  type,
  error,
}: FieldRendererProps) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      type={type ?? "text"}
      onChange={(e) => onChange(e.target.value)}
      className={cn("", error && "border-red-500")}
    />
  );
}

const FIELD_REGISTRY: Record<FieldName, FieldRenderer> = {
  name: ({ value, onChange }) => (
    <FormInput placeholder="John Doe" value={value} onChange={onChange} />
  ),

  email: ({ value, onChange }) => (
    <FormInput
      placeholder="john@example.com"
      value={value}
      onChange={onChange}
    />
  ),

  password: ({ value, onChange }) => (
    <FormInput
      type="password"
      placeholder="••••••••"
      value={value}
      onChange={onChange}
    />
  ),

  confirmPassword: ({ value, onChange }) => (
    <FormInput
      type="password"
      placeholder="Confirm password"
      value={value}
      onChange={onChange}
    />
  ),

  phone: ({ value, onChange }) => (
    <FormInput
      type="tel"
      placeholder="+1 (555) 000-0000"
      value={value}
      onChange={onChange}
    />
  ),

  address: ({ value, onChange }) => (
    <FormInput placeholder="123 Main St" value={value} onChange={onChange} />
  ),

  city: ({ value, onChange }) => (
    <FormInput placeholder="San Francisco" value={value} onChange={onChange} />
  ),

  state: ({ value, onChange }) => (
    <FormInput placeholder="CA" value={value} onChange={onChange} />
  ),

  zip: ({ value, onChange }) => (
    <FormInput placeholder="94103" value={value} onChange={onChange} />
  ),

  country: ({ value, onChange }) => (
    <FormInput placeholder="United States" value={value} onChange={onChange} />
  ),

  dob: ({ value, onChange }) => (
    <FormInput
      placeholder="YYYY-MM-DD"
      type="date"
      value={value}
      onChange={onChange}
    />
  ),

  ssn: ({ value, onChange }) => (
    <FormInput placeholder="XXX-XX-XXXX" value={value} onChange={onChange} />
  ),

  creditCard: ({ value, onChange }) => (
    <FormInput
      placeholder="0000 0000 0000 0000"
      value={value}
      onChange={onChange}
    />
  ),

  cvv: ({ value, onChange }) => (
    <FormInput placeholder="123" value={value} onChange={onChange} />
  ),

  expirationDate: ({ value, onChange }) => (
    <FormInput
      placeholder="MM-YYYY"
      type="month"
      value={value}
      onChange={onChange}
    />
  ),

  billingAddress: ({ value, onChange }) => (
    <FormInput
      placeholder="Billing Address"
      value={value}
      onChange={onChange}
    />
  ),

  shippingAddress: ({ value, onChange }) => (
    <FormInput
      placeholder="Shipping Address"
      value={value}
      onChange={onChange}
    />
  ),
};

const stepVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  formTitle,
  formDescription,
  steps,
  onFinalSubmit,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const handleFieldChange = useCallback((name: string, val: string) => {
    setFormData((prev) => ({ ...prev, [name]: val }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const validateCurrentStep = useCallback(() => {
    if (!step.validate) return true;

    const value = formData[step.fieldName] || "";
    const errorMsg = step.validate(value, formData);

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, [step.fieldName]: errorMsg }));
      return false;
    }
    return true;
  }, [step, formData]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateCurrentStep()) {
      if (isLast) {
        onFinalSubmit(formData);
      } else {
        setCurrentStep((s) => s + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(0, s - 1));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        {formDescription && (
          <CardDescription>{formDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleNext} className="space-y-8">
          <div className="relative min-h-fit">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step.fieldName}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {step.fieldIcon && (
                      <span className="text-primary">{step.fieldIcon}</span>
                    )}
                    <label
                      htmlFor={step.fieldName}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {step.fieldLabel}
                    </label>
                  </div>

                  {FIELD_REGISTRY[step.fieldName]({
                    value: formData[step.fieldName] || "",
                    onChange: (val) => handleFieldChange(step.fieldName, val),
                    error: errors[step.fieldName],
                    placeholder: step.fieldLabel,
                  })}

                  <AnimatePresence>
                    {errors[step.fieldName] && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[0.8rem] font-medium text-destructive"
                      >
                        {errors[step.fieldName]}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {step.fieldDescription && !errors[step.fieldName] && (
                    <p className="text-[0.8rem] text-muted-foreground">
                      {step.fieldDescription}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="flex items-center justify-between pt-4">
            <Button onClick={handleBack} disabled={isFirst} variant="outline">
              Back
            </Button>

            <Button type="submit" disabled={!isLast}>
              {isLast ? "Complete" : "Continue"}
            </Button>
          </footer>
        </form>
      </CardContent>
      <CardFooter>
        {/* Progress indicator */}
        <div className="mt-8 flex gap-1 justify-center w-full">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                idx <= currentStep ? "w-8 bg-primary" : "w-2 bg-muted",
              )}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
MultiStepForm.displayName = "MultiStepForm";
export { MultiStepForm };
