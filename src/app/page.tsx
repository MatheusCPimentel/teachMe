import Image from "next/image";

import teacherImage from "@/assets/teacher.png";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-3xl pl-20">
        <h1 className="text-5xl">Learn. Or Teach.</h1>

        <h1 className="pt-2 text-5xl">It&apos;s that simple.</h1>

        <p className="my-6 text-xl text-gray-6">
          Connect your account and start learning (or teaching!) right now.
        </p>

        <button className="rounded-md bg-red-dark px-6 py-3">
          Create account
        </button>
      </div>

      <Image
        className="ml-auto"
        src={teacherImage}
        width={500}
        height={500}
        alt="Teacher"
      />
    </div>
  );
}
