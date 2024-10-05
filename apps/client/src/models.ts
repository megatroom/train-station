import { FeatureProps } from './components/Feature';

type Station = Omit<FeatureProps, 'children'>;

export const STATIONS: Station[] = [
  { id: 1, color: 'indigo', title: 'Station 1' },
  { id: 2, color: 'cyan', title: 'Station 2' },
  { id: 3, color: 'orange', title: 'Station 3' },
  { id: 4, color: 'crimson', title: 'Station 4' },
  { id: 5, color: 'purple', title: 'Station 5' },
];
