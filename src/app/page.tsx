import SecondBanner from "@/components/secondbanner/page";
import { Text } from "@/constants/Sizes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-between p-24">
      <div>
        <SecondBanner />
      </div>
    </main>
  );
}
