<template>
    <div class="grid xl:grid-cols-4 grid-cols-1 gap-4">
        <div class="rounded w-full lg:w-1/2 xl:w-full p-4 shadow bg-gray-900 text-white">
            <div class="flex ">
                <div class="w-2/3">
                    <h1 class="font-semibold">
                    Game Title
                    </h1>
                    <h1>{{ game_title }}</h1>
                </div>
                <div class="w-1/3">
                    <span class="float-right text-xs bg-blue-400 rounded px-2 py-1 text-white">Active</span>
                </div>
            </div>
            <div class="py-4 text-sm">
                <h1 class="font-semibold">
                    Points
                </h1>
                <h1>{{ points }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['game_title','points'],
}
</script>
<style scoped>

</style>