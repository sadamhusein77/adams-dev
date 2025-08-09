type DetailApp = {
  name: string;
  icon_url: string;
};
type AddOnDetail = {
  source_field: string;
  label: string;
  value: string;
  apps?: DetailApp[];
};
export type AddOnItemDomain = {
  title: string;
  icon_url: string;
  offer_type: string;
  name: string;
  value: string;
  due_date: string;
  details: AddOnDetail[];
};
type AddOnContentNextSteps = {
  text: string;
  url: string;
  style: string;
};
export type AddOnContentDomain = {
  illustration_name: string;
  illustration_animated: boolean;
  summary: string;
  detail_message: string;
  next_steps: AddOnContentNextSteps[];
};
export type AddOnDomain = {
  items: AddOnItemDomain[];
  content: AddOnContentDomain;
};
