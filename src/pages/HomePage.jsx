import { useState } from "react"

export default function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <div className="text-white">
            <h1>Home Page</h1>
            <p>Count: {count}</p>
            <button className="" onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}