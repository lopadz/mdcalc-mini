export type RiskCategory = "low" | "moderate" | "high";

export type CalculatorType = "chads2" | "wells_dvt";

export interface Chads2Input {
  age: number;
  congestive_heart_failure: boolean;
  hypertension: boolean;
  prior_stroke_or_tia: boolean;
  diabetes: boolean;
}

export interface WellsDvtInput {
  active_cancer: boolean;
  paralysis_or_immobilization: boolean;
  bedridden_gt_3_days_or_surgery_lt_12_weeks: boolean;
  localized_tenderness: boolean;
  entire_leg_swollen: boolean;
  calf_swelling_gt_3cm: boolean;
  pitting_edema: boolean;
  collateral_superficial_veins: boolean;
  // Subtracts 2 from score when true — a rare case of a boolean that lowers risk.
  alternative_diagnosis_as_likely: boolean;
}

export interface CalculationResult {
  score: number;
  risk_category: RiskCategory;
}

export interface CalculationRecord<TInput = unknown> {
  id: number;
  calculator_type: CalculatorType;
  input: TInput;
  result: CalculationResult;
  created_at: string; // ISO-8601 string — serialized from TIMESTAMPTZ
}
