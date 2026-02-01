"use client";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useCallback } from "react";
import { JSX } from "react";
import { Button } from "@/components/ui/button";
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
};

type FieldRenderer = (props: FieldRendererProps) => JSX.Element;

const FIELD_REGISTRY: Record<FieldName, FieldRenderer> = {
  name: ({ value, onChange }) => (
    <Input
      placeholder="John Doe"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  email: ({ value, onChange }) => (
    <Input
      type="email"
      placeholder="john@example.com"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  password: ({ value, onChange }) => (
    <Input
      type="password"
      placeholder="••••••••"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  confirmPassword: ({ value, onChange }) => (
    <Input
      type="password"
      placeholder="Confirm password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  phone: ({ value, onChange }) => (
    <Input
      type="tel"
      placeholder="+1 (555) 000-0000"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  address: ({ value, onChange }) => (
    <Input
      placeholder="123 Main St"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  city: ({ value, onChange }) => (
    <Input
      placeholder="San Francisco"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  state: ({ value, onChange }) => (
    <Input
      placeholder="CA"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  zip: ({ value, onChange }) => (
    <Input
      placeholder="94103"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  country: ({ value, onChange }) => (
    <Input
      placeholder="United States"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  dob: ({ value, onChange }) => (
    <Input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  ssn: ({ value, onChange }) => (
    <Input
      placeholder="XXX-XX-XXXX"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  creditCard: ({ value, onChange }) => (
    <Input
      placeholder="0000 0000 0000 0000"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  cvv: ({ value, onChange }) => (
    <Input
      placeholder="123"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  expirationDate: ({ value, onChange }) => (
    <Input
      type="month"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  billingAddress: ({ value, onChange }) => (
    <Input
      placeholder="Billing Address"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  shippingAddress: ({ value, onChange }) => (
    <Input
      placeholder="Shipping Address"
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
    <div className="w-full max-w-md mx-auto p-4">
      <form onSubmit={handleNext} className="space-y-8">
        <header className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{formTitle}</h2>
          {formDescription && (
            <p className="text-sm text-muted-foreground">{formDescription}</p>
          )}
        </header>

        <div className="relative min-h-[140px]">
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
          <Button
            onClick={handleBack}
            disabled={isFirst}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            Back
          </Button>

          <Button
            type="submit"
            disabled={isLast}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            {isLast ? "Complete" : "Continue"}
          </Button>
        </footer>
      </form>

      {/* Progress indicator */}
      <div className="mt-8 flex gap-1 justify-center">
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
    </div>
  );
};
MultiStepForm.displayName = "MultiStepForm";
export { MultiStepForm };
