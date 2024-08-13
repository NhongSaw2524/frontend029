import Image from "next/image" 

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row"> 
                

            <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM01.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">เสื้อ T-Shirt</h5>
                 <p className="card-text">ราคาซื้อขาย 300 บาท/ตัว</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM03.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">เสื้อฮู้ตลาย FriendsCraft </h5>
                 <p className="card-text">ราคาซื้อขาย 450 บาท/ตัว</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM02.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">เสื้อ T-Shirt ลาย BlueCraft</h5>
                 <p className="card-text">ราคาซื้อขาย 400 บาท/ตัว</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}