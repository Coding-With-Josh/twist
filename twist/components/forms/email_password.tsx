import React from "react";
import { Input } from "../ui/input";

type FormProps = {
  placeholderContent?: string | object | undefined;
  transparent?: boolean;
  size: string;
};

const Email_Password = ({ placeholderContent, size }: FormProps) => {
  return (
    <form>
      <Input
        placeholder={
          !placeholderContent ? "example@mail.com" : placeholderContent
        }
        className={`${size === 'small' ? "w-[6rem]" : size === 'medium' ? "w-[15rem]" : size === "large" ? "w-[28rem]" : ""} `}
      />
    </form>
  );
};

export default Email_Password;
