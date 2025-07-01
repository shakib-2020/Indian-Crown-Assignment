"use client";
import { setSearchTerm } from "@/lib/slice/searchSlice";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchInput() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search meals..."
      className="border px-3 py-2 w-full max-w-md mb-4"
    />
  );
}
