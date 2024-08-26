import { TChildren } from "@/types/global.type";

const Container = ({ children }: TChildren) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-10 py-5 md:py-8 lg:py-10">
      {children}
    </div>
  );
};

export default Container;
