import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      user details
      <ul>
        <li>
          <Link href="/userInfo/1"> user 1</Link>
        </li>
        <li>
          {" "}
          <Link href="/userInfo/2"> user 2</Link>
        </li>
        <li>
          {" "}
          <Link href="/userInfo/3"> user 3</Link>
        </li>
      </ul>
    </>
  );
}
