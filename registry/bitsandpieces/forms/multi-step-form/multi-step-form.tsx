"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";
import { FormInput } from "./form-input";
import { StepIndicator, getStepVariants } from "./step-indicator";
import type { MultiStepFormProps } from "./types";

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
export type {
  MultiStepFieldConfig,
  MultiStepFormStep,
  MultiStepFormProps,
} from "./types";
