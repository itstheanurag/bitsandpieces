"use client";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";

/** Configuration for a single field within a step. */
export interface MultiStepFieldConfig {
  /** Unique key used in the collected form data object. */
  fieldName: string;
  /** Label displayed above the input. */
  fieldLabel: string;
  /** Helper text displayed below the input when there is no error. */
  fieldDescription?: string;
  /** Optional icon rendered next to the label. */
  fieldIcon?: React.ReactNode;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** HTML input type – defaults to "text". */
  type?: React.HTMLInputTypeAttribute;
  /**
   * Validation function called before advancing to the next step.
   * Return an error message string to block navigation, or `null` to pass.
   */
  validate?: (value: string, formData: Record<string, string>) => string | null;
}

/** A step groups one or more fields that are shown together. */
export interface MultiStepFormStep {
  /** Optional title displayed at the top of the step panel. */
  title?: string;
  /** Optional description displayed below the step title. */
  description?: string;
  /** Fields rendered within this step. */
  fields: MultiStepFieldConfig[];
}

export interface MultiStepFormProps {
  /** Header title for the entire form card. */
  formTitle: string;
  /** Optional subtitle displayed below the form title. */
  formDescription?: string;
  /** Ordered list of steps. Each step contains one or more fields. */
  steps: MultiStepFormStep[];
  /** Callback triggered when the final step passes validation and the user submits. */
  onFinalSubmit: (data: Record<string, string>) => void;
  /** Optional className merged onto the outer Card element. */
  className?: string;
}

interface FormInputProps {
  value: string;
  onChange: (val: string) => void;
  error?: string | null;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  ariaDescribedBy?: string;
}

function FormInput({
  value,
  onChange,
  placeholder,
  type,
  error,
  id,
  ariaDescribedBy,
}: FormInputProps) {
  return (
    <Input
      id={id}
      value={value}
      placeholder={placeholder ?? ""}
      type={type ?? "text"}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-9 rounded-lg border-0 bg-muted/50 px-3.5 text-sm",
        "ring-1 ring-border/30",
        "placeholder:text-muted-foreground/40",
        "transition-all duration-200",
        "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-background focus-visible:shadow-sm focus-visible:shadow-primary/5",
        "hover:ring-border/50 hover:bg-muted/30",
        error &&
          "ring-destructive/40 bg-destructive/5 focus-visible:ring-destructive/40",
      )}
      aria-invalid={!!error}
      aria-describedby={ariaDescribedBy}
    />
  );
}

function getStepVariants(direction: 1 | -1) {
  return {
    initial: { opacity: 0, x: direction * 40, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: direction * -40, filter: "blur(4px)" },
  };
}

interface StepIndicatorProps {
  steps: MultiStepFormStep[];
  currentStep: number;
}

