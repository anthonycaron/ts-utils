type Mapped<
  Type extends object,
  Mapping extends Partial<Record<keyof Type, string>>,
> = {
  [Property in keyof Type as Property extends keyof Mapping
    ? Mapping[Property] extends string
      ? Mapping[Property]
      : Property
    : Property]: Type[Property];
};

export function renameProperties<
  Type extends object,
  Mapping extends Partial<Record<keyof Type, string>>,
  Result extends Mapped<Type, Mapping>,
>(obj: Type, mapping: Mapping): Result {
  return Object.entries(obj).reduce<Result>((acc, [key, value]) => {
    const newKey = mapping[key] ?? key;
    return {
      ...acc,
      [newKey]: value,
    };
  }, {} as Result);
}
