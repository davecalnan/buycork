<template>
  <footer class="bg-grey-light p-8 md:py-16">
    <section class="md:flex mx-auto w-full max-w-xl">
      <div class="md:w-1/4 md:flex flex-col items-center pb-8 md:pb-0">
        <div>
          <h1 class="text-semibold font-serif">by 3xW</h1>
          <ul class="list-reset">
            <li class="my-4">
              <a href="https://3xw.ie" class="no-underline text-grey-darkest">About 3xW</a>
            </li>
            <li class="my-4">
              <a href="https://3xw.ie" class="no-underline text-grey-darkest">Work with 3xW</a>
            </li>
            <!-- <li class="hidden md:block my-4">
              <a href="" class="invisible">Hi</a>
            </li> -->
            <li class="my-4">
              <p class="no-underline text-grey-darkest">&copy; 3xW Digital Ltd, 2018</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:w-1/4 md:flex flex-col items-center pb-8 md:pb-0">
        <div>
          <p class="uppercase tracking-wide leading-looser">Navigation</p>
          <ul class="list-reset">
            <li class="my-4">
              <nuxt-link to="/" class="no-underline text-grey-darkest">Home</nuxt-link>
            </li>
            <li class="my-4">
              <nuxt-link to="/blog" class="no-underline text-grey-darkest">Blog</nuxt-link>
            </li>
            <!-- <li class="my-4">
              <nuxt-link to="/about" class="no-underline text-grey-darkest">About</nuxt-link>
            </li> -->
            <li class="my-4">
              <a href="https://davecalnan.typeform.com/to/NaZY4J" target="_blank" class="no-underline text-grey-darkest">Submit a Store</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:w-1/4 md:flex flex-col items-center pb-8 md:pb-0">
        <div>
          <p class="uppercase tracking-wide leading-looser">Find new favourites</p>
          <ul class="list-reset">
            <li class="my-4">
              <nuxt-link to="/brunch" class="no-underline text-grey-darkest">Brunch</nuxt-link>
            </li>
            <li class="my-4">
              <nuxt-link to="/lunch" class="no-underline text-grey-darkest">Lunch</nuxt-link>
            </li>
            <li class="my-4">
              <nuxt-link to="/coffee" class="no-underline text-grey-darkest">Coffee</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:w-1/4 md:flex flex-col items-center">
        <div>
          <p class="uppercase tracking-wide leading-looser">Find local alternatives</p>
          <ul class="list-reset">
            <li class="my-4">
              <nuxt-link to="/local-alternatives-to/starbucks" class="no-underline text-grey-darkest">Starbucks</nuxt-link>
            </li>
            <li class="my-4">
              <nuxt-link to="/local-alternatives-to/specsavers" class="no-underline text-grey-darkest">Specsavers</nuxt-link>
            </li>
            <li class="my-4">
              <nuxt-link to="/local-alternatives-to/costa" class="no-underline text-grey-darkest">Costa</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>
