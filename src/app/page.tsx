import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header name="TOP" />
      <div className="">
        <table className="w-1/2 mx-auto my-56 border-collapse table-auto">
          <thead className="bg-lime-200">
            <tr>
              <th className="border px-4 py-2 text-left">ライブラリ名</th>
              <th className="border px-4 py-2 text-left">対象のリンク</th>
              <th className="border px-4 py-2 text-left">公式ドキュメント</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Recoil</td>
              <td className="border px-4 py-2">
                <Link
                  href="/router/recoil"
                  className="text-blue-500 hover:text-blue-700"
                >
                  /router/recoil
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link
                  href="https://recoiljs.org"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Recoil Docs
                </Link>
              </td>
            </tr>
            {/* <tr>
              <td className="border px-4 py-2">Zustand</td>
              <td className="border px-4 py-2">
                <Link
                  href="/router/zustand"
                  className="text-blue-500 hover:text-blue-700"
                >
                  /router/zustand
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link
                  href="https://github.com/pmndrs/zustand"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Zustand Docs
                </Link>
              </td>
            </tr> */}
            <tr>
              <td className="border px-4 py-2">Jotai</td>
              <td className="border px-4 py-2">
                <Link
                  href="/router/jotai"
                  className="text-blue-500 hover:text-blue-700"
                >
                  /router/jotai
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link
                  href="https://jotai.pmnd.rs"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Jotai Docs
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
