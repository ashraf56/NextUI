import Image from "next/image";
import Allproduct from "./compo/Allproduct";
import getallProducts from "@/utlis/getallProducts";
import Retable from "./compo/Retable";

export default async function Home() {
  const row = await getallProducts()
  console.log(row);
let columns = ['title' , 'price', 'category']
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
          <Retable columns={columns}  users={row}></Retable>
       
    </main>
  );
}
