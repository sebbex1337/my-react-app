import ArtistCard from "../components/ArtistCard";

export default function ArtistsPage() {
    return (
        <div className="block text-center">
            <div className="p-4">
                <h1 className="text-4xl">Artists Page</h1>
                <button className="border-2 uppercase cursor-pointer bg-white text-black w-full max-w-[360px] px-[0.5em] py-[1em]">Create Artist</button>
            </div>
            <section className="grid grid-cols-4 gap-10 p-6">
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
                <ArtistCard></ArtistCard>
            </section>
        </div>
    )
}