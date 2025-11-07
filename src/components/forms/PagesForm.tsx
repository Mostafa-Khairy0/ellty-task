"use client";
import React, { useState } from "react";
import { Checkbox } from "../inputs";
import { Page } from "../types";
import { PagesButton } from "../buttons";

interface PageItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  id: string;
}

const PageItem: React.FC<PageItemProps> = ({
  label,
  checked,
  onChange,
  id,
}) => {
  return (
    <div className="flex items-center justify-between h-[42px] px-2.5">
      <label
        htmlFor={id}
        className="text-[14px] font-normal text-foreground cursor-pointer flex-1"
      >
        {label}
      </label>
      <Checkbox checked={checked} onChange={onChange} />
    </div>
  );
};

const Divider: React.FC = () => {
  return (
    <div className="border-t border-gray-200 my-2.5 w-[340px] max-w-[75vw] min-w-[250px]" />
  );
};

export const PagesFrom: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
  ]);

  const handleCheckboxChange = (id: string): void => {
    setPages(
      pages.map((page) =>
        page.id === id ? { ...page, checked: !page.checked } : page
      )
    );
  };

  return (
    <form className="w-[80vw] min-w-[280px] max-w-[370px] min-h-[326px] rounded-md shadow-card p-2.5 border border-[#EEEEEE]">
      <PageItem
        label={"All pages"}
        checked={pages.every((page) => page.checked)}
        onChange={() =>
          setPages((pages) =>
            pages.map((page) => ({
              ...page,
              checked: !pages.every((page) => page.checked),
            }))
          )
        }
        id={"all"}
      />

      <Divider />

      <div className="space-y-0">
        {pages.map((page) => (
          <PageItem
            key={page.id}
            label={page.label}
            checked={page.checked}
            onChange={() => handleCheckboxChange(page.id)}
            id={page.id}
          />
        ))}
      </div>

      <Divider />

      <PagesButton />
    </form>
  );
};
