import Link from "next/link"
import LastSerial from "./components/LastSerial"


export default function Home() {
  return (
    <>
      <section className={"py-12"}>
        <div className="container">

        {/* if heigher then 20 color red  */}
        <div className="flex justify-center mb-12 py-5">
          <div>
              <div className="flex justify-center items-baseline gap-4 mb-4">
                <LastSerial/>
                <h4 className="text-sm">Last Serial</h4>
              </div>
              <Link href={'/serial'}>
                <button className={"border py-1 px-4 rounded bg-gray-200 m-2 hover:bg-gray-300"}>View All Serial</button>
              </Link>

              <Link href={'/scan'}>
                <button className={"border py-1 px-4 rounded bg-gray-200 hover:bg-gray-300 m-2"}>Add Serial</button>
              </Link>
          </div>
        </div>


          {/* Product Facilitices  */}
          <h2 className="mb-2 text-2xl text-center">১ টাকা = আপনার সময় + সকলের সত্যতা যাচাই</h2>
          <p className={"text-lg mb-2"}>Facilitices:</p>

          <p>1. রোদ বৃষ্টির মধ্যে অন্যজন আসার অপেক্ষা করতে হবে না</p>
          <p>2. সকলের সত্যতা সবাই দেখতে পারবে</p>
          <p>3. আপনি যেই কোনো যায়গা থেকে যে কোনো সময়ে সিরিয়াল লিস্ট দেখতে পারবেন</p>
          <p>4. ২/৩ টা সিরিয়াল নিয়ে আর জামেলা করতে হবে না</p>
          <p>5. শেষ সিরিয়াল কত তা জানতে আর বাসের কাছে যাওয়া লাগবে না</p>
          <p>6. কেহ মিথ্যা বললে ব্লক করে রেখে শাস্তি দেওয়া যাবে</p>
          <p>7. আপনি চাইলে সিরিয়াল বাদ দিয়ে চলে যেতে পারবেন</p>

          <h2 className="text-[1.2rem] md:text-xl mt-4">১ টাকায় সময় বাচান। প্রিয় মানুষ গুলোকে সময় দেন 💝</h2>


          <h2 className="pt-12 mb-2 text-2xl text-center">টাকা কেন দেওয়া লাগবে ?</h2>
          <p className={"text-lg mb-2"}>Application Cost:</p>
          <p>1. মাসিক নেটওয়ার্ক ফি (wifi or MB)</p>
          <p>2. বাৎসরিক সার্ভার ফি </p>
          <p>3. QR কোড প্রিন্টিং + যন্ত্রপাতি ক্রয়</p>
          <p>4. বিকাশ এজেন্ট একাউন্ট চার্জ </p>
          <p>5. প্রতিনিয়ত রক্ষণাবেক্ষণ</p>
          
        </div>
      </section>
    </>
  )
}