<template lang="html">
    <header class="hidden lg:block">
        <nav class="flex items-center justify-between py-5 px-10">
            <a href="/">
                <h1 class="text-3xl font-bold text-gray-500">
                    Food<span class="text-green-500">Mood</span>
                </h1>
            </a>

            <div class="flex gap-8">
                <a href="/"
                    class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out">Home
                </a>
                <a href="/about"
                    class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out">About
                </a>
                <a href="/recipes"
                    class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out">Recipes
                </a>
                <a href="/download"
                    class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out">Download
                </a>
                <a href="/contact"
                    class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out">Contact
                </a>
            </div>

            <div class="relative">
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">

                    </span>
                    <input
                        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for recipes..."
                        type="text"
                        name="search" />
                </label>



            </div>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>