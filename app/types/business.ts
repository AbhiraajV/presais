export type BusinessStatus = "unique_twist" | "existing" | "new" | string;

export interface BusinessExistence {
  status: BusinessStatus;
  description: string;
}