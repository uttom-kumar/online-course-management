import React from 'react';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandList} from "@/components/ui/command";
import {CommandItem} from "cmdk";

const SearchBox = () => {
    return (
        <div>
            <div>
                <Command>
                    <CommandInput  placeholder={"search live course, Webinars"} />

                    <CommandList>
                        <CommandEmpty>No result found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem>MERN Stack</CommandItem>
                            <CommandItem>Python</CommandItem>
                            <CommandItem>Basic Ai model</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    );
};

export default SearchBox;