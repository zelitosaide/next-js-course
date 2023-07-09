import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <main>
      <h2>Main</h2>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
