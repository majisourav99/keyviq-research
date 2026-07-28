import { CircleCheck } from "lucide-react";

type CheckListProps = {
  items: string[];
  columns?: 1 | 2;
  light?: boolean;
};

export function CheckList({ items, columns = 1, light = false }: CheckListProps) {
  return (
    <ul
      className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CircleCheck
            className={`size-4.5 mt-0.5 shrink-0 ${light ? "text-keyviq-violet" : "text-keyviq-indigo"}`}
          />
          <span className={`text-sm ${light ? "text-white/80" : "text-keyviq-slate"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
