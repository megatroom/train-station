import { Table as RxTable } from '@radix-ui/themes';
import { ReactElement } from 'react';

type TableColumn = {
  name: string;
  label: string;
  width?: string;
};

type TableCell = {
  value: string | number | ReactElement;
};

type TableRow = {
  cells: TableCell[];
};

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export function Table({ columns, rows }: TableProps) {
  return (
    <RxTable.Root>
      <RxTable.Header>
        <RxTable.Row>
          {columns.map(({ name, label, width }) => (
            <RxTable.ColumnHeaderCell
              key={`table-column-${name}`}
              width={width}
            >
              {label}
            </RxTable.ColumnHeaderCell>
          ))}
        </RxTable.Row>
      </RxTable.Header>
      <RxTable.Body>
        {rows.map(({ cells }, rowIndex) => (
          <RxTable.Row key={`table-row-${rowIndex}`}>
            {cells.map(({ value }, cellIndex) => (
              <RxTable.Cell key={`table-cell-${cellIndex}`}>
                {value}
              </RxTable.Cell>
            ))}
          </RxTable.Row>
        ))}
      </RxTable.Body>
    </RxTable.Root>
  );
}
