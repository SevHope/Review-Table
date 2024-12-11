import React from 'react';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';

const reviews = [
    {
        id: 1,
        platform: "google",
        rating: 4,
        date: "2023-11-15T10:00:00Z",
        text: "отличный сервис!",
    },
    {
        id: 2,
        platform: "яндекс",
        rating: 3,
        date: "2023-11-14T09:00:00Z",
        text: "хорошо, но есть недочеты.",
    },
    {
        id: 3,
        platform: "2гис",
        rating: 5,
        date: "2023-11-13T08:00:00Z",
        text: "прекрасно!",
    },
];

// Определяем колонки для новой таблицы
export const columns: MRT_ColumnDef<typeof reviews[0]>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
        enableSorting: false,
        enableColumnFilter: false,
    },
    {
        header: 'Платформа',
        accessorKey: 'platform',
    },
    {
        header: 'Рейтинг',
        accessorKey: 'rating',
    },
    {
        header: 'Дата',
        accessorKey: 'date',
        accessorFn: (row) => new Date(row.date).toLocaleDateString(), // Форматируем дату
    },
    {
        header: 'Отзыв',
        accessorKey: 'text',
    },
];

export default function ReviewTable() {
    // Вуаля!
    return (
        <MaterialReactTable
            columns={columns}
            data={reviews} // Используем reviews как данные
            enableRowSelection
            initialState={{ density: 'compact' }}
        />
    );
}
