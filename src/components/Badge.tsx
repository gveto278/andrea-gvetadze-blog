import { memo } from 'react';

export interface BadgeProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'gray' | 'purple' | 'yellow';
}

export default function Badge({ label, color = 'blue' }: BadgeProps) {
  const colorStyles = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
const Badge = memo(function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold tracking-wide uppercase">
      {label}
    </span>
  );
});

export default Badge;
