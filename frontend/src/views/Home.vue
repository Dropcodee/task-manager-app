<template>
    <div class="home">
        <div class="bg-white rounded-md w-8/12 shadow mx-auto px-8 py-6 hover:shadow-md transition ease-in-out duration-500">
            <p class="text-gray-700 font-semibold text-center text-2xl">Welcome To Simple Tasks</p>
            <p class="text-gray-700 my-3 text-center">Create simple todos for all your projects right here on simple tasks</p>
            <div class="flex justify-center mt-12">
                <router-link class="px-6 py-3 border-none rounded-md transition ease-in-out duration-500 text-gray-300 bg-gray-900 hover:bg-purple-600 mx-3" :to="{name: 'Tasks'}">
                    <button>View Your Tasks</button>
                </router-link>
                <router-link class="px-6 py-3 border-2 border-gray-300 rounded-md transition ease-in-out duration-500 hover:text-white hover:bg-purple-600 mx-3 hover:border-transparent" :to="{name: 'Tasks'}">
                    <button>Create Tasks</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>