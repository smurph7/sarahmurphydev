export type ExperienceData = {
  company: string;
  position: string;
  date: string;
  points: Point;
  subprojects?: Subproject[];
  stack?: string[];
};

type Subproject = {
  title: string;
  date?: string;
  points: Point;
  stack?: string[];
};

type Point = string[];
