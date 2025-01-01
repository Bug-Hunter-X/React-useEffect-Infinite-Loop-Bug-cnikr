```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The effect only runs once after the initial render
    // as it has no dependencies
    console.log('Mounted')
  }, []);

  return <div>Count: {count}</div>;
}
```