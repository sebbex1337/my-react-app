export default function ArtistCard() {
    return (
        <section className="grid grid-rows-3 border-2 shadow-inner hover:shadow-lg hover:shadow-pink bg-black h-96">
            <img src="https://i.imgur.com/qJq1PV0.png" className="w-full"/>
            <section>
                <h2>Name</h2>
                <a href="">Website</a>
            </section>
            <section className="grid grid-cols-2 gap-2 text-center p-2">
                <button className="border-2">Update</button>
                <button className="border-2">Delete</button>
            </section>
        </section>
    )
}