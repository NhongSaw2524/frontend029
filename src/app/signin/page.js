export default function Page () { 
  return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>

      <div className="container" style={{maxWidth: "400px", marginTop: "50px"}}>
          <h1 className="text-center">เข้าสู่ระบบ</h1>
          <form className="d-flex flex-column">
              <div className="mb-3">
                  <label htmlFor="inputEmail3" className="form-label">
                      <i className="bi bi-envelope"></i> อีเมล
                  </label>
                  <input type="email" className="form-control" id="inputEmail3" />
              </div>
              <div className="mb-3">
                  <label htmlFor="inputPassword3" className="form-label">
                      <i className="bi bi-key"></i> รหัสผ่าน
                  </label>
                  <input type="password" className="form-control" id="inputPassword3" />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                  <i className="bi bi-arrow-right-square-fill"></i> ยืนยันข้อมูล
              </button>
          </form>
      </div>
      <br></br>
      <br></br>

      <br></br>

      <br></br>
      <br></br>

      <br></br>

      </>
  )
}