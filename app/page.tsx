import { getServerSession } from "next-auth";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import Image from "next/image";
import banner from "@/public/images/image01.webp";
import HeavyComponent from "./components/HeavyComponent";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <HeavyComponent />
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="banner"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
