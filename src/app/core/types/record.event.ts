import { RecordActions } from './record.action.enum';

export interface RecordEvent {
  id: number;
  type: RecordActions;
}
