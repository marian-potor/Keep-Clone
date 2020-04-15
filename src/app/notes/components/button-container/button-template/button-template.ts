import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export abstract class ButtonTemplate {
  icon: IconDefinition;
  buttonInfo: string;
  colorList: string[] = [];
}