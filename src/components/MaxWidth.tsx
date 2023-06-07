interface Properties {
  children: React.ReactNode;
}

export default function MaxWidth({ children }: Properties) {
  return <div className="container mx-auto px-4 ">{children}</div>;
}
