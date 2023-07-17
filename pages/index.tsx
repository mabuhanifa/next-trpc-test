import { trpc } from "@/utils/trpc";

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  const result = trpc.greeting.useQuery({ name: "clients" });

  if (!result.data) {
    return (
      <div className="flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <h1>{result.data.text}</h1>
    </div>
  );
}
