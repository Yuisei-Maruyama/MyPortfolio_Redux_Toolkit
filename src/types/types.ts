export interface Step {
  name: string;
  activeStep: number;
  steps: string[];
  id: string;
  genre: 'FrontEnd' | 'BackEnd';
}
