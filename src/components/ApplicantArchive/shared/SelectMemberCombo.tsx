import * as React from "react"

import { Button } from "@/components/UI/Button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/UI/Command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/UI/Popover"
import {useState} from "react";
import {X} from "lucide-react";

interface Member {
    name: string
}
interface SelectMemberComboProps {
    members: Member[]
}

export default function SelectMemberCombo({members} : SelectMemberComboProps) {
    const [open, setOpen] = useState(false)
    const [selectedMembers, setSelectedMembers] = useState<Member[]>([])

    function handleReset(){
        setSelectedMembers([]);
    }

    function handleSelect(name: string) {
        if(selectedMembers.find((member) => member.name === name)) {
            setSelectedMembers(selectedMembers.filter((member) => member.name !== name))
        }else{
            selectedMembers.push({ name: name })
        }
    }

    function handleRemoveMember(memberToRemove: string) {
        setSelectedMembers(selectedMembers.filter(member => member.name !== memberToRemove));
    }

    return (
      <div className="flex items-center space-x-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="default" className="w-auto justify-start bg-sky-800">
                <p className="text-md">Choose Interviewer</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 !bg-sky-900" side="right" align="start">
            <Command className="!bg-sky-900 text-white" >
              <CommandInput  className="text-inherit" placeholder="Search for members by name" />
              <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                <CommandGroup  className="!bg-sky-900 text-inherit" >
                  {members.map((member) => (
                    <CommandItem
                      key={member.name}
                      value={member.name}
                      onSelect={(name) => {
                        handleSelect(name);
                        setOpen(false);
                      }}
                    >
                      <div className="flex items-center">
                        {member.name}
                        {selectedMembers.some(m => m.name === member.name) && (
                          <span className="ml-2 text-green-300">✓</span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {selectedMembers.length > 0 && (
          <div className="flex gap-2 items-center">
            {selectedMembers.map((member) => (
              <div key={member.name} className="flex items-center bg-sky-800 rounded px-2 py-1">
                <span className="mr-1">{member.name}</span>
                <Button 
                  onClick={() => handleRemoveMember(member.name)} 
                  variant="ghost" 
                  className="h-4 w-4 p-0 "
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <Button onClick={handleReset} variant="destructive" className="h-8 w-auto">
             Reset
            </Button>
          </div>
        )}
      </div>
    );
}
