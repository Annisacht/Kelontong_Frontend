import imgRiset from '../assets/img/riset.png'
import imgToko from '../assets/img/toko.png'

function About() {
    return (
        <>
            <section className="wrapper-about">
                <div className="container">
                    <div className="row pt-5 px-5">
                        <div className="col-sm-6 text-about">
                            <h2>Mempermudah kamu mengelola tokomu!</h2>
                            <p>Kelontong membantumu mengelola tokomu mulai dari ringkasan penjualan hingga mengedit produk penjualan hanya dengan 1 klik.</p>
                        </div>
                        <div className="col-sm-6 image-about d-flex justify-content-end">
                            <img src={imgRiset} alt="Description of the Image" className="img-fluid" />
                        </div>
                    </div>


                    <div className="row pt-5 px-5">
                        <div className="col-sm-6 text-about order-sm-2"> {/* Use the order-sm-2 class to switch order on small screens and above */}
                            <h2>Kelontong memberikanmu pengalaman belanja yang mudah 24 jam</h2>
                            <p>tanpa perlu antri dan jaminan 1 jam sampai.</p>
                        </div>
                        <div className="col-sm-6 image-about order-sm-1"> {/* Use the order-sm-1 class to switch order on small screens and above */}
                            <img src={imgToko} alt="Description of the Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
