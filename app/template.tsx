import Curtain from "@/components/ui/Curtain";

// template.tsx remounts on every navigation, so the curtain wipe
// replays each time a new route is revealed.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Curtain />
      {children}
    </>
  );
}
