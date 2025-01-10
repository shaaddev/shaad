import SayHiForm from "@/components/sayHiForm";

export default function SayHi() {
  return (
    <main className="flex flex-col justify-between items-center p-10">
      <h1 className="uppercase text-2xl font-semibold mb-5 lg:mb-0">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-yellow-500">
          Contact
        </span>
      </h1>
      <SayHiForm />
    </main>
  );
}
