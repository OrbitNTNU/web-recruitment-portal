"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";
import {X} from "lucide-react";

interface Member {
    name: string
}
interface SelectMemberComboProps {
    members: Member[]
}




export default function SelecetMemberCombo({members} : SelectMemberComboProps) {
    const [open, setOpen] = useState(false)
    const [selectedMember, setSelectedMember] = useState<Member | null>(null)

    function handleReset(){
        setSelectedMember(null);
    }
    return (
      <div className="flex items-center space-x-4">
        <p className="text-sm ">Interviewer</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="default" className="w-[150px] justify-start">
              {selectedMember ? (
                <>{selectedMember.name}</>
              ) : (
                <>+ Select Interviewer</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Select Member for Interview" />
              <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                <CommandGroup>
                  {members.map((member) => (
                    <CommandItem
                      key={member.name}
                      value={member.name}
                      onSelect={(name) => {
                        setSelectedMember(
                          members.find((member) => member.name === name) ??
                            null,
                        );
                        setOpen(false);
                      }}
                    >
                      {member.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      {selectedMember ? <Button onClick={handleReset} variant={"destructive"} className={"w-4 h-6"}><X /></Button> : null}
      </div>
    );
}
