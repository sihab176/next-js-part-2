import { Geist, Geist_Mono ,Poppins , Give_You_Glory , Gabriela} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//! FONT ========================>
const gabriela=Gabriela({
  // weight:["400","600","700"],
  weight: "400",
  subsets: ["latin"]
})

export const metadata = {
  title: {
    default : "learning Next js",
    template: "%s | learning Next js"
  },
    keywords: ['Next.js', 'React', 'JavaScript'],
  description: "cool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${gabriela.className} antialiased`}
      >
        <NextAuthProvider>
        <div>
          <Navbar/>
        {children}
        </div>
      </NextAuthProvider>
      </body>
    </html>
  );
}
