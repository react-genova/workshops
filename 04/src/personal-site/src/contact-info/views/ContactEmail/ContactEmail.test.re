open Jest;

test("renders without crashing", (_) =>
    Expect.(expect(3 + 4) |> toBe(7))
);