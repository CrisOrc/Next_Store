import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>
        Navegación de las categorías
        {children}
      </nav>
    </main>
  );
}
export default Layout;