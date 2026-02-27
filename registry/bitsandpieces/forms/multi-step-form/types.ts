import React from "react";

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
