import React from 'react'
import {prisma} from "@/lib/prisma";
import EditSnippetForm from '@/components/EditSnippetForm';
import { notFound } from 'next/navigation';
const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
    const id = parseInt((await params).id);

    await new Promise((r)=>setTimeout(r,2000));
    const snippet=await prisma.snippet.findUnique({
        where:{
            id
        }
    });

    if(!snippet) notFound()
    
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditPageSnippet;
export async function generateStaticParams() 
{
    const snippets=await prisma.snippet.findMany()
    return snippets.map((snippet)=>
    {
        return {
            id:snippet.id.toString()
        }
    })
}