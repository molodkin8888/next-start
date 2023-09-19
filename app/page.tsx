import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-24">
                <p className="p-4">Hello world</p>
            </main>
            <Footer />
        </div>
    );
}
