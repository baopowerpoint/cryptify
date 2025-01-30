"use client";
import { cn, formUrlQuery, removeKeysFromUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";

const filters = [
  { name: "Tổng quan", value: "all" },
  { name: "Bitcoin", value: "bitcoin" },
  { name: "Ethereum", value: "ethereum" },
  { name: "USDT", value: "usdt" },
];
const LocalFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");
  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      setActive("");

      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10  flex-wrap gap-3 flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `mini_medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-1 text-neutrals-8 hover:bg-primary-1/80 "
              : "bg-neutrals-2 hover:bg-neutrals-2/80 "
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default LocalFilter;
