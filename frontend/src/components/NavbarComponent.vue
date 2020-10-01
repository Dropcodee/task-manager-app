<template>
    <div class="fixed top-0 animated z-40 w-full">
        <div class="bg-gray-100 antialiased">
            <div class="w-full flex justify-between items-center px-8 md:px-12 py-3 shadow-sm hover:shadow-md transition ease-in-out duration-500">
                <div>
                    <p class="text-lg text-gray-700 font-semibold">
                        <span class="text-purple-600">Simple</span> Tasks</p>
                </div>
                <div class="block md:hidden">
                    <button class="rounded-lg focus:outline-none" @click="open = !open">
                        <svg class="fill-current w-6 h-6 text-gray-700" fill="fill-current text-gray-700" viewBox="0 0 20 20">
                            <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:block">
                    <router-link :to="{name: 'Home'}">
                        <button class="px-8 py-3 rounded-md focus:outline-none bg-gray-200 mx-2 hover:text-purple-600 transition ease-in-out duration-500 hover:shadow">Home
                        </button>
                    </router-link>
                    <router-link :to="{name: 'Tasks'}">
                        <button class="px-8 py-3 rounded-md bg-gray-200 focus:outline-none mx-2 hover:text-purple-600 transition ease-in-out duration-500 hover:shadow">
                            Tasks
                        </button>
                    </router-link>
                </div>
            </div>
            <div :class="open ? 'block' : 'hidden' ">
                <button class="w-full block text-left focus:outline-none hover:bg-gray-200 transition ease-in-out duration-500 px-10 py-3">
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </button>
                <button class="w-full block text-left focus:outline-none hover:bg-gray-200 transition ease-in-out duration-500 px-10 py-3">
                    <router-link :to="{name: 'Tasks'}">Tasks</router-link>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'NavbarComponent',

    data() {
        return {
            open: false
        };
    },
};
</script>
<style lang="css" scoped>
</style>