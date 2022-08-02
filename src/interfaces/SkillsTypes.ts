export interface SkillsDataTypes {
  title: string;
  items: SkillItemTypes[];
};

export interface SkillItemTypes {
  title: string;
  src: string;
  useSkill: string[];
  content: string;
}