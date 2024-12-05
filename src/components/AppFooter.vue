<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
  <footer class="bg-dark text-light py-5">
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-3 mb-4">
          <h5 class="text-uppercase">Check out DeliveBoo</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Investors</a></li>
            <li><a href="#" class="text-light text-decoration-none">Who we are</a></li>
            <li><a href="#" class="text-light text-decoration-none">Restaurants</a></li>
            <li><a href="#" class="text-light text-decoration-none">Other</a></li>
            <li><a href="#" class="text-light text-decoration-none">Pressroom</a></li>
            <li><a href="#" class="text-light text-decoration-none">Programming</a></li>
            <li><a href="#" class="text-light text-decoration-none">Design</a></li>
            <li><a href="#" class="text-light text-decoration-none">Work with us</a></li>
            <li><a href="#" class="text-light text-decoration-none">Become our partner</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="text-uppercase">Note legali</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
            <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" class="text-light text-decoration-none">Cookies</a></li>
            <li><a href="#" class="text-light text-decoration-none">Classification of partners</a></li>
            <li><a href="#" class="text-light text-decoration-none">Requests from Public Authorities</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="text-uppercase">Aiuto</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Contacts</a></li>
            <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
            <li><a href="#" class="text-light text-decoration-none">Types of cuisine</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="text-uppercase">Take DeliveBoo with you</h5>
          <img src="/public/app-store-logo.png" alt="Store" class="mb-2 w-75">
          <img src="/public/Playstore.png" alt="Google Play" class="mb-2 w-75">
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
        <p class="mb-0">&copy; 2024 DeliveBoo</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #333;
  color: white;
}
</style>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
    <footer class="bg-dark text-light py-5">

    <div class="container">
      <!-- take DeliveBoo section-->
      <div class="take-deliveboo mb-5 text-center">
        <h5 class="text-uppercase">Take DeliveBoo with you</h5>
        <img src="/public/app-store-logo.png" alt="App Store" class="store-logo">
        <img src="/public/Playstore.png" alt="Google Play" class="store-logo">
      </div>

      <!-- main columns -->
      <div class="row">
        <!-- Column 1 -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5 class="text-uppercase">Check out DeliveBoo</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Investors</a></li>
            <li><a href="#" class="text-light text-decoration-none">Who we are</a></li>
            <li><a href="#" class="text-light text-decoration-none">Restaurants</a></li>
            <li><a href="#" class="text-light text-decoration-none">Other</a></li>
            <li><a href="#" class="text-light text-decoration-none">Pressroom</a></li>
            <li><a href="#" class="text-light text-decoration-none">Programming</a></li>
            <li><a href="#" class="text-light text-decoration-none">Design</a></li>
            <li><a href="#" class="text-light text-decoration-none">Work with us</a></li>
            <li><a href="#" class="text-light text-decoration-none">Become our partner</a></li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5 class="text-uppercase">Legal notes</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
            <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" class="text-light text-decoration-none">Cookies</a></li>
            <li><a href="#" class="text-light text-decoration-none">Classification of partners</a></li>
            <li><a href="#" class="text-light text-decoration-none">Requests from Public Authorities</a></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5 class="text-uppercase">Aiuto</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Contacts</a></li>
            <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
            <li><a href="#" class="text-light text-decoration-none">Types of cuisine</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom part -->
      <div class="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
        <p class="mb-0">&copy; 2024 DeliveBoo</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">

footer {
  background-color: #2c2c2c;
  color: #f1f1f1;
  padding: 3rem 0;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .take-deliveboo {
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: #333333;

    h5 {
      font-weight: 700; 
      font-size: 1.5rem;
      color: #ffffff;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px; 
      color: #ffffff; 
    }

    ul li  a{
    margin-bottom: 1rem; 
    }

    .store-logo {
      width: 120px;
      margin: 0.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .column-bg {
      background-color: #333333;
      padding: 1.5rem;
      border-radius: 0.5rem;
      text-align: left;
      width: 100%;
      flex: 1;
      min-width: 200px;

      h5 {
        color: #ffffff;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      ul {
        padding: 0;
        list-style: none;

        li {
          margin-bottom: 0.5rem;

          .footer-link {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: #00c7b6;
            }
          }
        }
      }
    }
  }

  img {
    display: inline-block;
    margin: 0.5rem;
    width: 120px; 
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05); 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }

  .border-top {
    border-top: 1px solid #555555;
    margin-top: 2rem;
  }

  p {
    color: #bbbbbb;
    margin: 0;
  }
}

</style>