import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";
import { Map } from "../components/Map";
import { NavItem } from "../components/NavItem";
const Home = () => {
    return (
        <main className="container font-sans h-screen max-w-none overflow-x-hidden">
            <header className="grid grid-cols-header overflow-hidden   ">
                <div className="p-2 flex items-center justify-center shadow-[3px_2px_3px_rgba(0,0,0,0.1)] ">
                    <Link to={'/'}>
                        <img src="/logo.svg" alt="logo" sizes="100px" className="size-16" />
                    </Link>
                </div>
                <nav className="grow self-center">
                    <ul className="flex gap-4 flex-wrap justify-around items-center capitalize">
                        <NavItem label='Home' link='/'/>
                        <NavItem label='wisata' link='/wisata'/>
                        <NavItem label='ibadah' link='/ibadah'/>
                        <NavItem label='kantor' link='/kantor'/>
                        <NavItem label='kesehatan' link='/kesehatan'/>
                        <NavItem label='pendidikan' link='/pendidikan'/>
                        <NavItem label='penduduk' link='/penduduk'/>
                        <NavItem label='sejarah' link='/sejarah'/>
                    </ul>
                </nav>

                <div className=" shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] p-2 h-full self-center flex justify-center items-center ">
                    <FaSearch />
                </div>
            </header>
            <section className="mb-8">
                <div className="flex [&_section]:p-4 [&_h2]:text-2xl leading-loose [&_article]:space-y-8 [&_h2]:font-bold [&_h2]:uppercase [&_article]:flex-1 [&_article]:shadow-[2px_0_15px_1px_rgba(0,0,0,0.25)] [&_article]:rounded-sm [&_article]:overflow-hidden    ">
                    <article className=" bg-slate-100 z-30">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Care Central</h2>
                                <h3>Care Central</h3>
                            </hgroup>
                        </section>
                    </article>
                    <article className=" bg-slate-100 z-20">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Care Central</h2>
                                <h3>Care Central</h3>
                            </hgroup>
                        </section>
                    </article>
                    <article className=" bg-slate-100 z-10">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Care Central</h2>
                                <h3>Care Central</h3>
                            </hgroup>
                        </section>
                    </article>
                </div>
            </section>

            <section className="relative flex flex-col gap-8 ">
                <div className="space-y-4 leading-loose w-full z-10 [&_h2]:text-xl [&_h2]:text-indigo-900 [&_h2]:font-semibold mx-auto px-12  -mb-8">
                    <article className=" ">
                        <h2> Main service</h2>
                        <div className="shadow  flex font-normal [&_section]:p-8  divide-x [&_section]:flex-[min-content] [&_section]:flex [&_section]:justify-center [&_section]:items-center">
                            <section><p>text</p></section>
                            <section><p>text</p></section>
                            <section><p>text</p></section>
                            <section><p>text</p></section>
                            <section><p>text</p></section>
                        </div>
                    </article>
                    <article className="h-96   ">
                        <h2>It&apos;s easy getting to the Central Station Complex!</h2>
                        <div className="bg-slate-200 p-6 h-full rounded-xl">
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                    </article>
                </div>
                <div className="p-32 text-white w-full overflow-auto bg-gradient-to-br from-blue-900 via-blue-950 to-95% to-indigo-950  z-0 h  -mt-8">
                    <Map />    </div>
            </section>

        </main>
    )
}

export default Home