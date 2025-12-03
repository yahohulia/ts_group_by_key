type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items, key): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupId = String(item[key]);

    if (!result[groupId]) {
      result[groupId] = [item];
    } else {
      result[groupId].push(item);
    }
  }

  return result;
}
