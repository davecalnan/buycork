<template>
  <header class="bg-blue p-4 bg-cover bg-center bg-black-50 bg-multiply" style="background-image: url(/shopping-bags.jpg)">
    <nav class="flex flex-col md:flex-row md:items-center md:justify-between md:mx-12">
      <span>
        <h1 class="text-white font-extrabold uppercase mb-4 md:mb-0">Clicks &amp; Mortar</h1>
      </span>
      <span>
        <ul class="list-reset flex">
          <li>
            <nuxt-link to="/blog" class="text-white uppercase no-underline tracking-wide border-b-2 mr-8">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="text-white uppercase no-underline tracking-wide mr-8">About</nuxt-link>
          </li>
          <li>
            <a onclick="Intercom('showNewMessage')" class="text-white uppercase no-underline tracking-wide cursor-pointer">Contact</a>
          </li>
        </ul>
      </span>
    </nav>
    <h1 class="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white md:w-screen-60 mx-auto mt-12 mb-24 md:mt-24 md:mb-32">Find a store near you offering <br class="hidden lg:inline">click-and-collect.</h1>
  </header>
</template>
