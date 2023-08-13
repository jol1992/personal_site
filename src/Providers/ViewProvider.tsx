import { createContext, FC, PropsWithChildren, useState } from "react";

interface ViewContextProps {
  page: "Professional" | "Personal";
  setPage: React.Dispatch<React.SetStateAction<"Professional" | "Personal">>;
}

export const ViewContext = createContext({} as ViewContextProps);
export const ViewProvider: FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState<"Professional" | "Personal">("Professional");
  return (
    <ViewContext.Provider value={{ setPage, page }}>
      {children}
    </ViewContext.Provider>
  );
};
