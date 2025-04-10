import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


export const dynamic="force-dynamic";
export default async function Home() {
  const snippets=await  prisma.snippet.findMany();
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button>new</Button>
        </Link>
      </div>
      {
        snippets.map((snippet)=>{
          return (
            <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md m-2">
              <h1>{snippet.title}</h1>
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant={"link"}>View</Button>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
}
