import React from "react";

export default class Contents extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
    }

    render() {
        if (!this.props.show)
        {
            return false;
        }
        
        return (
            <div className="lg:w-5/6 p-12 lg:p-40">
                <h1 className="text-4xl">Hai,</h1>
                <h2 className="text-xl">Nama Saya Drajat Hasan</h2>

                <p className="my-5 lg:w-5/6 text-lg">
                Saya "Tukang Ketik" yang mendengarkan masalah klien saya untuk saya selesaikan
                dalam bentuk sebuah "Produk" yang dapat membuat mereka tersenyum : ).
                Pengguna GNU/Linux.
                </p>

                <p className="my-5 lg:w-5/6 text-lg">
                Anda dapat melihat portofolio saya di laman GitHub
                saya. Jika anda ingin mengbrol dengan saya terkait Teknologi dan "Jasa" :D,
                bisa melalui <a href="https://t.me/drajathasan"><strong>Telegram Saya</strong></a>
                </p>

                <small className="font-semibold text-center"> 
                Made by <svg className="inline-block text-red-500" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                </svg> with ReactJS + Vite</small>
            </div>
        )
    }
}