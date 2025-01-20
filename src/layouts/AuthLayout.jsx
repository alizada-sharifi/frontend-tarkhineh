function AuthLayout({children}) {
  return (
    <main className="bg-gray-50 w-full h-screen ">
      <div className="container h-full flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
