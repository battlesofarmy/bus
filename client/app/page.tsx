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
          <h2 className="text-2xl text-center">১ টাকা = আপনার সময় + সকলের সত্যতা যাচাই</h2>
          <p className={"text-lg mb-2"}>Facilitices:</p>

          <p>১. রোদ বৃষ্টির মধ্যে অন্যজন আসার অপেক্ষা করতে হবে না</p>
          <p>2. সকলের সত্যতা সবাই দেখতে পারবে</p>
          <p>3. আপনি যেই কোনো যায়গা থেকে যে কোনো সময়ে সিরিয়াল লিস্ট দেখতে পারবেন</p>
          <p> ৪. ২/৩ টা সিরিয়াল নিয়ে আর জামেলা করতে হবে না</p>
          <p>5. শেষ সিরিয়াল কত তা জানতে আর বাসের কাছে যাওয়া লাগবে না</p>
          <p>6. কেহ মিথ্যা বললে ব্লক করে রেখে শাস্তি দেওয়া যাবে</p>

          <h2 className="text-xl mt-4">১ টাকায় সময় বাচান। প্রিয় মানুষ গুলোকে সময় দেন 💝</h2>
        </div>
      </section>
    </>
  )
}