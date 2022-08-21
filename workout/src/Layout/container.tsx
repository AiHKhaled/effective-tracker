import React from "react";

type Props = {
  title: string;
};
const Container: React.FC<Props> = ({ title }: Props) => {
  return <div> {title} </div>;
};

export default Container;
