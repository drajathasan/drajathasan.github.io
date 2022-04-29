export default (props) => {
    if (!props.show)
    {
        return false;
    }

    return (
        <div className="lg:w-5/6 p-12 lg:px-40 py-20">
            <h1 className="text-2xl">Pekerjaan : </h1>
            <ol className="list-decimal text-lg">
                <li className="ml-5 my-1">Staff di Universitas Muhmmadiyah Purwokerto</li>
                <li className="ml-5 my-1"><strong>"Tukang Ketik"</strong> bebas untuk beberapa instansi di Indonesia, khususnya di lingkup otomasi Perpustakaan</li>
                <li className="ml-5 my-1">Suami dan Ayah</li>
            </ol>

            <div className="mt-10 tex-xs">
                <strong>NB:</strong>
                <p>definisi <strong>"Tukang Ketik"</strong> menurut saya sinonim dari <strong>"Programmer"</strong>. Karena kata <strong>"Programmer"</strong> ini bagi saya terlalu kuat maknanya dan saya rasa tidak pas jika perkerjaan saya dijuluki dengan nama tersebut maka saya memilih <strong>"Tukang Ketik"</strong> karena lebih <em>Humble</em> dan sangat ke-Indonesian : )</p>
            </div>
        </div>
    )
}