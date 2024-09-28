import Image from "next/image";

export default function Html() {
  return (
    <Image src={"/html.svg"} alt="html logo" width={50} height={50} priority />
  )
}