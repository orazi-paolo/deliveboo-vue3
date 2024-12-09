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
    <div class="container-custom">

      <!-- Main columns with information -->
      <div class="row">

        <!-- Column 1 - general information about DeliveBoo -->
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

        <!-- Column 2 - legal information and policies -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5>Legal notes</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
            <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" class="text-light text-decoration-none">Cookies</a></li>
            <li><a href="#" class="text-light text-decoration-none">Classification of partners</a></li>
            <li><a href="#" class="text-light text-decoration-none">Requests from Public Authorities</a></li>
          </ul>
        </div>

        <!-- Column 3 : help and support -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5>help</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Contacts</a></li>
            <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
            <li><a href="#" class="text-light text-decoration-none">Types of cuisine</a></li>
          </ul>
        </div>
      </div>

      <!-- Section for mobile app downloads -->
      <div class="take-deliveboo mb-5 text-center">
        <h3 class="text-uppercase">Take DeliveBoo with you</h3>
        <div class="d-flex justify-content-center gap-3">
          <img src="/public/images/appstore.jpeg" alt="App Store" class="store-logo">
          <img src="/public/images/googleplay.jpeg" alt="Google Play" class="store-logo">
        </div>
      </div>

      <!-- Bottom section -->
      <div class="d-flex justify-content-between align-items-center mt-4 border-top pt-3">

        <div class="social-icons">
          <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
          <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
        </div>

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

  .border-top {
    border-top: 1px solid #444;
    margin-top: 2rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;

    .icon {
      font-size: 1.5rem;
      color: #bbbbbb;
      transition: color 0.3s ease;

      &:hover {
        color: #1877f2;
      }
    }

    .fa-facebook:hover {
      color: #1877f2;
    }

    .fa-twitter:hover {
      color: #1da1f2;
    }

    .fa-instagram:hover {
      color: #e1306c;
    }
  }

  .d-flex {
    justify-content: space-between;
    align-items: center;
  }

  .take-deliveboo {
    h5 {
      font-weight: 700;
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    .store-logo {
      display: inline-block;
      margin: 10px; 
      border-radius: 10px; 
      border: 2px solid #ddd; 
      padding: 5px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
      transition: all 0.3s ease;

        &:hover {
        transform: scale(1.05); 
        border-color: #00c7b6; 
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
        }
    }
  }

  .row {
    justify-content: center;
    gap: 1rem;

    .column-bg {
      background-color: #333333;
      padding: 1.5rem;
      border-radius: 0.5rem;
      text-align: left; 

      h5 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-transform: uppercase;
        color: #ffffff;
      }

      ul {
        padding: 0;
        list-style: none;

        li {
          margin-bottom: 0.5rem;

          a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 1rem;

            &:hover {
              color: #00c7b6 !important;
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

  p {
    font-size: 0.9rem;
    color: #bbbbbb;
    margin: 0;
  }
}

</style>
