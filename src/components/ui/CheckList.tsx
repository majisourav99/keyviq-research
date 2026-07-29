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
            className={`size-4.5 mt-0.5 shrink-0 ${light ? "text-white" : "text-keyviq-blue"}`}
          />
          <span className={`text-sm ${light ? "text-white/90" : "text-gray-600"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
