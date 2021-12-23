@genType
let add = (a, b) => a + b

@genType.import("./Math")
external divide: (int, int) => int = "divide"

let b = divide(10, 3)
