<template>
  <footer class="bg-grey-light p-8 md:py-16">
    <section class="md:flex mx-auto w-full max-w-lg">
      <div class="md:w-1/2 md:flex flex-col items-center pb-8 md:pb-0">
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
              <p class="no-underline text-grey-darkest">&copy; 3xW Digital Limited, 2018</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:w-1/2 md:flex flex-col items-center pb-8 md:pb-0">
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
            <!-- <li class="my-4">
              <nuxt-link to="/submit" class="no-underline text-grey-darkest">Submit a Store</nuxt-link>
            </li> -->
          </ul>
        </div>
      </div>
      <!-- <div class="md:w-1/3 md:flex flex-col items-center">
        <div>
          <p class="uppercase tracking-wide leading-looser">Click &amp; Collect</p>
          <ul class="list-reset">
            <li class="my-4">
              <a href="" class="no-underline text-grey-darkest">Cork</a>
            </li>
            <li class="my-4">
              <a href="" class="no-underline text-grey-darkest">Dublin</a>
            </li>
            <li class="my-4">
              <a href="" class="no-underline text-grey-darkest">Galway</a>
            </li>
            <li class="my-4">
              <a href="" class="no-underline text-grey-darkest">Limerick</a>
            </li>
          </ul>
        </div>
      </div> -->
    </section>
  </footer>
</template>
