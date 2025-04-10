"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveSnippet } from "@/actions";
const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const changeEventHandler=(value:string="")=>{
  setCode(value);
  }
 const saveSnippetAction=saveSnippet.bind(null,snippet.id,code)
  return (
    <div className="flex flex-col gap-3">
      <form action={saveSnippetAction} className="flex items-center justify-between">
        <h1>Your code : Edit</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippetForm;
