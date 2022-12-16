import BigText from "../components/BigText";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <div style={{color: 'red'}}>app (root) layout</div>
        <BigText/>
        <nav>
          <Link href={'/'}>home</Link>
          <Link href={'/dashboard'}>dashboard</Link>
          <Link href={'/posts'}>posts</Link>
          <Link href={'/forms'}>forms</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
