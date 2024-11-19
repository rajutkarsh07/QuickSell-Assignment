import { BiRadioCircle, BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';

const PRIORITY_ICONS: { [key: string]: JSX.Element } = {
  'No priority': <LuMoreHorizontal color="#797d84" size={14} />,
  Low: <BiSignal2 color="#6b6f76" size={14} />,
  Medium: <BiSignal3 color="#6b6f76" size={14} />,
  High: <BiSignal4 color="#6b6f76" size={14} />,
  Urgent: <AiFillWarning color="#fc7840" size={14} />,
  default: <AiFillWarning color="#fc7840" size={14} />,
};

const STATUS_ICONS: { [key: string]: JSX.Element } = {
  Backlog: <BiRadioCircle color="#e2e2e2" size={24} />,
  Todo: <BiRadioCircle color="#e2e2e2" size={24} />,
  'In progress': <TbProgress color="#f1ca4b" size={16} />,
  Done: <IoCheckmarkDoneCircle color="#5e6ad2" size={16} />,
  Canceled: <AiFillCloseCircle color="#94a2b3" size={16} />,
  default: <AiFillCloseCircle color="#94a2b3" size={16} />,
};

export const getPriorityIcon = (priority: string) =>
  PRIORITY_ICONS[priority] || PRIORITY_ICONS.default;

export const getStatusIcon = (status: string) =>
  STATUS_ICONS[status] || STATUS_ICONS.default;
