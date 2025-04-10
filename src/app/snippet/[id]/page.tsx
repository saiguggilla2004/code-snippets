import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { deleteSnippet } from "@/actions";
type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};
const SnippetDetailPage: React.FC<SnippetDetailsProps> = async ({
  params,
}: SnippetDetailsProps) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  const deleteSnippetHandler = deleteSnippet.bind(null, id);
  await new Promise((r) => setTimeout(r, 2000));

  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>

        <div className="flex items-center gap-2">
          <Link href={`/snippet/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetHandler}>
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
};
