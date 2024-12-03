export interface JobListDto {
    id: number;
    title: string;
    description: string;
    status: string;
    insertDate: string; // Date in ISO format (adjust if needed)
    jobRequirements: string[];
    companyName: string;
    type: string;
    salaryRange: string;
    insertUser: string;
  }
  