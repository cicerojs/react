import { UsuarioLogadoProvider } from "./shared/contexts";
import { Routes } from "./router";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
}
