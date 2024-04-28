def to_rem(number):
    return f"Answer: {number / 16}"

inp = int(input("Number: "))
while inp != "-1":
    print(to_rem(inp))
    inp = int(input("Number: "))