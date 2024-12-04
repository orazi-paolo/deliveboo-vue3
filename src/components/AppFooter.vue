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

        <!-- column 1 -->
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

        <!-- column 2 -->
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

        <!-- column 3 -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5 class="text-uppercase">Aiuto</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Contacts</a></li>
            <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
            <li><a href="#" class="text-light text-decoration-none">Types of cuisine</a></li>
          </ul>
        </div>

        <!-- column 4 -->
        <div class="col-12 col-md-3 mb-4 column-bg">
          <h5 class="text-uppercase">Take DeliveBoo with you</h5>
          <img src="/public/app-store-logo.png" alt="Store" class="mb-2 w-75">
          <img src="/public/Playstore.png" alt="Google Play" class="mb-2 w-75">
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
        <p class="mb-0">&copy; 2024 DeliveBoo</p>
        <!-- <div>
          <a href="#" class="text-light text-decoration-none mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-light text-decoration-none mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-light text-decoration-none mx-2"><i class="fab fa-instagram"></i></a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #222; /* Scuro ma non nero */
  color: #fff;
  padding: 40px 0;

  .container {
    .row {
      margin-bottom: 20px;

      .col-md-3 {
        margin-bottom: 20px;

        .column-bg {
          background-color: #333;
          padding: 20px;
          border-radius: 5px;
        }

        h5 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #fff;
          font-weight: bold;
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

              &:hover {
                color: #00c7b6; /* Azzurro al passaggio del cursore */
              }
            }
          }
        }
      }
    }

    .border-top {
      border-color: rgba(255, 255, 255, 0.1);
      margin-top: 20px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;

      a {
        color: #ddd;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: #00c7b6;
        }
      }
    }
  }

  .app-buttons {
    img {
      width: 100px;
      margin-bottom: 10px;
    }
  }
}

img {
  max-width: 80%;
  margin: 0 auto;
  display: block;
}

</style>