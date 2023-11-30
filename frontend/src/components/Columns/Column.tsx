
type Column = {
  index: number;
  title: string;
}

interface Props {
  column: Column;
}

export default function Column({ column }: Props) {
  return (
    <div className="w-72 border border-sky-500">
      {/* Column Title */}
      <div key={column.index}>{column.title}</div>
      {/* Tasks */}
      <div>content</div>
    </div>
  )
}
