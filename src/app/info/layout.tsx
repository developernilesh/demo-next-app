export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-6">
      {children}
      <div className="text-sm italic text-green-600">This is the info layout</div>
    </div>
  );
}
