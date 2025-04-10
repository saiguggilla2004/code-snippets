"use client"

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useActionState } from "react";
import * as actions from "@/actions";
const CreateSnippetPage = () => {
  const [formStateData,action]=useActionState(actions.createSnippet,{
    message: "",});

  return (
    <form action={action} className="flex flex-col gap-4">
      <div>
        <div>
          <Label>Title</Label>
          <Input type="text" name="title" id="title"></Input>
        </div>
        <div>
          <Label>Code</Label>
          <Textarea name="code" id="code"></Textarea>
        </div>
        {formStateData.message && (
          <div className="p-2 bg-red-300 border-2 border-red-600 mt-2 rounded-md">
            {formStateData.message}
          </div>
        )}{" "}
        <Button type="submit" className="my-4 hover:bg-blue-500 ">
          New
        </Button>
      </div>
    </form>
  );
};

export default CreateSnippetPage;
