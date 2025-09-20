import React,{useState} from "react";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";

interface Tag{
  id:string,
  text:string
}

export default function Tags({tags, setTags}) {


  const KeyCodes = {
    comma: 188,
    enter: [10, 13],
  };

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index: number, newTag: Tag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag: Tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };


  const handleTagClick = (index: number) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <ReactTags
      tags={tags}
      separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleTagClick={handleTagClick}
      onTagUpdate={onTagUpdate}
      inputFieldPosition="bottom" // input field always below tags
      editable
      maxTags={7}
      classNames={{
        tags: "flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md mt-[5px] hover:border-orange-400",
        tag: "bg-orange-400 text-white px-3 py-1 rounded-full text-sm flex items-center !cursor-default",
        tagInput: "w-full mt-2", // input below
        tagInputField:
          "px-3 py-2 text-sm text-gray-700 w-full focus:outline-none",
        remove: "ml-2 cursor-pointer text-white hover:text-red-400",
      }}
    />
  );
}
