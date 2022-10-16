
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className='langAndCurrency'>
          <select>
            <option>English  </option>
            <option>Hindi   </option>
          </select>
          <select>
            <option>USD  </option>
            <option>INR  </option>
          </select>
        </div>

        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">School Uniforms</Nav.Link>
                <Nav.Link href="#action3">Corporate</Nav.Link>
                <Nav.Link href="#action4">Sports</Nav.Link>
                <Nav.Link href="#action5">Blogs</Nav.Link>

              </Nav>
              <div class="d-flex gap-3 pointer">
                <i class="bi bi-search"></i>
                <i class="bi bi-heart"></i>
                <i class="bi bi-cart-dash"></i>
                <i class="bi bi-person"></i>
              </div>


            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div class="blackLabel">Free Delivery on orders above Rs. 1000,  DON’T MISS <span class="text-danger ps-4"> Shop NOW </span>&#129066;</div>
      {/* for directory */}
      <div class="ms-5 p-2"><span class="text-muted">Home / Category Sports /</span> Football Shirt</div>

      <main class="container">
        <div class=" py-5 row gx-5">

          <img class="img col" src='https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' alt='' />
          <div class="col" >
            <div class="d-flex gap-5 " >
              <h3>Leather boots with tall leg</h3>
              <i class="bi bi-share-fill ms-auto"></i>
            </div>
            <div class="d-flex justify-content-start gap-5">
              <p className='rating'>&#9733;&#9733;&#9733;&#9734; ( 1,234 reviews )</p>
              <p class="fw-bold">SKU:<span class="rating">A515-56-36UT</span></p>
              <span class="text-success">In Stock</span>
            </div>
            <div class="d-flex mb-3 align-items-baseline">
              <div class="p-2 text-danger fw-bold fs-2" >$68.00</div>
              <div class="p-2 text-decoration-line-through ">$98.00</div>
              <div className="p-1 redSquare">Save $12</div>
            </div>
            <p>The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
            <hr/>
            <div class="d-flex align-items-start justify-content-between">
              <p className=''>Hurry Up! <p>Offer ends in:</p></p>
              <div className='helo px-2'>
                <p>12 <br/>Days</p>
              </div>
              <p>:</p>
              <div className='helo px-2'>
                <p>03 <br/>Hours</p>
              </div>
              <p>:</p>
              <div className='helo px-2'>
                <p>14 <br/>Mins</p>
              </div>
              <p>:</p>
              <div className='helo px-2'>
                <p>21 <br/>Secs</p>
              </div>
            </div>
            <hr/>
           <h6>Size: M</h6>
           <div></div>
          </div>

        </div>

        <div class="d-flex justify-content-start gap-3 pointer">
          <img className='bootImg' src="/assets/boots1.jpg" alt=""></img>
          <img className='bootImg' src="/assets/boots2.jpg" alt=""></img>
          <img className='bootImg' src="/assets/boots3.jpg" alt=""></img>
          <img className='bootImg' src="/assets/boots4.jpg" alt=""></img>
          <img className='bootImg' src="/assets/boots5.jpg" alt=""></img>
        </div>
        <div className='d-flex justify-content-center gap-5 m-5'>

          <Nav.Link href="#action01"><h2>Description</h2></Nav.Link>
          <Nav.Link href="#action02"><h2 class="text-muted">Specifications</h2></Nav.Link>
          <Nav.Link href="#action03"><h2 class="text-muted">Review</h2></Nav.Link>


        </div>
        <div class="row gx-5">
          <div class="col-7">
            <h3>About This Products</h3>
            <p>Keep your home organized, yet elegant with storage cabinets by H&N Patio Furniture. These cabinets not only make a great storage units, but also bring a great decorative accent to your decor. Traditionally designed, they are perfect to be used in the hallway, living room, bedroom, office or any place where you need to store or display things. Made of high quality materials, they are sturdy and durable for years. Bring one-of-a-kind look to your interior with furniture from H&N Patio Furniture!</p>
          </div>

          <div class="col-5">
            <table>
              <tr>
                <td class="fw-bold">Rating</td>
                <td><p className='rating'>&#9733;&#9733;&#9733;&#9734; (1,234)</p></td>

              </tr>
              <tr>
                <td class="fw-bold">Outer Shell</td>
                <td>100% polyester</td>

              </tr>
              <tr>
                <td class="fw-bold">Lining</td>
                <td>100% polyurethane</td>

              </tr>
              <tr>
                <td class="fw-bold">Size</td>
                <td>Grey, Red, Blue, Black</td>

              </tr>
              <tr>
                <td class="fw-bold">Colors</td>
                <td>S, M, L, XL</td>

              </tr>
              <tr>
                <td class="fw-bold">Care</td>
                <td>icons</td>

              </tr>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
            <h3>Indochine Style</h3>
            <p>Indochine style Interior design is a mix of traditional Asian nostalgia and French romance. This skillfully crafted cabinet will perfectly enhance your indoor furnishing, while leaving a long-lasting impression and a traditional accent.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
            <h3>Features Products</h3>
            <p>Explore the many possibilities of transforming your home with our Decor Transfers.
              Exceptionally detailed, gorgeously composed and effortlessly easy to apply, these transfers will transform your living space.</p>
          </div>
        </div>
        <div class="d-flex gap-5">
          <div>
            <i class="bi bi-truck fs-2"></i>
            <h4>Shipping Faster</h4>
            <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
          </div>
          <div>
            <i class="bi bi-tree fs-2"></i>
            <h4>Cotton Material</h4>
            <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
          </div>
          <div>
            <i class="bi bi-patch-check fs-2"></i>
            <h4>High Quality</h4>
            <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
          </div>
          <div>
            <i class="bi bi-clipboard-check fs-2"></i>
            <h4>highly compatible</h4>
            <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
          </div>
        </div>
        <hr></hr>
        <div class="d-flex gap-5 ">
          <img src='/assets/Background (1).jpg' alt='profile' width="66.56px" height="73.84px" class="profileImg" />
          <div>
            <div class="d-flex justify-content-between">
              <div> <h3>Viola Lucas <span class="px-3 fs-6"><i class="bi bi-check-circle"></i></span></h3>
                <sm>august, 2021</sm>
              </div>
              <div className='pointer'>
                was this helpful?<span class="px-3 fs-6"><i class="bi bi-hand-thumbs-up"></i></span>
              </div>
            </div>
            <p> It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
            </p><hr></hr>
          </div>

        </div>
        <div class="d-flex gap-5 ">
          <img src='/assets/Background (2).jpg' alt='profile' width="66.56px" height="73.84px" class="profileImg" />
          <div>
            <div class="d-flex justify-content-between">
              <div> <h3>Viola Lucas <span class="px-3 fs-6"><i class="bi bi-check-circle"></i></span></h3>
                <sm>august, 2021</sm>
              </div>
              <div className='pointer'>
                was this helpful?<span class="px-3 fs-6"><i class="bi bi-hand-thumbs-up"></i></span>
              </div>
            </div>
            <p> It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
            </p><hr></hr>
          </div>

        </div>
        <div class="d-flex gap-5 ">
          <img src='/assets/Background (3).jpg' alt='profile' width="66.56px" height="73.84px" class="profileImg" />
          <div>
            <div class="d-flex justify-content-between">
              <div> <h3>Viola Lucas<span class="px-3 fs-6"><i class="bi bi-check-circle"></i></span></h3>
                <sm>august, 2021</sm>
              </div>
              <div className='pointer'>
                was this helpful? <span class="px-3 fs-6"><i class="bi bi-hand-thumbs-up"></i></span>
              </div>
            </div>
            <p> It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
            </p>
          </div>

        </div>
        <h2 class="text-center">Related Products</h2>
        <div class="d-flex">
          <div>

          </div>
        </div>
      </main>

      <footer className="footer">







      </footer>




    </>
  );
}
export default App;
