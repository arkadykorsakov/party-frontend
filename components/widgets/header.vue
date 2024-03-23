<template>
   <header>
      <nav
         class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
         <UContainer class="flex flex-wrap justify-between items-center py-4">
            <NuxtLink class="flex items-center" to="/">
               <span
                  class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                  >Party</span
               >
            </NuxtLink>
            <div class="flex items-center lg:order-2">
               <FeaturesSwitcherTheme />
               <NuxtLink v-slot="{ navigate }" to="/" custom>
                  <UButton
                     class="mx-2"
                     size="md"
                     color="black"
                     variant="link"
                     @click="navigate"
                     >Войти</UButton
                  >
               </NuxtLink>
               <NuxtLink v-slot="{ navigate }" to="/" custom>
                  <UButton size="md" color="green" @click="navigate"
                     >Регистрация</UButton
                  >
               </NuxtLink>
            </div>
         </UContainer>
      </nav>
   </header>
</template>
