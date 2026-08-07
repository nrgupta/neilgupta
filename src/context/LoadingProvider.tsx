import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile
    if (window.innerWidth <= 768) return false;
    // Skip loading if we've already shown it once this session
    if (sessionStorage.getItem("hasLoadedHome") === "true") return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const handleSetIsLoading = (state: boolean) => {
    if (!state) {
      sessionStorage.setItem("hasLoadedHome", "true");
    }
    setIsLoading(state);
  };

  const value = {
    isLoading,
    setIsLoading: handleSetIsLoading,
    setLoading,
  };
  useEffect(() => {
    // Auto-start animations if there's no loader to trigger them
    // (mobile has no 3D model; return visits skip the loader entirely)
    if (!isLoading) {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 100);
        }
      });
    }
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
