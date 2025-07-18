import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../supabaseClient";
import { type Session } from "@supabase/supabase-js";

type AuthSessionContextValue = {
  session: Session | null;
  loading: boolean;
};

const AuthSessionContex = createContext<AuthSessionContextValue>(
  {} as AuthSessionContextValue
);

type AuthSessionProviderProps = {
  children: ReactNode;
};

export const AuthSessionProvider = ({ children }: AuthSessionProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
        setLoading(false);
      } else {
        console.log(error);
      }
    };
    auth();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
  }, []);
  return (
    <AuthSessionContex.Provider value={{ session, loading }}>
      {children}
    </AuthSessionContex.Provider>
  );
};

export const useAuthSession = () => useContext(AuthSessionContex);
