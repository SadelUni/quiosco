import {redirect} from "next/navigation";

export default function Home() {
  redirect("/admin/products");
  return (
  <h1>Home</h1>
  );
}
