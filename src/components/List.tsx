import type { ReactNode } from "react";
import { Feedback } from "./Feedback";

type ListProps<Item> = {
  items: Item[];
  getKey: (item: Item) => string;
  renderItem: (item: Item) => ReactNode;
  emptyMessage?: string;
  className?: string;
};

export function List<Item>({
  items,
  getKey,
  renderItem,
  emptyMessage = "Nothing to show yet.",
  className = "",
}: ListProps<Item>) {
  if (items.length === 0) {
    return <Feedback state="empty">{emptyMessage}</Feedback>;
  }

  return (
    <ul className={`m-0 list-none p-0 ${className}`}>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
