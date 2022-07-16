// as const
const handleRequest = (url: string, method: "GET" | "POST") => {}
const req = { url: "https://example.com", method: "GET" } as const
handleRequest(req.url, req.method);

const args = [8, 5] as const
const angle = Math.atan2(...args);

// ! (not null/undefined)
// 可以和 ? 的属性配合 断言非空
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

// 
interface IndexArr {
  [index: number]: number
}

let arr: IndexArr
arr[1] = 1

console.log(arr)