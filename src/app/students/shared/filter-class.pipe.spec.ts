import { FilterClassPipe } from "./filter-class.pipe";

describe('FilterClassPipe', () => {
  let filterPipe: FilterClassPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterClassPipe();
  });

  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should return empty array if no items given', () => {
    const items = null;

    const filtered = filterPipe.transform(items, 'A');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return items if no value is given', () => {
    const items = [];
    items.push({ id: 1, student_class: 'A' });

    const filtered = filterPipe.transform(items, null);

    expect(filtered).toEqual(items);
  });

  it('should filter correctly', () => {
    const items = [];

    items.push({ id: 1, student_class: 'A' });
    items.push({ id: 2, student_class: 'B' });
    items.push({ id: 3, student_class: 'C' });
    items.push({ id: 4, student_class: 'D' });

    const filtered = filterPipe.transform(items, 'A');

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.length).toBe(1);
  });

  it('should filter two items', () => {
    const items = [];

    items.push({ id: 1, student_class: 'A' });
    items.push({ id: 2, student_class: 'B' });
    items.push({ id: 3, student_class: 'A' });
    items.push({ id: 4, student_class: 'D' });

    const filtered = filterPipe.transform(items, 'A');

    expect(filtered.length).toBe(2);
  });
});
