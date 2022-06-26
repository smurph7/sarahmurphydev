export type ExperienceData = {
  company: string;
  position: string;
  description: string;
  date: string;
  subprojects?: Subproject[];
};

type Subproject = {
  title: string;
  description: string;
  date: string;
};
