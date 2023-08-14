import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface ViewContextProps {
  page: "Professional" | "Personal";
  setPage: React.Dispatch<React.SetStateAction<"Professional" | "Personal">>;
  isLarge: boolean;
}

export const ViewContext = createContext({} as ViewContextProps);
export const ViewProvider: FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState<"Professional" | "Personal">("Professional");
  const [isLarge, setIsLarge] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setIsLarge(e.matches));
  }, []);
  return (
    <ViewContext.Provider value={{ setPage, page, isLarge }}>
      {children}
    </ViewContext.Provider>
  );
};
