export default function ArtistCard() {
    return (
        <section className="grid grid-cols-1 rounded-[1em] shadow-inner hover:shadow-lg hover:shadow-pink bg-black p-4">
                <img src="https://i.imgur.com/qJq1PV0.png" className="w-full h-[300px] object-scale-down"/>
            <section>
                <h2>Name</h2>
                <a href="" className="underline">Website</a>
            </section>
            <section className="grid grid-cols-2 gap-2 text-center p-2">
                <button className="border-2 uppercase cursor-pointer bg-white text-black">Update</button>
                <button className="border-2 uppercase cursor-pointer bg-white text-black">Delete</button>
            </section>
        </section>
    )
}