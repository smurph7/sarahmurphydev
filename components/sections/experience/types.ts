export type ExperienceData = {
  company: string;
  position: string;
  date: string;
  points: Point;
  subprojects?: Subproject[];
};

type Subproject = {
  title: string;
  date: string;
  points: Point;
};

type Point = string[];
