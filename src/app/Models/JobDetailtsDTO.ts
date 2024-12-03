import { JobListDto } from "./JobListDto";

export interface JobDto extends JobListDto {
  CompanyLocation: string; 
  CompanyDescription: string; 
}
