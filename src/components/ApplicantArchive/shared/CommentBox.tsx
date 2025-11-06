import * as React from "react";

import { Button } from "@/components/UI/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { useState } from "react";

interface Comment {
  comment: string;
}

interface CommentBoxProps {
  comment: Comment;
}

export default function CommentBox({ comment }: CommentBoxProps) {
  const [open, setOpen] = useState(false);
  const [commentString, setCommentString] = useState<string>(comment.comment);

  function handleReset() {
    setCommentString("");
  }

  function handleInput(input: string) {
    setCommentString(input);
  }


  return (
    <div className="flexrow flex">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="default" className="bg-sky-800 m-1 h-fit w-fit ">
            <span>See Comment</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-96 border border-sky-700 bg-sky-900 p-1"
          align="start"
        >
            <textarea
              value={commentString}
              onChange={(e) => handleInput(e.target.value)}
              placeholder="Write something..."
              className="w-full h-full resize-y bg-slate-800 text-lg italic text-slate-100 placeholder:text-slate-400"
            />

        </PopoverContent>
      </Popover>
      <Button
        onClick={handleReset}
        variant="destructive"
        className="h-fit w-auto m-1"
      >
        Reset Comments
      </Button>
    </div>
  );
}
