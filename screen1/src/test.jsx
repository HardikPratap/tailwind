import React from "react";
import { EvervaultCard, Icon } from "../src/components/ui/card";

export function EvervaultCardDemo({title , description}) {
  return (
    (<div
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <EvervaultCard text={title} />
    
      <p
        className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-10  text-black dark:text-white px-2 py-0.5 ">
       {description}
      </p>
    </div>)
  );
}