function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const progress = steps.length > 1 ? currentStep / (steps.length - 1) : 0;

  return (
    <nav aria-label="Form progress" className="space-y-4">
      {/* Animated progress bar */}
      <div className="relative h-1.5 w-full rounded-full bg-muted/40 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          initial={false}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        />
      </div>

      {/* Step circles */}
      <div className="flex items-start justify-between">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;

          return (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <motion.div
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                  isActive &&
                    "bg-primary text-primary-foreground shadow-md shadow-primary/20 ring-[3px] ring-primary/15",
                  isCompleted &&
                    "bg-primary/10 text-primary ring-1 ring-primary/20",
                  !isActive &&
                    !isCompleted &&
                    "bg-muted/50 text-muted-foreground/60 ring-1 ring-border/20",
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                ) : (
                  idx + 1
                )}
              </motion.div>

              {step.title && (
                <span
                  className={cn(
                    "text-[0.65rem] font-medium leading-tight max-w-16 text-center hidden sm:block transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : isCompleted
                        ? "text-primary/70"
                        : "text-muted-foreground/60",
                  )}
                >
                  {step.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  formTitle,
  formDescription,
  steps,
  onFinalSubmit,
  className,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const directionRef = useRef<1 | -1>(1);

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const handleFieldChange = useCallback((name: string, val: string) => {
    setFormData((prev) => ({ ...prev, [name]: val }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const validateCurrentStep = useCallback(() => {
    let isValid = true;
    const newErrors: Record<string, string | null> = {};

    for (const field of step.fields) {
      if (field.validate) {
        const value = formData[field.fieldName] || "";
        const errorMsg = field.validate(value, formData);
        if (errorMsg) {
          newErrors[field.fieldName] = errorMsg;
          isValid = false;
        }
      }
    }

    if (!isValid) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
    }
    return isValid;
  }, [step, formData]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateCurrentStep()) {
      if (isLast) {
        onFinalSubmit(formData);
      } else {
        directionRef.current = 1;
        setCurrentStep((s) => s + 1);
      }
    }
  };

  const handleBack = () => {
    directionRef.current = -1;
    setCurrentStep((s) => Math.max(0, s - 1));
  };

  const variants = getStepVariants(directionRef.current);

  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto",
        /* Premium card shell */
        "relative rounded-2xl",
        "bg-card backdrop-blur-xl",
        "shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05),0_16px_40px_-8px_rgba(0,0,0,0.08)]",
        "dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.2),0_16px_40px_-8px_rgba(0,0,0,0.4)]",
        "overflow-hidden",
        className,
      )}
    >
      {/* Grid pattern fading from top-right */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at 100% 0%, black 0%, transparent 15%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 100% 0%, black 0%, transparent 15%)",
        }}
        aria-hidden="true"
      />

      {/* Top gradient accent bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20"
        aria-hidden="true"
      />

      {/* Inner glow */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative px-7 pt-6 pb-5 space-y-5">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {formTitle}
          </h2>
          {formDescription && (
            <p className="text-[0.8rem] text-muted-foreground/80 leading-relaxed">
              {formDescription}
            </p>
          )}
        </div>

        {steps.length > 1 && (
          <StepIndicator steps={steps} currentStep={currentStep} />
        )}
      </div>

      {/* Body */}
      <div className="relative px-7 pb-2">
        <form onSubmit={handleNext} className="space-y-6">
          <div className="relative min-h-fit">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-5"
                role="group"
                aria-label={step.title ?? `Step ${currentStep + 1}`}
              >
                {/* Fields */}
                {step.fields.map((field, fieldIdx) => {
                  const fieldId = `msf-${field.fieldName}`;
                  const errorId = `${fieldId}-error`;
                  const descId = `${fieldId}-desc`;
                  const fieldError = errors[field.fieldName];

                  return (
                    <motion.div
                      key={field.fieldName}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: fieldIdx * 0.06,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {field.fieldIcon && (
                          <span className="text-primary/60 text-sm">
                            {field.fieldIcon}
                          </span>
                        )}
                        <label
                          htmlFor={fieldId}
                          className="text-[0.8rem] font-medium text-foreground/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {field.fieldLabel}
                        </label>
                      </div>

                      <FormInput
                        id={fieldId}
                        value={formData[field.fieldName] || ""}
                        onChange={(val) =>
                          handleFieldChange(field.fieldName, val)
                        }
                        error={fieldError}
                        placeholder={field.placeholder}
                        type={field.type}
                        ariaDescribedBy={
                          fieldError
                            ? errorId
                            : field.fieldDescription
                              ? descId
                              : undefined
                        }
                      />

                      <AnimatePresence>
                        {fieldError && (
                          <motion.p
                            initial={{ opacity: 0, y: -4, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -4, height: 0 }}
                            id={errorId}
                            role="alert"
                            aria-live="polite"
                            className="flex items-center gap-1.5 text-[0.8rem] font-medium text-destructive"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {fieldError}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {field.fieldDescription && !fieldError && (
                        <p
                          id={descId}
                          className="text-[0.75rem] text-muted-foreground/70 leading-relaxed"
                        >
                          {field.fieldDescription}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer / Actions */}
          <div className="flex items-center justify-between pt-4 pb-2">
            <Button
              type="button"
              onClick={handleBack}
              disabled={isFirst}
              variant="ghost"
              size="sm"
              aria-label="Go to previous step"
              className="text-muted-foreground/70 hover:text-foreground gap-1.5 disabled:opacity-0 transition-opacity duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </Button>

            <Button
              type="submit"
              size="sm"
              aria-label={isLast ? "Submit form" : "Go to next step"}
              className={cn(
                "gap-1.5 px-6 rounded-xl font-medium",
                "shadow-lg shadow-primary/15 hover:shadow-primary/25",
                "transition-shadow duration-200",
              )}
            >
              {isLast ? "Complete" : "Continue"}
              {!isLast && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="px-7 pb-5 pt-1">
        <p className="text-center text-[0.65rem] font-medium text-muted-foreground/40 tracking-widest uppercase">
          Step {currentStep + 1} / {steps.length}
        </p>
      </div>
    </div>
  );
};

MultiStepForm.displayName = "MultiStepForm";
export { MultiStepForm };
