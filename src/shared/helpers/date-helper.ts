export function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

interface DateObject {
  day: number;
  month: number;
  year: number;
}

export function formatDate(date: DateObject): string {
  // Добавляем ведущий ноль, если день или месяц состоит из одной цифры
  const day = date.day.toString().padStart(2, '0');
  const month = date.month.toString().padStart(2, '0');
  const year = date.year.toString();

  return `${day}.${month}.${year}`;
}
