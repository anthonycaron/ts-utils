import { renameProperties } from './rename';

describe('renameProperties', () => {
  it('should apply property mapping', () => {
    const obj = {
      foo: 'bar',
      baz: 'qux',
    };
    const mapping = {
      foo: 'foo2',
    };
    const result = renameProperties(obj, mapping);
    expect(result).toEqual({
      foo2: 'bar',
      baz: 'qux',
    });
  });

  it('should apply property mapping with missing properties', () => {
    const obj = {
      foo: 'bar',
      baz: 'qux',
    };
    const mapping = {
      foo: 'foo2',
      bar: 'bar2',
    } as const;
    const result = renameProperties(obj, mapping);
    expect(result).toEqual({
      foo2: 'bar',
      baz: 'qux',
    });
  });
});
