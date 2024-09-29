import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session=await auth()
  if(!session){
    redirect("/api/auth/signin")
  }
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <iframe
        src="https://iframe.mediadelivery.net/embed/317106/58cb8c34-0f43-4084-9340-de4da0942921?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        loading="lazy"
        style={{
          border: 0,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </main>
  );
}
