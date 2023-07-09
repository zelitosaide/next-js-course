export default function Button({ onClick, children } : any) {
  return <button onClick={onClick}>{children}</button>;
}