import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Welcome to MockPrep AI!</h1>

      <p className="mt-4 text-gray-500">
        Ace your job interviews with tailored mock interviews and insightful feedback. Get started today!
      </p>
      </div>
      <div className="flex justify-center mt-8">
        <SignUp />
      </div>
    </div>
  );
}
