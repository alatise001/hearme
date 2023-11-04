import { Inter } from 'next/font/google'
import Category from '../components/category'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function CatergoriesLayout({ children }) {
    return (
        <section>

            {/* <div className={inter.className}> */}
            <div>
                {children}
            </div>

            <Category />
            {/* </div> */}

        </section>
    )
}
