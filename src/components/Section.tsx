import { ReactNode } from "react";

type sectionProps = {
  title?: string;
  children: ReactNode;
};

export default function Section({
  title = "my subheading",
  children,
}: sectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <h1 style={{ color: "red" }}>{children}</h1>
    </section>
  );
}
