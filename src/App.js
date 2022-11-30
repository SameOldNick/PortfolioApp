import "./App.css";
import Header from './Header';
import {Helmet} from "react-helmet";

function App() {
  //document.title = 'Joe Schmoe Portfolio';
  return (
    <div className="App">
      <Helmet>
        <title>Joe Schmoe's Website</title>
      </Helmet>
      <Header name='Bob Bobberson' />
      <main class="container">
        <div class="row mt-3">
          <div class="col-md">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Work Experience</h2>
                <ul class="list-unstyled">
                  <li>
                    <h6 class="fw-bold">
                      Senior Web Developer / Digital Agency 2016-2020
                    </h6>
                    <p>
                      Phasellus et tellus iaculis, interdum augue vel, luctus
                      nulla. Aenean viverra, magna a ultricies elementum, dui mi
                      tristique ligula, non euismod leo mauris ac metus.
                    </p>
                  </li>
                  <li>
                    <h6 class="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                    <p>
                      Mauris volutpat, ex condimentum fringilla imperdiet, nulla
                      turpis semper diam, ac semper risus urna quis libero.
                      Fusce non nunc quam. Ut vulputate, magna eget molestie
                      luctus, elit est posuere lorem, quis dapibus dolor felis
                      id mi.
                    </p>
                  </li>
                  <li>
                    <h6 class="fw-bold">
                      Junior Web Developer / Websites 'R' Us 2004-2009
                    </h6>
                    <p>
                      Sed eu turpis placerat, posuere odio a, viverra velit.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Education</h2>
                <ul class="list-unstyled">
                  <li>
                    <h6 class="fw-bold">
                      Computer Science / University Name 2001-2004
                    </h6>
                    <p>
                      Sed et ornare quam. Cras scelerisque ex ultricies neque
                      sodales tristique. Phasellus mattis dui ut enim tincidunt
                      auctor. Maecenas euismod, orci eget varius elementum, nunc
                      massa dignissim sapien, ac sagittis libero dolor vitae
                      elit.
                    </p>
                  </li>
                  <li>
                    <h6 class="fw-bold">Testville High School 1994-2000</h6>
                    <p>
                      Aenean nisl enim, dictum in odio ut, suscipit efficitur
                      diam. Nam nec velit a odio porta efficitur nec at magna.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md mb-5">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Technology Summary</h2>
                <ul class="list-unstyled">
                  <li>
                    <h6 class="fw-bold">
                      Senior Web Developer / Digital Agency 2016-2020
                    </h6>
                    <p>
                      Phasellus et tellus iaculis, interdum augue vel, luctus
                      nulla. Aenean viverra, magna a ultricies elementum, dui mi
                      tristique ligula, non euismod leo mauris ac metus.
                    </p>
                  </li>
                  <li>
                    <h6 class="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                    <p>
                      Mauris volutpat, ex condimentum fringilla imperdiet, nulla
                      turpis semper diam, ac semper risus urna quis libero.
                      Fusce non nunc quam. Ut vulputate, magna eget molestie
                      luctus, elit est posuere lorem, quis dapibus dolor felis
                      id mi.
                    </p>
                  </li>
                  <li>
                    <h6 class="fw-bold">
                      Junior Web Developer / Websites 'R' Us 2004-2009
                    </h6>
                    <p>
                      Sed eu turpis placerat, posuere odio a, viverra velit.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
