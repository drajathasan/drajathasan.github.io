export default (props) => {
    if (!props.show)
    {
        return false;
    }

    return (
        <div className="lg:w-5/6 p-12 lg:px-40 py-20">
            <h1 className="text-2xl">Kontak Saya : </h1>
            <p>Saya tidak menggunakan WhatsApp untuk berkomunikasi dengan orang yang belum saya kenal dengan baik, maka untuk komunikasi saya sediakan seperti berikut:</p>
            <ol className="list-decimal">
                <li className="ml-5 my-1">Telegram : <a className="hover:text-blue-500" href="https://t.me/drajathasan">drajathasan</a></li>
                <li className="ml-5 my-1">E-Mail : <a className="hover:text-blue-500" href="mailto:drajathasan20@gmail.com">drajathasan20@gmail.com</a></li>
            </ol>
        </div>
    )
}